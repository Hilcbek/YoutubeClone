import { CheckCircle } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { FaUserAlt } from 'react-icons/fa'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import { fetchFromApi } from '../utils/Fetch'
import { AiFillEye } from 'react-icons/ai'
import { Videos } from './Videos'
export const VideoDetail = () => {
  let [videoDetail,setVideoDetail] = useState(null)
  let [video,setVideos] = useState([])
  let { id } = useParams()
  useEffect(() => {
    fetchFromApi(`https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`).then((data) => setVideoDetail(data.items[0]))
    fetchFromApi(`https://youtube-v31.p.rapidapi.com/search?part=snippet&relatedToVideoId=${id}&type=video`).then((data) => setVideos(data.items))
  },[id])
  return (
    <div className='w-11/12 xl:flex-row xs:flex-col flex items-start justify-start mx-auto min-h-screen'>
        <div className='xs:w-full xl:w-9/12'>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} height={500}  width={'100%'} controls />
          <div className='flex w-full items-start justify-between xs:flex-col md:flex-row my-3'>
            <div className=''>
              <p className='text-white font-quicksands xs:text-md md:text-2xl xs:w-12/12 xl:w-8/12'>{videoDetail?.snippet?.title}</p>
              <div className='flex my-1'>
                <p className='text-white'>{videoDetail?.snippet?.channelTitle}</p>
                <CheckCircle className='text-slate-400 ml-2 text-md' />
              </div>
            </div>
            <div className='flex items-center justify-between xs:ml-3 md:ml-0 p-3 rounded-2xl xs:w-auto md:w-[220px] bg-slate-800'>
              <div className='flex items-center justify-start'>
                <p className='text-white mr-3'>{videoDetail?.statistics?.viewCount}</p>
                <FaUserAlt className='text-white' />
              </div>
              <div className='flex items-center justify-start'>
                <p className='text-white'>{videoDetail?.statistics?.likeCount}</p>
                <AiFillEye className='text-white ml-2 text-xl'/>
              </div>
            </div>
          </div>
        </div>
        <Videos videos={video} one={'ml-3 -mt-2 md:grid-cols-1 md:grid-cols-2 max-h-screen overflow-y-scroll'} />
    </div>
  )
}
