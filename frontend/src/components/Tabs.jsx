import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Text } from '@chakra-ui/react';

export default function BasicTabs() {
  const [index, setIndex] = React.useState(0);

  const handleChange = (index) => {
    setIndex(index);
  };

  return (
    <Box width="100%" mt="4">
      <Tabs
        variant="soft-rounded"
        colorScheme="blue"
        index={index}
        onChange={handleChange}
        align="center"
        isLazy
      >
        <TabList>
          <Tab fontWeight="bold">Career Guidance</Tab>
          <Tab fontWeight="bold">Educational Insights</Tab>
          <Tab fontWeight="bold">Student Empowerment</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Box
              p="4"
              bg="white"
              borderRadius="md"
              boxShadow="md"
              transition="transform 0.3s ease-in-out"
              _hover={{ transform: 'scale(1.02)' }}
            >
              <Text fontSize="lg" fontWeight="bold" color="blue.500">
                Personalized guidance for your unique career path.
              </Text>
            </Box>
          </TabPanel>
          <TabPanel>
            <Box
              p="4"
              bg="white"
              borderRadius="md"
              boxShadow="md"
              transition="transform 0.3s ease-in-out"
              _hover={{ transform: 'scale(1.02)' }}
            >
              <Text fontSize="lg" fontWeight="bold" color="blue.500">
                Expert insights to navigate your educational journey.
              </Text>
            </Box>
          </TabPanel>
          <TabPanel>
            <Box
              p="4"
              bg="white"
              borderRadius="md"
              boxShadow="md"
              transition="transform 0.3s ease-in-out"
              _hover={{ transform: 'scale(1.02)' }}
            >
              <Text fontSize="lg" fontWeight="bold" color="blue.500">
                Empowering students to achieve their professional aspirations.
              </Text>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
