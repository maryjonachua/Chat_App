import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

function Login() {
  const [show,setShow] = useState(false)
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()


  const handleClick = ()=> setShow(!show)


  // sign up button
  const submitHandler = () => {

  }

return (
  <>
  <VStack spacing={'5px'}>
      

      <FormControl id='email' isRequired>
          <FormLabel>Email:</FormLabel>
          <Input placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)} />
      </FormControl>

        <FormControl id='password' isRequired>
              <FormLabel>Password:</FormLabel>

            <InputGroup>
                 <Input type={show? 'text':'password'} placeholder='Enter your password' onChange={(e)=>setPassword(e.target.value)} />

                 <InputRightElement w={'4.5rem'}>
                        <Button h={'2.59rem'} w={'4.5rem'} onClick={handleClick}>
                            {show? "Hide" : "Show"}
                        </Button>
                 </InputRightElement>
            </InputGroup>
            
        </FormControl>


      <Button colorScheme='blue' w={'100%'}
      style={{marginTop:15}} onClick={submitHandler}>Sign In</Button>

<Button variant='solid' colorScheme='red' w={'100%'}
      style={{marginTop:15}} onClick={()=> {
        setEmail('guest@example.com')
        setPassword('123456')
      }}>Get Guest User Credentials</Button>

  </VStack>
  </>
)
}

export default Login