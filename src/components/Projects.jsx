import React, { useEffect, useState } from 'react';
import { assets, projectsData } from '../assets/assets';
import { motion } from "motion/react"

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(1);

    useEffect(() => {
        const updateCardsToShow = () => {
            if (window.innerWidth >= 1024) {
                setCardsToShow(3);
            } else if (window.innerWidth >= 768) {
                setCardsToShow(2);
            } else {
                setCardsToShow(1);
            }
        };
        updateCardsToShow();

        window.addEventListener('resize', updateCardsToShow);
        return () => window.removeEventListener('resize', updateCardsToShow);
    }, [])

    const nextProject = () => {
        setCurrentIndex((prevIndex) => {
            const maxIndex = Math.max(0, projectsData.length - cardsToShow);
            return prevIndex >= maxIndex ? maxIndex : prevIndex + 1;
        });
    }
    
    const prevProject = () => {
        setCurrentIndex((prevIndex) => {
            return prevIndex <= 0 ? 0 : prevIndex - 1;
        });
    }

    const getCardPadding = () => {
        if (cardsToShow === 1) {
            return { paddingLeft: '1rem', paddingRight: '1rem' };
        } else if (cardsToShow === 2) {
            return { paddingRight: '1rem' };
        } else {
            return { paddingRight: '1rem' };
        }
    };

    return (
        <motion.div 
        initial={{opacity: 0, x: -200}}
        transition={{duration: 1}}
        whileInView={{opacity:1 ,x:0}}
        viewport={{once: true}}
        className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:32 my-20 w-full overflow-hidden flex flex-col' id='Projects'>
            <div className='flex flex-col items-center'>
                <h1 className="text-4xl sm:text-4xl font-bold mb-2 ">Projects <span className="underline underline-offset-4 decoration-1 text-center font-light">Completed</span></h1>
                <p className="text-gray-500 max-w-80 mb-8 text-center">Crafting Spaces, Building Legacies-Explore Our Portfolio</p>
            </div>

            {/* slider button */}
            <div className='flex justify-end items-center mb-8'>
                <button
                    onClick={prevProject}
                    className='cursor-pointer p-3 bg-gray-200 rounded mr-2 hover:bg-gray-300 transition-colors' 
                    aria-label='Previous Project'>
                    <img
                        src={assets.left_arrow}
                        alt="Previous" />
                </button>
                <button
                    onClick={nextProject}
                    className='cursor-pointer p-3 bg-gray-200 rounded mr-2 hover:bg-gray-300 transition-colors' 
                    aria-label='Next Project'>
                    <img src={assets.right_arrow} alt="Next" />
                </button>
            </div>

            {/* Project Slider Container */}
            <div className='overflow-hidden'>
                <div className='flex transition-transform duration-500 ease-in-out'
                style={{
                    transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`
                }}
                >
                    {projectsData.map((project, index)=>(
                        <div 
                        className='flex-shrink-0'
                        style={{
                            width: `${100 / cardsToShow}%`,
                            ...getCardPadding()
                        }}
                        key={index}>
                            <div className='relative'>
                                <img src={project.image} 
                                alt={project.title}
                                className='w-full h-auto mb-14 object-cover' />
                                <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                                    <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                                        <h2 className='text-xl font-semibold text-gray-800'>
                                            {project.title}
                                        </h2>
                                        <p className='text-gray-600'>
                                            {project.price} <span className='text-gray-400'>•</span> {project.location}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Projects;