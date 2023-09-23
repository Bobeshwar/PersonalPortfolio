import React from 'react'

const ProjectItem = ({title, link, description}) => {
    return (
        <div className = "h-auto w-full shadow-x shadow-gray-400 rounded-xl px-10 ">
                <div className = "w-full pb-3">
                <h3 className = "text-lg font-semibold text-[#001b5e]">
                    {title}
                </h3>
                </div>
                <div className = "w-full">
                    <ul className = "list-disc">
                        {description.map((point,idx)=>(
                        <li key={idx} className="pt-0 text-base font-normal text-stone-500">{point}</li>))}
                </ul>
                {   
                    link ?
                    <a href={link}>
                        <p className="text-left pt-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-sm">More Info</p>
                    </a> :  <p className="text-left pt-3 rounded-lg bg-white text-green-700 font-bold cursor-pointer text-sm">Available on request</p>
                }
                </div>
        </div>
    )
}

export default ProjectItem