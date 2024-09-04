import React from 'react';
import { Container, SimpleGrid, Box, Text } from '@chakra-ui/react';

const Counts = () => {
  return (
    <Box id="counts" py={5} bg="#f5f5f5">
      <Container>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={4} justifyContent="center">
          <Box textAlign="center">
            <Text fontSize="3xl" fontWeight="bold" data-purecounter-start="0" data-purecounter-end="6" data-purecounter-duration="1" className="purecounter">
              {/* Counter value */}
            </Text>
            <Text fontSize="md" mt={1}>
              Clients
            </Text>
          </Box>

          <Box textAlign="center">
            <Text fontSize="3xl" fontWeight="bold" data-purecounter-start="0" data-purecounter-end="50" data-purecounter-duration="1" className="purecounter">
              {/* Counter value */}
            </Text>
            <Text fontSize="md" mt={1}>
              Hours Of Support
            </Text>
          </Box>

          <Box textAlign="center">
            <Text fontSize="3xl" fontWeight="bold" data-purecounter-start="0" data-purecounter-end="4" data-purecounter-duration="1" className="purecounter">
              {/* Counter value */}
            </Text>
            <Text fontSize="md" mt={1}>
              Hard Workers
            </Text>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Counts;
