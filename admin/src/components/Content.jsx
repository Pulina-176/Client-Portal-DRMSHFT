import { DocumentIcon } from "@heroicons/react/24/solid";
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
    head: "Name",
    
  },
  {
    head: "Ongoing Task",
  },
  {
    head: "Client Link",
  },
  {
    head: "Link Status (if sent put the tick mark)",
    
  },
];

const TABLE_ROWS = [
  {
    name: "Dileep Saranga",
    ongoingtask: "CV Edit Part 1",
    clientlink: "abcdef",
    linkstatus: "",
    
    
  },
  {
    name: "Dileep Saranga",
    ongoingtask: "CV Edit Part 1",
    clientlink: "abcdef",
    linkstatus: "",
    
  },
  {
    name: "Dileep Saranga",
    ongoingtask: "CV Edit Part 1",
    clientlink: "abcdef",
    linkstatus: "",
    
  },
  {
    name: "Dileep Saranga",
    ongoingtask: "CV Edit Part 1",
    clientlink: "abcdef",
    linkstatus: "",
    
  },
  {
    name: "Dileep Saranga",
    ongoingtask: "CV Edit Part 1",
    clientlink: "abcdef",
    linkstatus: "",
    
  },
];

const Content = () => {
  return (
    <div className="p-36 md:p-36 min-h-screen w-full flex flex-col items-start font-poppins bg-primary text-tertiary">
      <Card className="h-full w-full p-8 overflow-x-auto">
        
        <table className="w-full min-w-max table-auto text-left bg-white text-black">
          <thead>
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
            {TABLE_ROWS.map(({ name, ongoingtask, clientlink, linkstatus}, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-gray-300";

              return (
                <tr key={name} flex flex-col md:flex-row md:table-row>
                  <td className={`${classes} flex-1 md:flex-none`}>
                    <Typography variant="small" color="blue-gray" className="font-bold">
                        {name}
                      </Typography>
                    
                  </td>
                  <td className={`${classes} flex-1 md:flex-none`}>
                    <Typography variant="small" className="font-normal text-gray-600">
                      {ongoingtask}
                    </Typography>
                  </td>
                  <td className={`${classes} flex-1 md:flex-none`}>
                    <Typography variant="small" className="font-normal text-gray-600">
                      {clientlink}
                      <IconButton variant="text" size="sm">
                        <DocumentIcon className="h-4 w-4 text-gray-900" />
                      </IconButton>
                    </Typography>
                  </td>
                  
                  <td className={`${classes} flex-1 md:flex-none`}>
                
                    <Typography variant="small" className="font-normal text-gray-600">
                      {linkstatus}
                      <Checkbox />
                    </Typography>
                  </td>
                  
                 
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