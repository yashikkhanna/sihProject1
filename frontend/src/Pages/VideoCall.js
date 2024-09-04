import React from 'react';
import { Box, Heading, Flex } from '@chakra-ui/react';
import VideoPlayer from '../components/VideoPlayer';
import Options from '../components/Options';
import Notifications from '../components/Notifications';

const VideoCall = () => {
  return (
    <Box>
      <Flex as="header" bg="gray.100" p={4} justify="center">
        <Heading as="h5" size="md" textAlign="center">Video Chat</Heading>
      </Flex>
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </Box>
  );
};

export default VideoCall;

