import React from 'react';
import WorkItem from './WorkItem';

const data = [
    {
        year: 2023,
        title: 'Teaching Assistant',
        duration: '9 Months',
        details:
        'lopi',
    },
    {
        year: 2019,
        title: 'Lead Frontend Developer',
        duration: '3 Years',
        details:
        'Lopop dsfds fds fds fds sdf sdf sdf dsfdfsgwe ewr werwe rew ewr ewr ew ewr ewr wer werfsdf sdf dsfdsf dsfds dsf sdf dsf dsf dsfds dsfsd dsf dsf ',
    }
]

const Work = () => {
    return (
        <div id = "work" className = 'max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className = 'text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
            {data.map((item,idx)=>(
                <WorkItem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details}/>
            ))}
        </div>
    )
}

export default Work;