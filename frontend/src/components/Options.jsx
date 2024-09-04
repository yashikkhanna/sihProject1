import React, { useState, useContext } from 'react';
import { Button, Input, Grid, Heading, Box, Flex, VStack } from '@chakra-ui/react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { PhoneIcon, SmallCloseIcon } from '@chakra-ui/icons';
import { SocketContext } from '../Pages/SocketContext';

const Sidebar = ({ children }) => {
    const context = useContext(SocketContext);
    const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = context || {};
    const [idToCall, setIdToCall] = useState('');

    if (!context) return null;

    const handleCopy = () => {
        console.log('Copying ID:', me); // Debugging statement
    };

    return (
        <Flex direction="column" alignItems="center" width={{ base: '80%', md: '600px' }} my={8}>
            <Box borderWidth="2px" borderRadius="md" p={4} boxShadow="md" width="100%">
                <form>
                    <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6}>
                        <VStack spacing={4} align="stretch">
                            <Heading as="h6" size="md" mb={2}>Account Info</Heading>
                            <Input
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                size="md"
                            />
                            <CopyToClipboard text={me} onCopy={handleCopy}>
                                <Button
                                    colorScheme="blue"
                                    leftIcon={<PhoneIcon />}
                                    width="100%"
                                    mt={4}
                                >
                                    Copy Your ID
                                </Button>
                            </CopyToClipboard>
                        </VStack>
                        <VStack spacing={4} align="stretch">
                            <Heading as="h6" size="md" mb={2}>Make a call</Heading>
                            <Input
                                placeholder="ID to call"
                                value={idToCall}
                                onChange={(e) => setIdToCall(e.target.value)}
                                size="md"
                            />
                            {callAccepted && !callEnded ? (
                                <Button
                                    colorScheme="red"
                                    leftIcon={<SmallCloseIcon />}
                                    width="100%"
                                    mt={4}
                                    onClick={leaveCall}
                                >
                                    Hang Up
                                </Button>
                            ) : (
                                <Button
                                    colorScheme="blue"
                                    leftIcon={<PhoneIcon />}
                                    width="100%"
                                    mt={4}
                                    onClick={() => callUser(idToCall)}
                                >
                                    Call
                                </Button>
                            )}
                        </VStack>
                    </Grid>
                </form>
                {children}
            </Box>
        </Flex>
    );
};

export default Sidebar;
