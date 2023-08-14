import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack,  useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

function SignUp() {
    const [show,setShow] = useState(false)
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [confirmpassword,setConfirmpassword] = useState()
    const [password,setPassword] = useState()
    const [pic,setPic] = useState()
    const [loading,setLoading] = useState(false)
    const toast = useToast()
    const history = useHistory()



    const handleClick = ()=> setShow(!show)

    // picture upload
    const postDetails = (pics) => {
        setLoading(true)
        if(pics === undefined){
            toast({
                title: 'Please select an Image!',
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position: 'top'
              })
              return
        }

        if(pics.type ==="image/jpeg" || pics.type ==="image/png"){
            const data = new FormData()
            data.append('file',pics)
            // chat-app is the name created on upload preset cloudinary
            data.append('upload_preset','chat-app')
            data.append('cloud_name','ddo5bvyyw')
            fetch('https://api.cloudinary.com/v1_1/ddo5bvyyw/image/upload',{
                method:'post', 
                body: data
            }).then(res=>res.json()).then(data=>{
                setPic(data.url.toString())
                console.log(data.url.toString())
                setLoading(false)
            }).catch(err=>{
                console.log(err)
                setLoading(false)
            })
        } else {
            toast({
                title: 'Please select an Image!',
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position: 'top'
              })
              setLoading(false)
             return

        }
    }

    // sign up button
    const submitHandler = async() => {
        setLoading(true)
        // check if all the fields are filled by the user
        if(!name || !email || !password || !confirmpassword){
            toast({
                title: 'Please fill all the fields',
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position: 'top'
              })
              setLoading(false)
              return
        }
            if(password !== confirmpassword){
                toast({
                    title: 'Password do not Match',
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
                const {data} = await axios.post("/api/user",{name,email,password,pic},config)
                toast({
                    title: 'Registration Successful',
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
                        <Button style={{marginRight:'3.5px'}}h={'2rem'} w={'4.5rem'} onClick={handleClick}>
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
                        <Button style={{marginRight:'3.5px'}} h={'2rem'} w={'4.5rem'} onClick={handleClick}>
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
        style={{marginTop:15}} onClick={submitHandler} isLoading={loading}>Sign Up</Button>

    </VStack>
    </>
  )
}

export default SignUp