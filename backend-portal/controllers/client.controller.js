import dotenv from 'dotenv';
import fetch from 'node-fetch';  // Ensure node-fetch is imported

dotenv.config();

export const test = (req, res) => {
    res.json({ message: "API is working..." });
};

export const fetchTaskWithSubtasks = async (req, res) => {
    const { taskid } = req.params;
    

    try {
        // Fetch task data including subtasks
        const response = await fetch(`https://api.clickup.com/api/v2/task/${taskid}?include_subtasks=true`, {
            method: 'GET',
            headers: {
                'Authorization': process.env.API_TOKEN,
                'Content-Type': 'application/json'
            },
        });

        // Log response body as text
        const responseBody = await response.json();
        const taskData = responseBody;
        const subtasks = taskData.subtasks;
        const clientNameField = taskData.custom_fields.find(field => field.name === '🤝 Client Name');
        const clientName = clientNameField ? clientNameField.value : 'Unknown Client';



        // Check if the response was successful
        if (!response.ok) {
            throw new Error(`Failed to fetch task data: ${responseBody}`);
        }

        // Return the raw response body
        res.status(response.status).json({subtasks: subtasks, taskData: taskData, clientName: clientName});

    } catch (error) {
        // Log error and send a 500 status code response
        console.error('Error fetching task data:', error.message);
        res.status(500).json({ error: error.message });
    }
};
