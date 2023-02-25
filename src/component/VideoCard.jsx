import React from 'react'
import { Link } from 'react-router-dom'
import { FaCheckCircle } from 'react-icons/fa'
import { demoVideoUrl,demoVideoTitle,demoThumbnailUrl,demoProfilePicture, demoChannelUrl } from '../utils/constants'
export const VideoCard = ({video :{ id : {videoId},snippet}}) => {
  return (
    <div className=' text-white sm:w-[300px] sm:h-[350px] md:w-[350px] md:h-[360px]  bg-slate-800 rounded-md hover:shadow-md hover:shadow-slate-700 cursor-pointer my-3 flex items-start justify-start flex-col'>
        <Link to={videoId ? `/video/${videoId}` : demoThumbnailUrl} className={'w-full h-full'}>
            <div className='rounded-sm w-full h-full'>
                <img src={snippet?.thumbnails?.high?.url} alt={snippet?.title} className={'rounded-t-sm w-full h-full xs:object-contain md:object-cover'} />
            </div>
        </Link>
        <Link to={videoId  ? `/video/${videoId}` : demoVideoUrl}>
            <p className='font-quicksands text-xl'>{snippet?.title.slice(0,40).concat('...') || demoVideoTitle.slice(0,60)}</p>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} className={'flex items-center justify-start'}>
            <p className='w-full mt-1 font-tilt ml-4'>{snippet?.channelTitle.slice(0,60) || demoVideoTitle.slice(0,60)}</p>
            <FaCheckCircle className='text-xl ml-2 text-slate-400' />
        </Link>
    </div>
  )
}
