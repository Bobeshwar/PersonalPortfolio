import React from 'react';
import {TypeAnimation} from 'react-type-animation';
import {FaGithub,FaLinkedin} from 'react-icons/fa';

const Main = () => {
    return (
        <div id = "main">
            <img className = "w-full h-screen object-cover object-left scale-x-[-1]" src="../assets/ProfileCompressed.jpg" alt='my photo'></img>
            <div className = "w-full h-screen absolute top-0 left-0 bg-white/50">
                <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center"> 
                <h1 className = "sm:text-5xl text-4xl font-bold text-gray-800">I'm Ameya Rane</h1>
                <h2 className = "flex sm-3xl text-2xl pt-4 text-gray-800">I'm a
                    <TypeAnimation
                        sequence={[
                            'Developer',
                            1000,
                            'Coder',
                            1000,
                            'Full Stack Developer',
                            1000,
                        ]}
                        wrapper='div'
                        cursor={true}
                        repeat={Infinity}
                        style={{fontSize:'1em', paddingLeft: '5px'}}>

                    </TypeAnimation>
                </h2>
                <div className = "flex justify-between pt-6 max-w-[200px] w-full">
                    <FaGithub className = 'cursor-pointer' size={20}/>
                    <FaLinkedin className = 'cursor-pointer' size = {20}/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Main