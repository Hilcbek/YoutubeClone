import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { demoVideoUrl,demoVideoTitle,demoThumbnailUrl,demoProfilePicture, demoChannelUrl } from '../utils/constants'
export const ChannelCard = ({channel}) => {
  return (
    <div className='sm:w-[300px] sm:h-[350px] md:w-[350px] md:h-[360px]  bg-slate-800 rounded-md hover:shadow-md hover:shadow-slate-700 cursor-pointer my-3 flex items-start justify-start flex-col'>
        <Link to={`/channel/${channel?.id?.channelId}`} className={'w-full h-full'}>
            <div className='rounded-sm w-full h-full'>
                <img src={channel?.thumbnails?.high?.url} alt={channel?.snippet?.title} className={'rounded-t-sm w-full h-full xs:object-contain md:object-cover'} />
            </div>
        </Link>
        <p>
            {
                channel?.statstics?.subscriberCount && (
                    <p>{parseInt(channel?.statstics?.subscriberCount).toLocaleString()} subscribers</p>
                )
            }
        </p>
    </div>
  )
}
