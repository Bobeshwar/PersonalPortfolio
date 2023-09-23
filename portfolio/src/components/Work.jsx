import React from 'react';
import WorkItem from './WorkItem';

const data = [
    {
        year: 2023,
        title: 'Teaching Assistant',
        duration: 'Ongoing',
        details:
            ['Teaching Assistant for Discrete Structures ( Honors Section ), Algorithms', 'Conducted Recitations of Topic including Graphs, Maximum Flow, Sorting, Searching, Data Structures, Amortized Analyses', 'Build MATLAB projects for students to work with to learn and developer algorithms'],
    },

    {
        year: 2022,
        title: 'Computer Science Gradaute Student at Northeastern University',
        duration: '2 Years',
        details: [
            'Courses: Algorithms, Large Scale Parallel Data Processing, Natural Language Processing, Foundations of Artificial Intelligence, Information Retrieval, Fundamentals of Software Engineering',
            'GPA: 4.0/4.0',
            'Technological Core Member of Google Student Developers Club',
            'Technical Support Member of INFORMS Student Chapter Northeastern'
        ]
    },

    {
        year: 2019,
        title: 'Lead Frontend Developer',
        duration: '3 Years',
        details:
            ['Led an agile team of 4 front-end engineers to establish landing pages for a major multinational company with HTML/CSS/Javascript/Bootstrap ,JQuery,Adobe Experience Manager',
                'Created loading and manipulation scripts for over 40 table schemas using Oracle SQL and Toad, and performed optimizations by porting SQL code to PySpark, Hive',
                'Constructed 2 new API endpoints on Node/Express server and Apigee to query and retrieve data from database.',
                'Organized key landing pages overhaul to improve SEO performance rating by 50% by reworking JavaScript files',
                'Conceptualized and deployed full stack chatbot for career page powered by Rasa framework, Angular, Typescript and MongoDb handling queries for 6 different career programs and generalized chitchat with an intent classification accuracy over 96%',
                'Created NLP training data entry portal using React, MongoDb, Passport, Docker, GitLab, Jenkins and Node/Express with Responsive UI across all the frequently used screen dimensions on RedHat Azure VM']
    },

    {
        year: 2015,
        title: 'Mechanical Engineer/Computer Science Undergraduate at College of Engineering, Pune',
        duration: '4 years',
        details: [
            'Relevant Courses: Intermediate Programming Tools, C Programming, Object Oriented Programming in Java, Programming Paradigms, Files, Data Structures and Algorithms, Web Programming, CAD/CAM, Machine Learning for Mechanical Engineers, Robotics, Advanced CAM/CAM',
            'GPA: 8.68/10',
        ]
    }
]

const Work = () => {
    return (
        <div id="work" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
            {data.map((item, idx) => (
                <WorkItem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details} />
            ))}
        </div>
    )
}

export default Work;