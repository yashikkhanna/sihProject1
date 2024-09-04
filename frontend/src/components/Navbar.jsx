import React from 'react';
import { Box, Flex, Heading, IconButton, Button, useBreakpointValue, useTheme, Avatar, Menu, MenuButton, MenuList, MenuItem, MenuDivider } from '@chakra-ui/react';
import { Link, useHistory } from 'react-router-dom';
import { HamburgerIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { ChatState } from '../Context/ChatProvider';
import ProfileModal from './miscellaneous/ProfileModal';

const Header = () => {
  const theme = useTheme();
  const display = useBreakpointValue({ base: 'none', md: 'flex' });
  const displayMobile = useBreakpointValue({ base: 'flex', md: 'none' });
  const { user } = ChatState(); // Adjust based on your context file structure
  const history = useHistory(); // Get the history object from react-router-dom

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    history.push("/");
  };

  return (
    <Box 
      as="header" 
      position="fixed" 
      width="100%" 
      bg="#0033cc" 
      color="white" 
      boxShadow="none" 
      mb={4} 
      zIndex="docked"
    >
      <Flex 
        as="nav" 
        align="center" 
        justify="space-between" 
        p={4}
        maxW="container.xl"
        mx="auto"
      >
        <Heading 
          as={Link} 
          to="/" 
          fontSize="lg" 
          color="white" 
          textDecoration="none"
        >
          CareerHelp
        </Heading>

        <Flex align="center">
          <Box display={display}>
            <Button 
              as={Link} 
              to="#hero" 
              color="white" 
              variant="link" 
              mr={4}
            >
              Home
            </Button>
            <Button 
              as={Link} 
              to="#about" 
              color="white" 
              variant="link" 
              mr={4}
            >
              About
            </Button>
            <Button 
              as={Link} 
              to="#services" 
              color="white" 
              variant="link" 
              mr={4}
            >
              Services
            </Button>
            <Button 
              as={Link} 
              to="#contact" 
              color="white" 
              variant="link" 
              mr={4}
            >
              Contact
            </Button>
            <Menu>
              <MenuButton 
                as={Button} 
                bg="#0033cc" // Match the header background color
                rightIcon={<ChevronDownIcon />}
                _hover={{ bg: "#0033cc" }} // Keep the same background on hover
              >
                {/* Check if user is defined before rendering Avatar */}
                {user && (
                  <Avatar
                    size="sm"
                    cursor="pointer"
                    name={user.name}
                    src={user.pic}
                    _hover={{ bg: "white", color: "black" }} // White background and black color on hover
                  />
                )}
              </MenuButton>
              <MenuList 
                bg="gray.700" // Grey background for the menu
                color="white" 
                borderColor="gray.600"
              >
                {user && (
                  <>
                    <ProfileModal user={user}>
                      <MenuItem 
                        _hover={{ bg: "white", color: "black" }} // White background and black color on hover
                        bg="gray.700"
                        color="gray.300"
                      >
                        My Profile
                      </MenuItem>
                    </ProfileModal>
                    <MenuDivider />
                    <MenuItem 
                      onClick={logoutHandler} 
                      _hover={{ bg: "red.600", color: "white" }} // Red background and white color on hover
                      bg="gray.700"
                      color="gray.300"
                    >
                      Logout
                    </MenuItem>
                  </>
                )}
              </MenuList>
            </Menu>
          </Box>

          <IconButton 
            aria-label="Menu"
            icon={<HamburgerIcon />} 
            color="white"
            display={displayMobile}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
