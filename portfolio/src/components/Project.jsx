import React from 'react';
import ProjectItem from './ProjectItem'
import projectItem from '../assets/react.svg'

const data = [
    {
        title: "Automatic Text Summarization",
        description: ["Programmed and evaluated 4 different models for Automatic Text Summarization using Python, Keras, Tensorflow, Scikit-learn, Pandas, Jupyter and Huggingface", 
        "Developed and evaluated performance of BERT, MMR and Centroid Ranking and with transfer learning with PEGASUS to generate prompts for Stable Diffusion model, achieving precision of 0.812"],
        link: "/Automatic Summarization.pdf",
    },

    {
        title: "Parallel Apriori Algorithm",
        description: ["Developed Parallel version of Apriori Frequent Itemset Mining Algorithm in Apache Spark using Scala and Java with pruning step and distributed Hash Tree implementation on Sequence count of over 77000 with 3340 unique items",
    "Ran algorithm on AWS EMR, S3 and evaluated speedup and runtime with different hyperparameters and clusters"],
        link: "/Parallel Apriori Algorithm.pdf"
    },

    {
        title: "NLP Based Product Recommendation",
        description: [
            "Modified BERT Architecture to predict latent user feature vectors generated from Alternating Least Squares Algorithm from Yelp Reviews Data using Python, Pandas, HuggingFace, TensorFlow, Keras and Azure Machine Learning",
            "Evaluated Performance of 5 variations of the BERT architecture (RoBERTa, DeBERTa, DistilBERT, AlBERT)"
        ],
        link: "/Recommendation System Project.pdf"
    },

    {
        title: "Stock Portfolio",
        description: [
            "Created stock management system with real-time data from Vanguard API in Java with Java Swing based GUI with data persistence and performance optimization by following SOLID principles and MVC architecture",
            "Created comprehensive testing suite with randomized data inputs in JUnit"
        ],
        link: ""
    }
]

const Projects = () => {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 snap-start'>
            <h1 className = "text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
            <p className = "text-center py-8">
                These are some of the projects I have worked on in an Academic or Personal Setting, click on More Info to view a more detailed report of the project.
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