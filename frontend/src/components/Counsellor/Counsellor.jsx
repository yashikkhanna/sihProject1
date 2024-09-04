import React, { useState } from 'react';
import data from '../../data/data.json'; // Import JSON data
import {
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  Button,
  Heading,
  UnorderedList,
  ListItem,
  Box,
  useBreakpointValue,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  FormControl,
  FormLabel,
  useDisclosure,
  Textarea,
} from '@chakra-ui/react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { useHistory } from 'react-router-dom'; // Import useHistory

const Counsellor = () => {
  const counselors = data.counselors; // Access counselors from JSON data
  const numOfColumns = useBreakpointValue({ base: 1, sm: 2, md: 3 });
  
  // Chakra UI modal disclosure
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  // Initialize history
  const history = useHistory();

  const handleVideoChat = () => {
    // Navigate to the VideoCall route
    
  };
  const handleChat=()=>{
    history.push('/chats');
  }

  return (
    <>
      <Navbar mb="5px" />
      <Box 
        p={4} 
        bg="gray.50" 
        minHeight="100vh"
        display="flex" 
        flexDirection="column" 
        alignItems="center"
        justifyContent="flex-start"
        mt="80px"
      >
        <SimpleGrid columns={numOfColumns} spacing={8} width="full" maxW="1500px">
          {counselors.map((counselor) => (
            <Card 
              key={counselor.id} 
              variant="elevated" 
              borderRadius="md"
              boxShadow="md"
              overflow="hidden"
              width="100%"
            >
              <CardBody p={4}>
                <Image
                  src={counselor.image}
                  alt={counselor.name}
                  borderRadius="md"
                  objectFit="cover"
                  width="100%"
                  height="350px"
                />
                <Stack spacing={2}>
                  <Heading size="md">{counselor.name}</Heading>
                  <Text>{counselor.description}</Text>
                  <Text color="blue.600" fontSize="2xl">
                    {counselor.price}
                  </Text>
                  <UnorderedList>
                    {counselor.skills.map((skill, index) => (
                      <ListItem key={index} fontSize="md" color="gray.600">
                        {skill}
                      </ListItem>
                    ))}
                  </UnorderedList>
                </Stack>
                <Button variant="solid" colorScheme="blue" onClick={onOpen}>
                  Contact Now
                </Button>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>

        {/* Modal */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Contact Counsellor</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl id="fullName" mb={4}>
                <FormLabel>Full Name</FormLabel>
                <Input placeholder="Enter your full name" />
              </FormControl>

              <FormControl id="email" mb={4}>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Enter your email" />
              </FormControl>

              <FormControl id="contactNumber" mb={4}>
                <FormLabel>Contact Number</FormLabel>
                <Input type="tel" placeholder="Enter your contact number" />
              </FormControl>
              <FormControl id="Objective" mb={4}>
                <FormLabel>Objective</FormLabel>
                <Textarea placeholder="Enter your objective" />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleVideoChat}>
                Video Chat
              </Button>
              <Button variant="outline" onClick={handleChat}>
                Chat
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
      <Footer />
    </>
  );
};

export default Counsellor;
