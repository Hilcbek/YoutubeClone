import React, { useEffect, useState } from 'react'
import { SideBar } from './SideBar'
import { Videos } from './Videos'
import { fetchFromApi } from '../utils/Fetch'
export const Feed = () => {
  let [selectedCatagory,setSelectedCatagory] = useState('New');
  let [video,setVideos] = useState([])
  useEffect(() => {
    fetchFromApi(`https://youtube-v31.p.rapidapi.com/search?q=${selectedCatagory}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`).then((data) => setVideos(data.items))
  },[selectedCatagory])
  return (
    <div className='xs:flex items-start justify-start xs:flex-col md:flex-row w-[99%] h-[90vh] md:overflow-hidden mx-auto text-white flex'>
      <div className='flex items-center relative xs:my-2 sm:my-0 md:justify-start flex-col xs:w-full md:w-60  border-r-[0.5px] border-zinc-700 border-solid sm:max-h-[91vh]'>
        <SideBar setSelectedCatagory={setSelectedCatagory} />
        <p className='xs:hidden sm:block md:text-xs text-sm mb-2'>Copyright 2022E.c BekasAlex.plc</p>
      </div>
      <div className='h-full w-[99%] mx-0'>
          <h1 className='my-3 text-red-500 font-quicksands font-bold xs:text-3xl md:text-5xl ml-3'><span className='text-white mr-2'>{selectedCatagory}</span>videos</h1>
          <div className='h-full w-full overflow-scroll'>
            <Videos videos={video} />
          </div>
      </div>
    </div>
  )
}
