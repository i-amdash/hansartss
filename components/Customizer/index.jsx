'use client'

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import config from '@/config/config';
import state from '@/components/store';
import { download } from '@/public';
import Image from 'next/image';
import { downloadCanvasToImage, reader } from '@/config/helpers';
import { EditorTabs, FilterTabs, DecalTypes } from '@/config/constants';
import { fadeAnimation, slideAnimation } from '@/config/motion';
import AIPicker from '@/components/AIPicker';
import Tab from '@/components/Tab';
import FilePicker from '@/components/FilePicker';
import ColorPicker from '@/components/ColorPicker';
import CustomButton from '@/components/CustomButton';
import { useSnapshot } from 'valtio';

const Customizer = () => {
  const snap = useSnapshot(state);
  const [file, setFile] = useState('');
    const [prompt, setPrompt] = useState('');
    const [generatingImg, setGeneratingImg] = useState(false);

    const [activeEditorTab, setActiveEditorTab] = useState('');
    const [activeFilterTab, setActiveFilterTab] = useState({
      logoShirt: true,
      stylishShirt: false,
    })
  // show tab content depending on active tab

  const generateTabContent = ( ) => {  
      switch(activeEditorTab) {
        case "colorpicker" : 
        return <ColorPicker />
        case "filepicker" :
          return <FilePicker 
            file={file}
            setFile={setFile}
            readFile={readFile}
          />
        case "aipicker" :
          return <AIPicker
            prompt={prompt}
            setPrompt={setPrompt}
            generatingImg={generatingImg}
            handleSubmit={handleSubmit}
          />
        default : 
        return null;
      }
  }

  const handleSubmit = async (type) => {
    if(!prompt) return alert("please enter prompt");

    try {
      setGeneratingImg(true);
      const response = await fetch('http://localhost:8080/api/v1/backend', 
      {
        method: 'POST',
        headers: {
        'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
          prompt,
        })
    })
    const data = await response.json();
    handleDecals(type, `data:image/png;base64,${data.photo}`)
    } catch (error) {
      alert(error)
    } finally {
      setGeneratingImg(false);
      setActiveEditorTab("");
    }
  }

  const handleDecals = (type, result) => {
    const decalType = DecalTypes[type];
    state[decalType.stateProperty] = result;

    if(!activeFilterTab[decalType.FilterTab]) {
      handleActiveFilterTab(decalType.FilterTab)
    }
  }

  const handleActiveFilterTab = (tabName) => {
    switch(tabName) {
      case "logoShirt" :
        state.isLogoTexture = !activeFilterTab[tabName];
        break;
        case "stylishShirt" :
          state.isFullTexture = !activeFilterTab[tabName];
          break;
          default :
          state.isFullTexture = false;
          state.isLogoTexture = true;
          break;
    }

    // after setting set active filter tab to update ui

    setActiveFilterTab((prevState) => {
      return {
        ...prevState,
        [tabName] : !prevState[tabName]
      }
    })
  }

  const readFile = (type) => {
    reader(file).then((result) => {
      handleDecals(type, result);
      setActiveEditorTab("");
    })
  }
  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            key="custom"
            className='absolute top-0 left-0 z-10'
            {...slideAnimation('left')}
          >
            <div className='flex items-center min-h-screen'>
              <div className='editortabs-container tabs'>
                {
                  activeEditorTab != "" ?
                  <div className="relative"><button onClick={() => {setActiveEditorTab("")}} type="button" className="bg-secondary rounded-md p-2 inline-flex items-center justify-center hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Close menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button></div>
            :
            <div></div>
                }
                {EditorTabs.map((tabs) => (
                  <Tab 
                    key={tabs.name}
                    tab={tabs}
                    handleClick={() => {setActiveEditorTab(tabs.name)}}
                  />
                ))}
                {generateTabContent()}
              </div>
            </div>
          </motion.div>
          <motion.div 
            className='absolute z-10 top-40 left-2'
            {...fadeAnimation}
          >
            <CustomButton 
              type="filled"
              title="go back"
              handleClick={() => state.intro = true}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
          </motion.div>
          <motion.div
          className='filtertabs-container'
          {...slideAnimation('up')}
          >
            {FilterTabs.map((tabs) => (
              <Tab 
                key={tabs.name}
                tab={tabs}
                isFilterTab
                isActiveTab={activeFilterTab[tabs.name]}
                handleClick={() => handleActiveFilterTab(tabs.name)}
              />
            ))}
          <button className='download-btn' onClick={downloadCanvasToImage}>
              <Image
                width={20}
                height={20}
                src={'/download.png'}
                alt='download_image'
                className='w-3/5 h-3/5 object-contain'
              />
            </button>
          </motion.div>
          
        </>
      )}
    </AnimatePresence>
  )
}

export default Customizer