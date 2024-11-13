import React, { useEffect, useState } from "react";
import { DocumentIcon } from "@heroicons/react/24/solid";
import { FaCopy } from "react-icons/fa6";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  Card,
  Input,
  Checkbox,
  CardHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";

const TABLE_HEAD = [
  {
    head: "Project Name",
    
  },
  {
    head: "Project Status",
  },
  {
    head: "Client Link",
  },
  // {
  //   head: "Link Status (if sent put the tick mark)",
    
  // },
];

// const TABLE_ROWS = [
//   {
//     name: "Dileep Saranga",
//     ongoingtask: "CV Edit Part 1",
//     clientlink: "abcdef",
//     linkstatus: "",
    
    
//   },
//   {
//     name: "Dileep Saranga",
//     ongoingtask: " Part 1",
//     clientlink: "abcdef",
//     linkstatus: "",
    
//   },
//   {
//     name: "Dileep Saranga",
//     ongoingtask: "CV Edit Part 1",
//     clientlink: "abcdef",
//     linkstatus: "",
    
//   },
//   {
//     name: "Dileep Saranga",
//     ongoingtask: "CV Edit Part 1",
//     clientlink: "abcdef",
//     linkstatus: "",
    
//   },
//   {
//     name: "Dileep Saranga",
//     ongoingtask: "CV Edit Part 1",
//     clientlink: "abcdef",
//     linkstatus: "",
    
//   },
// ];

const Content = ({allProjects, searchQuery}) => {

  const test = allProjects.projects

  // State to track which row's text has been copied
  const [copiedIndex, setCopiedIndex] = useState(null);

  // Copy function to handle copying text to clipboard
  const handleCopy = (text, index) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedIndex(index); // Set the copied row index to show confirmation
        setTimeout(() => setCopiedIndex(null), 2000); // Remove confirmation after 2 seconds
      })
      .catch((err) => console.error("Failed to copy text: ", err));
    };

      //const [filteredProjects, setFilteredProjects] = useState([]);

  /*useEffect(() => {
    const filtered = allProjects.projects.filter((project) =>
      project.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProjects(filtered);
  }, [searchQuery, allProjects]);
  }; */
  const filteredProjects = test.filter((project) =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase())
  );



  return (
    <div className="p-8 md:p-36 min-h-screen w-full flex flex-col items-start font-poppins bg-primary text-tertiary">
      <Card className="h-full w-full p-8 overflow-x-auto">
        
        <table className="w-full min-w-max table-auto text-left bg-white text-black">
          <thead className="text-[36px]">
            <tr>
              {TABLE_HEAD.map(({ head, icon }) => (
                <th key={head} className="border-b border-gray-300 p-8">
                  <div className="flex items-center gap-1">
                    {icon}
                    <Typography color="blue-gray" variant="small" className="!font-bold">
                      {head}
                    </Typography>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
          {filteredProjects.map((project, index) => {
            //{test.map((project, index) => {
              //const isLast = index === test.length - 1;
              const isLast = index === filteredProjects.length - 1;
              const classes = isLast ? "p-8" : "p-8 border-b border-gray-300";

              return (
                <tr key={project.name}>
                  <td className={`${classes} flex-1 md:flex-none`}>
                    <Typography variant="small" color="blue-gray" className="font-bold">
                        {project.name}
                      </Typography>
                    
                  </td>
                  <td className={`${classes} flex-1 md:flex-none`}>
                    <Typography variant="small" className="font-normal text-gray-600">
                      {project.status}
                    </Typography>
                  </td>
                  <td className={`${classes} flex-1 md:flex-none`}>
                    <Typography variant="small" className="font-normal text-gray-600">
                      <div className="flex flex-row">
                          <input  type="text" className="text" value={project.link}
                                  readOnly
                                  style={{ width: `${project.link.length}ch` }} />
                          <button 
                              onClick={() => handleCopy(project.link, index)} // Call the copy function on click
                              id={index}
                              className="cursor-pointer p-1">
                              
                              <FaCopy />
                          </button>
                          {copiedIndex === index && (
                            <span className="ml-2 text-green-500 font-semibold text-sm">
                              Copied!
                            </span>
                          )}
                      </div>

                    </Typography>
                  </td>
                  
                  {/* <td className={`${classes} flex-1 md:flex-none`}>
                
                    <Typography variant="small" className="font-normal text-gray-600">
                      {linkstatus}
                      <Checkbox />
                    </Typography>
                  </td> */}
                  
                 
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default Content;