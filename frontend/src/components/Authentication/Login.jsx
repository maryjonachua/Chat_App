import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement,useToast, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

function Login() {
  const [show,setShow] = useState(false)
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [loading,setLoading] = useState(false)
  const toast = useToast()
  const history = useHistory()


  const handleClick = ()=> setShow(!show)


  // sign up button
  const submitHandler = async() => {
    setLoading(true)
    if(!email || !password){
      toast({
        title: 'Please fil ALL the fields',
        status: 'warning',
        duration: 5000,
        isClosable: true,
        position: 'top'
      })
      setLoading(false)
      return
    }
    axios.defaults.baseURL = 'http://localhost:501'; 
    

    try{
      const config = {
        headers:{
            "Content-type":"application/json"
        }
    }
    const {data} = await axios.post("/api/user/login",{email,password},config)
    toast({
        title: 'Login Successful',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top'
    })

    localStorage.setItem('userInfo',JSON.stringify(data))

    setLoading(false)

    history.push('/chats')
   


      }catch(error){
          toast({
              title: 'Error!',
              description: error.response.data.message,
              status: 'error',
              duration: 5000,
              isClosable: true,
              position: 'top'
          })
          setLoading(false)

      }
    

  }

return (
  <>
  <VStack spacing={'5px'}>
      

      <FormControl id='email' isRequired>
          <FormLabel>Email:</FormLabel>
          <Input placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)} />
      </FormControl>

        <FormControl id='password' isRequired>
              <FormLabel>Password:</FormLabel>

            <InputGroup>
                 <Input type={show? 'text':'password'} placeholder='Enter your password' value={password}  onChange={(e)=>setPassword(e.target.value)} />

                 <InputRightElement w={'4.5rem'}>
                        <Button style={{marginRight:'3.5px'}} h={'2rem'} w={'4.5rem'} onClick={handleClick}>
                            {show? "Hide" : "Show"}
                        </Button>
                 </InputRightElement>
            </InputGroup>
            
        </FormControl>


      <Button colorScheme='blue' w={'100%'}
      style={{marginTop:15}} onClick={submitHandler} isLoading={loading}>Sign In</Button>

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