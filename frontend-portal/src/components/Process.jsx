import React from 'react'


const Process = ({taskLIST}) => {
  return (
    <section className="relative flex flex-col justify-center overflow-hidden antialiased">
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
        <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">


            <div className="w-full max-w-3xl mx-auto">

                
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                {taskLIST.map((task, index) => (

                   
                    <div key={index} className="relative">
                        <div className="md:flex items-center md:space-x-4 mb-3">
                            <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                               
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                                    <svg className="fill-emerald-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                        <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                                    </svg>
                                </div>
                               
                                <time className="text-sm font-medium text-indigo-500 md:w-28">{task.dueDate}</time>
                            </div>
                            
                            <div class="text-slate-500 font-bold ml-14">{task.name}</div>
                        </div>
                      
                        <div className="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-14 md:ml-44">{task.status}</div>
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