import React, { useContext } from 'react';
import { Box, Grid, Heading, AspectRatio } from '@chakra-ui/react';
import { SocketContext } from '../Pages/SocketContext';

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

  return (
    <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6}>
      {stream && (
        <Box borderWidth="2px" borderRadius="md" p={4} boxShadow="md">
          <Heading as="h5" size="md" mb={4}>{name || 'Name'}</Heading>
          <AspectRatio ratio={16 / 9}>
            <video playsInline muted ref={myVideo} autoPlay style={{ width: '100%', borderRadius: '8px' }} />
          </AspectRatio>
        </Box>
      )}
      {callAccepted && !callEnded && (
        <Box borderWidth="2px" borderRadius="md" p={4} boxShadow="md">
          <Heading as="h5" size="md" mb={4}>{call.name || 'Name'}</Heading>
          <AspectRatio ratio={16 / 9}>
            <video playsInline ref={userVideo} autoPlay style={{ width: '100%', borderRadius: '8px' }} />
          </AspectRatio>
        </Box>
      )}
    </Grid>
  );
};

export default VideoPlayer;
