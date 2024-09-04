import React, { useContext } from 'react';
import { Button, Text, Box, Flex } from '@chakra-ui/react'; // Updated imports from Chakra UI
import { SocketContext } from '../Pages/SocketContext';

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <Flex justify="space-around" align="center" p={4} bg="gray.50" borderRadius="md" shadow="md">
          <Text fontSize="xl" fontWeight="bold">{call.name} is calling:</Text>
          <Button colorScheme="blue" onClick={answerCall}>
            Answer
          </Button>
        </Flex>
      )}
    </>
  );
};

export default Notifications;

