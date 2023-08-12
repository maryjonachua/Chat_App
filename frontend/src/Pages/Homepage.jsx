import React from 'react'
import {Box, Container,Text, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Login from '../components/Authentication/Login'
import SignUp from '../components/Authentication/SignUp'

const Homepage = () => {
  return (
    <>
      <Container maxW={'xl'} centerContent>
        {/* <Box  d={'flex'}
            justifyContent='center' p={3}
            bg={'white'} w={'100%'} m={'40px 0 15px 0'} borderRadius={'lg'} borderWidth={'1px'} >


          <Text fontSize={'2xl'}textAlign={'center'} fontFamily={'Work sans'}>Chat App</Text>
        </Box> */}

        <Box d={'flex'}
            justifyContent='center' m={'auto'} bg={'white'} w={'100%'} p={4} borderRadius={'lg'} borderWidth={'1px'}>

            <Tabs variant='soft-rounded' colorScheme={'gray'} >
              <TabList mb={'1em'} mt={'1em'}>
                <Tab w={'50%'}>Login</Tab>
                <Tab w={'50%'}>Sign Up</Tab>
              </TabList>


              <TabPanels>
                <TabPanel>
                  <Login/>
                </TabPanel>

                <TabPanel>
                  <SignUp/>
                </TabPanel>

              </TabPanels>
            </Tabs>
        </Box>

      </Container>
    
    </>

  )
}

export default Homepage