import React, {useEffect} from 'react'
import tw from "tailwind-styled-components";
import { useRouter } from 'next/router';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import {auth, provider} from "../firebase"


const Login = () => {

    const router =  useRouter()

    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if(user){
            router.push('/')
            }
        })
    },[])
  return (
    <Wrapper>
      <PanWalaLogo src="https://th.bing.com/th/id/OIP.Ok4wmT91nkhCLmp1QDO7pAHaHa?rs=1&pid=ImgDetMain"/>
      <Title>Log in to access your account</Title>
      <Headimage src="https://th.bing.com/th/id/R.73f4bce2fe5bf08a54595f599d2cfa46?rik=tjtQh4DYQkhVcg&riu=http%3a%2f%2fwww.bordermex.com%2fContent%2fimages%2findex%2fITEMS-4.png&ehk=IUg%2bqFmM%2fldu106O4lgmarpnnZNoHUzJlOwyrWOJw0o%3d&risl=&pid=ImgRaw&r=0"></Headimage> 
      <SignInButton onClick={()=> signInWithPopup(auth,provider)}>Sign in with google</SignInButton>
    </Wrapper>
  )
}

export default Login

const Wrapper = tw.div`
bg-white flex flex-col h-screen w-screen p-4
`

const SignInButton = tw.button`
bg-black text-white text-center py-4 mt-8 self-center w-full
`

const PanWalaLogo = tw.img`
h-20 w-auto object-contain self-start 
`
const Title = tw.div`
text-5xl pt-4 text-gray-500
`
const Headimage = tw.img`
object-contain w-full 
`