'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';

export const about = [
    {
        "type": "artists",
        "data": [
            {
                "title": "hansel pam",
                "img": "/avatar.png",
                "description": "Pam Hansel Jang, was born on the 23rd of October 1991 in Jos, Plateau State. He is from Jos South Local Government in Plateau State. He attended Air force primary School in Jos, Plateau State and moved to a secondary school called Bethany Christian Academy, Barkin Ladi in the same State. \nIn 2009, he got admission into Ahmadu Bello University Zaria and got a degree in Fine Arts in 2014. He ran a master’s degree program in the same institution. During this period he was able to make research on various techniques and approaches in painting. \nHe has spent his life teaching himself landscapes and abstract paintings, which reflects aesthetics and appreciation to his audience. These were mostly depicted using oil medium on canvas. His current discovery of a technique known as, ‘the masking’ technique, in which he uses the masking fluid, a latex-based product to create artworks that are appreciated and often times,  tell a story about himself and others or nature also. His media is mostly water colour and ink together with the masking fluid to create his art. In the masking technique, he hoped to create different shades of transparency and also using the negative and positive lines differently on approach which he was able to achieve that."
            }
            // {
            //     "title": "Isaac Udoh",
            //     "img": "/avatar.png",
            //     "description": "Isaac Udoh, was born on the 23rd of October 1991 in Jos, Plateau State. He is from Jos South Local Government in Plateau State. He attended Air force primary School in Jos, Plateau State and moved to a secondary school called Bethany Christian Academy, Barkin Ladi in the same State. "
            // },
        ]
    },
    {
        "type": "exhibitions",
        "data": [
            {
                "title": "cobt",
                "img": "/about01.png",
                "subtitle": "collection of beautiful thoughts",
                "description": "COBT, is a december event in Landmark, Lagos State. He is from Jos South Local Government in Plateau State. He attended Air force primary School in Jos, Plateau State and moved to a secondary school called Bethany Christian Academy, Barkin Ladi in the same State. "
            },
            {
                "title": "previous",
                "img": "/about02.png",
                "subtitle": "from previous exhibitions",
                "description": "Previous exhibition i want people to know more about."
            }
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
                className='flex flex-col justify-center items-center w-full h-[15rem] sm:h-full xl:max-w-[42%]'>
                    {about[index].data.map((abouts, aboutsId) => (
                        (aboutsId == innerIndex) && 
                        <img
                        key={aboutsId}
                        src={abouts.img}
                        alt={abouts.title}
                        className='w-[90%] h-[90%] object-contain'
                    />
                    ))}
                </motion.div>
                :
                <motion.div 
                variants={fadeIn('right' , 0.2)} 
                initial="hidden" 
                animate="show" 
                exit="hidden"
                className='flex flex-col justify-center items-center w-full xl:max-w-[42%]'>
                    {about[index].data.map((abouts, aboutsId) => (
                        (aboutsId == exIndex) && 
                        <img
                        key={aboutsId}
                        src={abouts.img}
                        alt={abouts.title}
                        className='w-[90%] h-[90%] object-contain'
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
                                        className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
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
                                    className={`${innerIndex === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
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
                                className={`${exIndex === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
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

