import React from 'react';
import { Box,
  Button, 
  Heading,
  Image,
  Stack,
  Input, 
  InputGroup, 
  InputLeftElement, 
  Avatar,
  Spacer,
  useToast,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Link} from '@chakra-ui/react';
import{BiSearchAlt, BiMenuAltRight} from 'react-icons/bi';
import {ChevronDownIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import { useAuth0 } from "@auth0/auth0-react";
import './NavBar.css';

export default function NavBar() {
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const { loginWithRedirect, logout, isAuthenticated,user } = useAuth0();

  return (
    <div>
      <Box className='header' bg='#0166F4'  p={4} color='white'>
      <Image src='https://res.cloudinary.com/dhex06aa8/image/upload/v1669658532/Codedu%20Community%20-%20Portal/white-logo_qefazl.png' className='header-logo' alt='Dan Abramov' />
      <Heading className='heading'>Codedu Communtiy</Heading>
      <Stack direction='row' spacing={4} className='header-search'>
        <InputGroup>
        <InputLeftElement pointerEvents='none' children={<BiSearchAlt color='#fff' className='search-icon'/>}/>
      <Input width='35rem' placeholder='search 2000+ materials' type='search' className='search-bar'  focusBorderColor='white' color='#fff'/>
      </InputGroup>
        </Stack>
        <Spacer/>
        <Stack direction='row' className='nav-avatar'>
  <Menu >
  <MenuButton rightIcon={<ChevronDownIcon />}>
  <Avatar/>
  </MenuButton>
  
  <MenuList bg='#0166f4'>
    {
      isAuthenticated ?
    
      <MenuItem bg='#0166f4' _hover={{background: "white", color:"#0166f4"}} onClick={() => logout({ returnTo: window.location.origin })}>{user.name} Logout</MenuItem>
      :
      

    <MenuItem bg='#0166f4' _hover={{background: "white", color:"#0166f4"}} onClick={() => loginWithRedirect()}>Login</MenuItem>
  }
  </MenuList>
</Menu>
<span className="side-menu" onClick={onOpen}><BiMenuAltRight/></span>
</Stack>
<Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
          <Stack direction='row' spacing={4} className='menu-search'>
        <InputGroup>
        <InputLeftElement pointerEvents='none' children={<BiSearchAlt color='#0166f4'  className='menu-search-icon'/>}/>
      <Input width='35rem' className='menu-search-bar' placeholder='search 2000+ materials' type='search'   focusBorderColor='#c1c1c1' color='#0166f4' mb='20px' variant='filled' />
      </InputGroup>
        </Stack>
          <Link>DSA  <ExternalLinkIcon mx='2px' /></Link><br />
          <Link>Web Development  <ExternalLinkIcon mx='2px' /></Link><br />
          <Link>App Development  <ExternalLinkIcon mx='2px' /></Link><br />
          <Link>DevOps  <ExternalLinkIcon mx='2px' /></Link><br />
          <Link>Blockchain  <ExternalLinkIcon mx='2px' /></Link><br />
          <Link>UI/UX Design  <ExternalLinkIcon mx='2px' /></Link><br />
          </DrawerBody>
        
          <DrawerFooter>
          <Link href='https://chakra-ui.com' isExternal>
  Chakra Design system <ExternalLinkIcon mx='2px' />
</Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
</Box>
    </div>
  )
}
