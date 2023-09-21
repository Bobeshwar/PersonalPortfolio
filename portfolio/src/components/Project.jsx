import React from 'react';
import ProjectItem from './ProjectItem'
import projectItem from '../assets/react.svg'

const data = [
    {
        title: "Automatic Text Summarization",
        description: ["This is my project", "I am cool"],
        link: "link",
    }
]

const Projects = () => {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className = "text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
            <p className = "text-center py-8">
                These are all the projects I have done. I am so cool aren't I.
            </p>
            <div className="grid xl:grid-cols-2 gap-12">
                {data.map((record,idx)=>(
                    <ProjectItem key = {idx} title={record.title} description={record.description} link={record.link}/>
                ))}
            </div>
        </div>
    )
}

export default Projects