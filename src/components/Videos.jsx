import React from 'react'
import { Stack, Box } from '@mui/system'
import { VideoCard, ChannelCard } from './'
import CircularProgress from '@mui/material/CircularProgress';

const Videos = ({ videos, direction }) => {

  if (!videos?.length) return <CircularProgress/>

  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="center" gap={2}>
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos