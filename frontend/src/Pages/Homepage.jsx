import React, { useEffect } from 'react'
import {Box, Container, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Login from '../components/Authentication/Login'
import SignUp from '../components/Authentication/SignUp'
import { useHistory } from 'react-router'

const Homepage = () => {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) {
        history.push("/chats");
    }
    
  }, [history]);
  return (
    <>
      <Container maxW={'xl'} centerContent>

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