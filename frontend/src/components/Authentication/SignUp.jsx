import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

function SignUp() {
    const [show,setShow] = useState(false)
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [confirmpassword,setConfirmpassword] = useState()
    const [password,setPassword] = useState()
    const [pic,setPic] = useState()

    const handleClick = ()=> setShow(!show)

    // picture upload
    const postDetails = (pics) => {

    }

    // sign up button
    const submitHandler = () => {

    }

  return (
    <>
    <VStack spacing={'5px'}>
        <FormControl id='first-name' isRequired>
            <FormLabel>Name:</FormLabel>
            <Input placeholder='Enter your name' onChange={(e)=>setName(e.target.value)} />
        </FormControl>

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
        

        
        <FormControl id='confirm-password' isRequired>
            <FormLabel>Confirm Password:</FormLabel>

            <InputGroup size={'md'}>
                 <Input type={show? 'text':'password'} placeholder='Confirm password' onChange={(e)=>setConfirmpassword(e.target.value)} />

                 <InputRightElement w={'4.5rem'}>
                        <Button h={'2.59rem'} w={'4.5rem'} onClick={handleClick}>
                            {show? "Hide" : 'Show' }
                        </Button>
                 </InputRightElement>
            </InputGroup>
            
        </FormControl>

        <FormControl id='pic' isRequired>
            <FormLabel>Upload your Photo</FormLabel>
            <Input type='file' 
            p={1.5}
            accept='image/*'
            onChange={(e)=>postDetails(e.target.files[0])} />
        </FormControl>

        <Button colorScheme='blue' w={'100%'}
        style={{marginTop:15}} onClick={submitHandler}>Sign Up</Button>

    </VStack>
    </>
  )
}

export default SignUp