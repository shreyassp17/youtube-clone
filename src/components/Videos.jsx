import React, { useEffect, useState } from 'react'
import { Stack, Box } from '@mui/system'
import { VideoCard, ChannelCard } from './'

const Videos = ({ videos, direction }) => {
  const [videos1, setVideos1] = useState(null);


  useEffect(() => {
    const filteredVideos = videos.filter((item) => {
      return item.id.kind !== "youtube#playlist"
    })
    setVideos1(filteredVideos)
  }, [videos])
  
  if (!videos?.length) return 'Loading...'

  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="center" gap={2}>
      {videos1.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos