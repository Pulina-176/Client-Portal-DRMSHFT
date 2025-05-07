import dotenv from 'dotenv';
import fetch from 'node-fetch';  // Ensure node-fetch is imported

dotenv.config();

export const test = (req, res) => {
    res.json({ message: "Admin API is working..." });
};

export const getAllTasks = async (req, res) => {
    try {
        const response = await fetch(`https://api.clickup.com/api/v2/list/901800309273/task?include_subtasks=true`, {
            method: 'GET',
            headers: {
                'Authorization': process.env.API_TOKEN,
                'Content-Type': 'application/json'
            },
            // credentials: 'include',
        });

        const responseBody = await response.json();
        console.log(responseBody)

        // Check if tasks are present
        if (!responseBody.tasks || responseBody.tasks.length === 0) {
            return res.status(404).json({ message: 'No tasks found' });
        }

        // Iterate over all tasks to filter their subtasks with 'in progress' status
        const taskDetails = responseBody.tasks.map(task => {
            // Ensure subtasks exist before filtering
            const status = task.status.status;
            const ongoingSubtasks = (task.subtasks || []).filter(subtask => subtask.status && subtask.status.status === "in progress");

            // Return task id, name, and filtered ongoing subtasks
            return {
                link: `${process.env.REDIRECT_CLIENT_URL_HEAD}/portal/`+task.id,
                name: task.name,
                status: status,
                // subtasks: ongoingSubtasks.map(subtask => ({
                //     id: subtask.id,
                //     name: subtask.name
                // }))
            };
        });
        console.log("taskDetails", taskDetails)

        // Send the filtered task details
        res.status(200).json(taskDetails);

    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ error: 'Something went wrong!' });
    }
};
