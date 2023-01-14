import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/system'
import { ChannelCard, Videos } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetail = () => {

  const [channelDetail, setchannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part="snippet&id=${id}`)
      .then((data) => {
        setchannelDetail(data?.items[0])
      })

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => {
        setVideos(data?.items)
      })
  }, [id])

  return (
    <Box minHeight='97vh'>
      <Box>
        <Box sx={{
          background: '#0093E9',
          backgroundImage: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)', height: '300px', zIndex: '10'
        }}>
        </Box>
          <ChannelCard channelDetail={channelDetail} marginTop="-93px"/>
      </Box>

      <Box display='flex' p={2}>
        <Box sx={{mr:{sm:'100px'}}}/>
          <Videos videos={videos}/>
      </Box>
    </Box>

    
  )
}

export default ChannelDetail