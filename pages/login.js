// import React, { useEffect } from "react";
// import tw from "tailwind-styled-components";
// import { useRouter } from "next/router";
// import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
// import { auth, provider } from "../firebase";

// const Login = () => {
//   const router = useRouter();

//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         router.push("/");
//       }
//     });
//   }, []);
//   return (
//     <Wrapper>
//       <PanWalaLogo src="https://th.bing.com/th/id/OIP.Ok4wmT91nkhCLmp1QDO7pAHaHa?rs=1&pid=ImgDetMain" />
//       <Title>Log in to access your account</Title>
//       <Headimage src="https://th.bing.com/th/id/R.73f4bce2fe5bf08a54595f599d2cfa46?rik=tjtQh4DYQkhVcg&riu=http%3a%2f%2fwww.bordermex.com%2fContent%2fimages%2findex%2fITEMS-4.png&ehk=IUg%2bqFmM%2fldu106O4lgmarpnnZNoHUzJlOwyrWOJw0o%3d&risl=&pid=ImgRaw&r=0"></Headimage>
//       <SignInButton onClick={() => signInWithPopup(auth, provider)}>
//         Sign in with google
//       </SignInButton>
//     </Wrapper>
//   );
// };

// export default Login;

// const Wrapper = tw.div`
// bg-white flex flex-col h-screen w-screen p-4
// `;

// const SignInButton = tw.button`
// bg-black text-white text-center py-4 mt-8 self-center w-full
// `;

// const PanWalaLogo = tw.img`
// h-20 w-auto object-contain self-start
// `;
// const Title = tw.div`
// text-5xl pt-4 text-gray-500
// `;
// const Headimage = tw.img`
// object-contain w-full
// `;





// import React, { useEffect } from "react";
// import tw from "tailwind-styled-components";
// import { useRouter } from "next/router";
// import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
// import { auth, provider } from "../firebase";

// const Login = () => {
//   const router = useRouter();

//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         router.push("/");
//       }
//     });
//     // Disable scrolling when component mounts
//     document.body.style.overflow = "hidden";

//     // Enable scrolling when component unmounts
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, []);

//   return (
//     <Wrapper>
//       <PanWalaLogo src="https://th.bing.com/th/id/OIP.Ok4wmT91nkhCLmp1QDO7pAHaHa?rs=1&pid=ImgDetMain" />
//       <Title>Log in to access your account</Title>
//       <ImageContainer>
//         <Headimage src="https://th.bing.com/th/id/R.73f4bce2fe5bf08a54595f599d2cfa46?rik=tjtQh4DYQkhVcg&riu=http%3a%2f%2fwww.bordermex.com%2fContent%2fimages%2findex%2fITEMS-4.png&ehk=IUg%2bqFmM%2fldu106O4lgmarpnnZNoHUzJlOwyrWOJw0o%3d&risl=&pid=ImgRaw&r=0"></Headimage>
//       </ImageContainer>
//       <ButtonContainer>
//         <SignInButton onClick={() => signInWithPopup(auth, provider)}>
//           Sign in with Google
//         </SignInButton>
//       </ButtonContainer>
//     </Wrapper>
//   );
// };

// export default Login;

// const Wrapper = tw.div`
//   bg-white flex flex-col h-screen w-screen p-4 relative // Add relative positioning
// `;

// const ImageContainer = tw.div`
//   flex-1 // Use flex to allow the image to grow to fill available space
//   h-3/5 // Set the height to 60% of the viewport height
//   overflow-hidden // Hide overflow to prevent scrollbars
// `;

// const ButtonContainer = tw.div`
//   absolute bottom-8 left-0 right-0 // Position the button at the bottom with some space from the bottom edge
// `;

// const SignInButton = tw.button`
//   bg-black text-white text-center py-4 w-full // Make the button full width
// `;

// const PanWalaLogo = tw.img`
//   h-20 w-auto object-contain self-start mb-4 // Add margin at the bottom to separate logo from title
// `;

// const Title = tw.div`
//   text-5xl text-center text-gray-500 mb-4 // Center align the title and add margin at the bottom
// `;

// const Headimage = tw.img`
//   object-contain w-full h-full // Ensure the image fills the container while maintaining aspect ratio
// `;










import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import { useRouter } from "next/router";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../firebase";

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/");
      }
    });
   
    document.body.style.overflow = "hidden";

    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <Wrapper>
      <PanWalaLogo src="https://th.bing.com/th/id/OIP.Ok4wmT91nkhCLmp1QDO7pAHaHa?rs=1&pid=ImgDetMain" />
      <Title>Log in to access your account</Title>
      <ImageContainer>
        <Headimage src="https://th.bing.com/th/id/R.73f4bce2fe5bf08a54595f599d2cfa46?rik=tjtQh4DYQkhVcg&riu=http%3a%2f%2fwww.bordermex.com%2fContent%2fimages%2findex%2fITEMS-4.png&ehk=IUg%2bqFmM%2fldu106O4lgmarpnnZNoHUzJlOwyrWOJw0o%3d&risl=&pid=ImgRaw&r=0"></Headimage>
      </ImageContainer>
      <ButtonContainer>
        <SignInButton onClick={() => signInWithPopup(auth, provider)}>
          Sign in with Google
        </SignInButton>
      </ButtonContainer>
    </Wrapper>
  );
};

export default Login;

const Wrapper = tw.div`
  bg-white flex flex-col h-screen w-screen p-4 relative bg-light bg-blue-100
`;

const ImageContainer = tw.div`
  flex-1 h-3/5 overflow-hidden
`;

const ButtonContainer = tw.div`
absolute bottom-0.5 left-0 right-0 flex justify-center
`;

const SignInButton = tw.button`
bg-black text-white text-center px-5 py-2.5 w-full  p-2
transition duration-300 ease-in-out 
hover:bg-gray-900
hover:text-gray-300
hover:shadow-md
`;

const PanWalaLogo = tw.img`
  h-20 w-auto object-contain self-start mb-4 rounded-full
`;

const Title = tw.div`
  text-5xl text-center text-gray-500 mb-4
`;

const Headimage = tw.img`
  object-contain w-full h-full
`;
