import React from 'react'
import { ChannelCard } from './ChannelCard'
import { VideoCard } from './VideoCard'

export const Videos = ({videos,one}) => {
  return (
    <div className={one || `p-2 xs:grid-cols-1 sm:grid-cols-2 grid sm:pl-5 md:pl-0 flex-wrap lg:grid-cols-3 2xl:grid-cols-4 w-full`}>
       {
          videos?.map((item,index) => (
            <div key={index}>
               {item.id.channelId && <ChannelCard channel={item} />}
               {item.id.videoId && <VideoCard video={item} />}
            </div>
          ))
        }
    </div>
  )
}
