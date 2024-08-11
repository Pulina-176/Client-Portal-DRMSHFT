import React from 'react'
const Process = ({taskLIST}) => {

    const renderIcon = (status) => {
        switch (status) {
          case "done":
            return (
                
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              
            );
          case "in progress":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
              
            );
          case "to do":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
              </svg>
              
            );
          default:
            return null;
        }
      };

  return (
    <section class="relative flex flex-col justify-center overflow-hidden antialiased">
    <div class="w-full max-w-6xl mx-auto px-4 md:px-6 py-6">
        <div class="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">


            <div class="w-full max-w-3xl mx-auto">

                
                <div class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                {taskLIST.map((task, index) => (

                   
                    <div key={index} class="relative">
                        <div class="md:flex items-center md:space-x-4 mb-3">
                            <div class="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                               
                                <div class="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                                {renderIcon(task.status)}
                                </div>
                               
                                <time class="text-sm font-medium text-indigo-500 md:w-28">{task.dueDate}</time>
                            </div>
                            
                            <div class="text-slate-500 ml-14"><span class="text-slate-900 font-bold">{task.name}</span> {task.name}</div>
                        </div>
                      
                        <div class="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-14 md:ml-44">{task.status}</div>
                    </div>
                ))}
                    
                   
                                   
                </div>
               
            
            </div>

        </div>
    </div>
</section>
  )
}

export default Process