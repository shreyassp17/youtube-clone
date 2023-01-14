import { Link } from "react-router-dom"
import { Typography, Card, CardContent, CardMedia } from "@mui/material"
import { CheckCircle } from "@mui/icons-material";
import { demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  return (
    <Card sx={{ width: { xs: '90vw', sm: '358px', md: '320px' }, boxShadow: 'none', borderRadius: '10px' }}>
      {/* Video Thumbnail */}
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{
            width: {
              xs: '100%', sm: '358px', md: '320px'
            }, height: 180
          }}
        />
      </Link>

      <CardContent sx={{ backgroundColor: '#1e1e1e', height: '75px' }}>
        {/* Video Title */}
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {(snippet.title.length > 60 ? snippet?.title.slice(0, 60).concat("...") : snippet?.title) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        {/* Channel Title */}
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant="subtitle2" color="gray" fontWeight="bold" >
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard