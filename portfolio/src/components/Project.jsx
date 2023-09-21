import React from 'react';
import ProjectItem from './ProjectItem'
import projectItem from '../assets/react.svg'

const Projects = () => {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className = "text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
            <p className = "text-center py-8">
                These are all the projects I have done. I am so cool aren't I.
            </p>
            <div className="grid sm:grid-cols-2 gap-12">
                <ProjectItem img={projectItem} title="App1"/>
                <ProjectItem img={projectItem} title="App2"/>
                <ProjectItem img={projectItem} title="App3"/>
                <ProjectItem img={projectItem} title="App4"/>
            </div>
        </div>
    )
}

export default Projects