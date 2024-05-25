import {useEffect,useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";
// const inter = Inter({ subsets: ["latin"] });
import Map from "./components/Map";
import Link from "next/link";
import {auth} from '../firebase'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from 'next/router';

export default function Home() {

const[user, setUser] = useState(null)
const router = useRouter()

useEffect(()=>{
return onAuthStateChanged(auth, user =>{
  if(user){
  setUser({
      name: user.displayName,
      photoUrl: user.photoURL,
  })
}else{
  setUser(null)
  router.push('/login')
}
})

},[])

  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <PanWalaLogo src="https://th.bing.com/th/id/OIP.Ok4wmT91nkhCLmp1QDO7pAHaHa?rs=1&pid=ImgDetMain" />
          <Profile>
            <Name>{user && user.name}</Name>
            <UserImage src={user && user.photoUrl} onClick={()=>signOut(auth)}/>
          </Profile>
        </Header>

        <ActionButtons>
          <ActionButton>
            <Link href="/search">
              <StyledLink>
                <ActionButtonImage src="https://cdn-icons-png.flaticon.com/256/9851/9851490.png" />
                Ride
              </StyledLink>
            </Link>
          </ActionButton>

          <ActionButton>
            <ActionButtonImage src="https://cdn2.iconfinder.com/data/icons/transport-48/512/Bike-512.png" />
            Wheels
          </ActionButton>

          <ActionButton>
            <ActionButtonImage src="https://cdn4.iconfinder.com/data/icons/office-suite-01-outline/64/Calendar_meeting_add_new_reserve-512.png" />
            Reserve"
          </ActionButton>
        </ActionButtons>

        <InputButton>Where to?</InputButton>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
 flex flex-col  h-screen bg-white
`;

const ActionItems = tw.div`
flex-1 p-4
`;

const Header = tw.div`
flex justify-between items-center
`;
const PanWalaLogo = tw.img`
h-28
`;

const Profile = tw.div`
flex items-center
`;

const Name = tw.div`
mr-4 w-20 text-sm
`;

const UserImage = tw.img`
h-12 w-12 rounded-full border-gray-200 p-px cursor-pointer
`;
const ActionButtons = tw.div`
flex 
`;

const ActionButton = tw.div`
bg-gray-200 flex-1 m-1 h-32 flex items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl
`;

const ActionButtonImage = tw.img`
h-3/5 
`;

const InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8 
`;

const StyledLink = tw.div`
bg-gray-200 flex-1 m-1 h-32 flex items-center flex-col justify-center text-xl
`;
