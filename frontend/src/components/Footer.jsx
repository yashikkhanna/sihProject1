import React from 'react';
import { Container, Grid, Box, Text, Button, Input, Link, useTheme } from '@chakra-ui/react';
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaArrowUp } from 'react-icons/fa';

// Custom styles for components
const FooterWrapper = (props) => {
  const theme = useTheme();
  return (
    <Box
      width="100%"
      bg={theme.colors.gray[900]}
      color="white"
      py={4}
      {...props}
    />
  );
};

const FooterContent = (props) => {
  const theme = useTheme();
  return (
    <Box
      maxW={theme.breakpoints.lg}
      mx="auto"
      px={2}
      {...props}
    />
  );
};

const FooterTitle = (props) => (
  <Text fontSize="lg" fontWeight="bold" mb={2} {...props} />
);

const FooterLink = (props) => (
  <Link color="white" _hover={{ textDecoration: 'underline' }} {...props} />
);

const SocialLink = (props) => (
  <Link
    color="white"
    fontSize="24px"
    mx={1}
    _hover={{ color: 'blue.500' }}
    {...props}
  />
);

const BackToTop = (props) => {
  const theme = useTheme();
  return (
    <Link
      position="fixed"
      bottom={2}
      right={2}
      bg="blue.500"
      color="white"
      borderRadius="full"
      p={2}
      display="flex"
      alignItems="center"
      justifyContent="center"
      boxShadow="md"
      _hover={{ bg: 'blue.600' }}
      {...props}
    />
  );
};

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <FooterContent>
          <Grid templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }} gap={4}>
            <Box>
              <FooterTitle>CareerHelp</FooterTitle>
              <Text>
                India <br />
                XYZ City <br />
                AC road <br /><br />
                <strong>Phone:</strong> +91 xxxxx xxxxx <br />
                <strong>Email:</strong> abc@gmail.com <br />
              </Text>
            </Box>

            <Box>
              <FooterTitle>Useful Links</FooterTitle>
              <Box as="ul" listStyleType="none" p={0}>
                <Box as="li"><FooterLink href="#">Home</FooterLink></Box>
                <Box as="li"><FooterLink href="#">About us</FooterLink></Box>
                <Box as="li"><FooterLink href="#">Services</FooterLink></Box>
                <Box as="li"><FooterLink href="#">Contact</FooterLink></Box>
              </Box>
            </Box>

            <Box>
              <FooterTitle>Our Services</FooterTitle>
              <Box as="ul" listStyleType="none" p={0}>
                <Box as="li"><FooterLink href="#">AI Based-Counselling</FooterLink></Box>
                <Box as="li"><FooterLink href="#">Direct interaction with teacher</FooterLink></Box>
                <Box as="li"><FooterLink href="#">Aptitude test</FooterLink></Box>
              </Box>
            </Box>

            <Box>
              <FooterTitle>Join Us</FooterTitle>
              <Text>Join us for more informational guidance</Text>
              <Box mt={2}>
                <Input
                  placeholder="Your Email"
                  type="email"
                  mb={2}
                  bg="white"
                  variant="outline"
                />
                <Button colorScheme="blue" width="full">Subscribe</Button>
              </Box>
            </Box>
          </Grid>
        </FooterContent>
      </FooterWrapper>

      <Box bg="#222" color="#fff" p={2}>
        <FooterContent>
          <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={2} alignItems="center">
            <Box textAlign={{ base: 'center', md: 'left' }}>
              <Text fontSize="sm">
                &copy; Copyright <strong><span>CareerHelp</span></strong>. All Rights Reserved
                <br />
                Designed by <Link color="#fff" textDecoration="underline" href="#">DigitalDivas</Link>
              </Text>
            </Box>
            <Box display="flex" justifyContent={{ base: 'center', md: 'flex-end' }}>
              <SocialLink href="#" aria-label="Twitter"><BsTwitter /></SocialLink>
              <SocialLink href="#" aria-label="Facebook"><BsFacebook /></SocialLink>
              <SocialLink href="#" aria-label="Instagram"><BsInstagram /></SocialLink>
              <SocialLink href="#" aria-label="LinkedIn"><BsLinkedin /></SocialLink>
            </Box>
          </Grid>
        </FooterContent>
      </Box>

      <BackToTop href="#" aria-label="Back to top">
        <FaArrowUp />
      </BackToTop>
    </>
  );
};

export default Footer;
