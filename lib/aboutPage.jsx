'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';
import Image from 'next/image';

export const about = [
    {
        "type": "Artist(s)",
        "data": [
            {
                "title": "Hansel Pam",
                "img": "/hansel/hansel.jpg",
                "description": `Hansel is a professionally trained artist having earned his bachelor’s degree in fine art from the prestigious Ahmadu Bello University. His academic journey laid the foundation for a career marked by innovation and a relentless pursuit of artistic excellence. 
                
                Throughout the years, Hansel has immersed himself in the world of fine art, channeling his passion into meticulous research and experimentation. His artistic evolution led him to a groundbreaking discovery of a masking technique that has become the hallmark of his distinctive style.
                
                This masking technique, honed through years of dedication, has allowed Hansel to breathe new life into traditional watercolor and ink painting. The transformation is nothing short of spectacular, as he deftly weaves layers of meaning and emotion onto the canvas and papers. His work stands as a testament to the transformative power of art, transcending the boundaries of conventional media.`
            }
            // {
            //     "title": "Isaac Udoh",
            //     "img": "/avatar.png",
            //     "description": "Isaac Udoh, was born on the 23rd of October 1991 in Jos, Plateau State. He is from Jos South Local Government in Plateau State. He attended Air force primary School in Jos, Plateau State and moved to a secondary school called Bethany Christian Academy, Barkin Ladi in the same State. "
            // },
        ]
    },
    {
        "type": "Exhibition(s)",
        "data": [
            {
                "title": "FEWL",
                "img": "/ewl.jpeg",
                "subtitle": "From Eko With Love",
                "description": "From Eko With Love is an art exhibition showcasing beautiful works from a myriad of wonderful artists, organised by Hans Artss studio at Landmark Retail Boulevard, Water Corporation Road, Victoria Island in Lagos. This event is set to hold on December 23rd. Lovers of art and creatives, this is an event you sure dont want to miss out on."
            },
        ]
    }     
];

const AboutPage = () => {
    const [index, setIndex] = useState(0);
    const [innerIndex, setInnerIndex] = useState(0);
    const [type, setType] = useState("");
    const [exIndex, setexIndex] = useState(0);
    return (
        <div className="min-h-screen bg-primary/30 py-32 text-center">
            <motion.div className='flex py-6 px-6 flex-col sm:flex-row'>
                {
                    index == 0 ?
                    <motion.div 
                variants={fadeIn('right' , 0.2)} 
                initial="hidden" 
                animate="show" 
                exit="hidden"
                className='flex flex-col justify-center items-center rounded-lg w-full h-[15rem] sm:h-full xl:max-w-[42%]'>
                    {about[index].data.map((abouts, aboutsId) => (
                        (aboutsId == innerIndex) && 
                        <Image
                        key={aboutsId}
                        src={abouts.img}
                        alt={abouts.title}
                        width={450}
                        height={450}
                        className='w-[90%] h-[90%] object-contain rounded-lg'
                    />
                    ))}
                </motion.div>
                :
                <motion.div 
                variants={fadeIn('right' , 0.2)} 
                initial="hidden" 
                animate="show" 
                exit="hidden"
                className='flex flex-col justify-center items-center rounded-lg w-full xl:max-w-[42%]'>
                    {about[index].data.map((abouts, aboutsId) => (
                        (aboutsId == exIndex) && 
                        <Image
                        key={aboutsId}
                        src={abouts.img}
                        width={450}
                        height={450}
                        alt={abouts.title}
                        className='w-[90%] h-[90%] object-contain rounded-lg'
                    />
                    ))}
                </motion.div>
                }
                <motion.div
                className='flex flex-col w-full xl:max-w-[48%]'
                >
                   
                    <motion.div
                    variants={fadeIn('up' , 0.2)} 
                    initial="hidden" 
                    animate="show" 
                    exit="hidden"
                        className='py-2 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'
                    >
                        <motion.div
                            className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'
                        >
                            {about.map((item, itemIndex) => {
                                return (
                                    <div
                                        key={itemIndex}
                                        className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                                        onClick={() => setIndex(itemIndex)}
                                    >
                                        {item.type}
                                    </div>
                                )
                            })}
                        </motion.div>
                    </motion.div>
                    <motion.div
                    variants={fadeIn('up' , 0.3)} 
                    initial="hidden" 
                    animate="show" 
                    exit="hidden"
                        className='py-2 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'
                    >
                       {
                        index == 0 ? 
                        <motion.div
                        className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'
                    >
                        {about[index].data.map((item, itemIndex) => {
                            return (
                                <div
                                    key={itemIndex}
                                    className={`${innerIndex === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                                    onClick={() => setInnerIndex(itemIndex)}
                                >
                                    {item.title}
                                </div>
                            )
                        })}
                    </motion.div>
                    :
                    <motion.div
                    className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'
                >
                    {about[index].data.map((item, itemIndex) => {
                        return (
                            <div
                                key={itemIndex}
                                className={`${exIndex === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                                onClick={() => setexIndex(itemIndex)}
                            >
                                {item.title}
                            </div>
                        )
                    })}
                </motion.div>
                       }
                    </motion.div>
                   {
                    index == 1  ?
                    <motion.div 
                    variants={fadeIn('up' , 0.4)} 
                    initial="hidden" 
                    animate="show" 
                    exit="hidden"
                    key={exIndex}
                    className='flex-1 flex flex-col max-w-max gap-x-2 items-center'
                >
                    <div>
                        {about[index].data.map((subItem, subItemIndex) => (
                            (subItemIndex == exIndex) && 
                           <>
                           <div key={subItemIndex} className='flex flex-start py-2 font-bold '>
                                {subItem?.subtitle}
                            </div>
                             <div className='flex flex-start text-justify' key={subItemIndex}>
                                <p>
                             {subItem.description}
                                </p>
                         </div>
                           </>
                        ))}
                    </div>
                   
                </motion.div>
                :
                <motion.div 
                variants={fadeIn('up' , 0.4)} 
                initial="hidden" 
                animate="show" 
                exit="hidden"
                key={innerIndex}
                className='flex-1 flex flex-col max-w-max gap-x-2 items-center'
            >
                <div>
                    {about[index].data.map((subItem, subItemIndex) => (
                        (subItemIndex == innerIndex) && 
                       <>
                       <div key={subItemIndex} className='flex flex-start py-2 font-bold '>
                            {subItem?.subtitle}
                        </div>
                         <div className='flex flex-start text-justify' key={subItemIndex}>
                            <p>
                         {subItem.description}
                            </p>
                     </div>
                       </>
                    ))}
                </div>
               
            </motion.div>
                   }
                </motion.div>
            </motion.div>
        </div>
    );
};

export default AboutPage;

