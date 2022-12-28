import React, { useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Videos } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { useParams } from 'react-router-dom'

const SearchFeed = () => {
  const [videos, setVideos] = useState([])

  const {searchItem} = useParams();
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchItem}`)
      .then((data) => {
        setVideos(data.items)
      })

  }, [searchItem])

  return (
    <>
      {/* Feed */}
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant='h4' fontWeight="bold" mb={2} sx={{ color: 'white' }}>
          Search results for <span style={{ color: '#F31503' }}>{searchItem}</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </>
  )
}

export default SearchFeed