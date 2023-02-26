import React, { useEffect, useState } from 'react'
import { Videos } from './Videos'
import { useParams } from 'react-router-dom'
import { fetchFromApi } from '../utils/Fetch';
export let SearchFeed = () => {
  let { searchTerm } = useParams();
  let [video,setVideos] = useState([])
  useEffect(() => {
    fetchFromApi(`https://youtube-v31.p.rapidapi.com/search?q=${searchTerm}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`).then((data) => setVideos(data.items))
  },[searchTerm])
  return (
    <div className='w-[85%] text-white mx-auto'>
      <p className='xs:text-md  md:text-2xl 2xl:text-4xl  flex items-center justify-center'>Search Results for: <p className='mx-2 text-red-600'>{searchTerm}</p>
       &nbsp;videos</p>
      <Videos videos={video} />
    </div>
  )
}
