// import { useEffect, useState } from "react";
// import tw from "tailwind-styled-components";
// import Map from "./components/Map";
// import { useRouter } from "next/router";
// import RideSelector from "./components/RideSelector";
// import Link from "next/link";

// const Confirm = () => {
//   const router = useRouter();
//   const { pickup, dropoff } = router.query;


//   const [pickupCoordinates, setPickupCoordinates] = useState([0,0]);
//   const [dropoffCoordinates, setDropoffCoordinates] = useState([0,0]);

//   const getPickupCoordinates = (pickup) => {

//     fetch(
//       `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
//         new URLSearchParams({
//           access_token:
//             "pk.eyJ1Ijoic2hyZXlhc2h2YXJzaG4iLCJhIjoiY2x3amxpNWlpMHc0MDJsa3h4OTh1NzV5NCJ9.WDPDfg-PwoHjPbHqbve8Dg",
//           limit: 1,
//         })
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setPickupCoordinates(data.features[0].center);
//       });
//   };

//   const getDropoffCoordinates = (dropoff) => {
    
//     fetch(
//       `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
//         new URLSearchParams({
//           access_token:
//             "pk.eyJ1Ijoic2hyZXlhc2h2YXJzaG4iLCJhIjoiY2x3amxpNWlpMHc0MDJsa3h4OTh1NzV5NCJ9.WDPDfg-PwoHjPbHqbve8Dg",
//           limit: 1,
//         })
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setDropoffCoordinates(data.features[0].center);
//       });
//   };

//   useEffect(() => {
//     getPickupCoordinates(pickup);
//     getDropoffCoordinates(dropoff);
//   }, [pickup, dropoff]);

//   return (
//     <Wrapper>
//         <ButtonContainer>
//             <Link href="/search">
//             <BackButton src = "https://cdn-icons-png.flaticon.com/256/545/545680.png"></BackButton>
//             </Link>
//         </ButtonContainer>
//       <Map
//         pickupCoordinates={pickupCoordinates}
//         dropoffCoordinates={dropoffCoordinates}
//       />
//       <RideContainer>
              
//         <RideSelector pickupCoordinates={pickupCoordinates}
//         dropoffCoordinates={dropoffCoordinates}/>
        
//         <ConfirmButtonContainer>
//             <ConfirmButton>
//             Confirm Panwala
//             </ConfirmButton>
              
//         </ConfirmButtonContainer>


//       </RideContainer>
//     </Wrapper>
//   );
// };

// export default Confirm;


// const ConfirmButton = tw.div`
// bg-black text-white my-4 mx-4 py-4 text-center text-xl
// `


// const ConfirmButtonContainer = tw.div`
// border-t-2
// `


// const RideContainer = tw.div`
// flex-1 flex flex-col h-1/2
// `;

// const Wrapper = tw.div`
// flex h-screen flex-col
// `;

// const ButtonContainer = tw.div`
// rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer 
// `
// const BackButton = tw.img`
// h-full object-contain h-10 w-10
// `













































// import { useEffect, useState } from "react";
// import tw from "tailwind-styled-components";
// import Map from "./components/Map";
// import RideSelector from "./components/RideSelector";
// import Link from "next/link"; // Import Link from Next.js
// import { useRouter } from "next/router";

// const Confirm = () => {
//   const router = useRouter();
//   const { pickup, dropoff } = router.query;

//   const [pickupCoordinates, setPickupCoordinates] = useState([0, 0]);
//   const [dropoffCoordinates, setDropoffCoordinates] = useState([0, 0]);

//   const getPickupCoordinates = (pickup) => {
//     fetch(
//       `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
//         new URLSearchParams({
//           access_token:
//             "pk.eyJ1Ijoic2hyZXlhc2h2YXJzaG4iLCJhIjoiY2x3amxpNWlpMHc0MDJsa3h4OTh1NzV5NCJ9.WDPDfg-PwoHjPbHqbve8Dg",
//           limit: 1,
//         })
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setPickupCoordinates(data.features[0].center);
//       });
//   };

//   const getDropoffCoordinates = (dropoff) => {
//     fetch(
//       `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
//         new URLSearchParams({
//           access_token:
//             "pk.eyJ1Ijoic2hyZXlhc2h2YXJzaG4iLCJhIjoiY2x3amxpNWlpMHc0MDJsa3h4OTh1NzV5NCJ9.WDPDfg-PwoHjPbHqbve8Dg",
//           limit: 1,
//         })
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setDropoffCoordinates(data.features[0].center);
//       });
//   };

//   useEffect(() => {
//     getPickupCoordinates(pickup);
//     getDropoffCoordinates(dropoff);
//   }, [pickup, dropoff]);

//   return (
//     <Wrapper>
//       <ButtonContainer>
//         <Link href="/search">
//           <BackButton src="https://cdn-icons-png.flaticon.com/256/545/545680.png" />
//         </Link>
//       </ButtonContainer>
//       <Map
//         pickupCoordinates={pickupCoordinates}
//         dropoffCoordinates={dropoffCoordinates}
//       />
//       <RideContainer>
//         <RideSelector
//           pickupCoordinates={pickupCoordinates}
//           dropoffCoordinates={dropoffCoordinates}
//         />
//         <Link href="/payment"> {/* Link to Payment.js */}
//           <ConfirmButtonContainer>
//             <ConfirmButton>Confirm Panwala</ConfirmButton>
//           </ConfirmButtonContainer>
//         </Link>
//       </RideContainer>
//     </Wrapper>
//   );
// };

// export default Confirm;

// const ConfirmButton = tw.div`
// bg-black text-white my-4 mx-4 py-4 text-center text-xl
// `;

// const ConfirmButtonContainer = tw.div`
// border-t-2
// `;

// const RideContainer = tw.div`
// flex-1 flex flex-col h-1/2
// `;

// const Wrapper = tw.div`
// flex h-screen flex-col
// `;

// const ButtonContainer = tw.div`
// rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer 
// `;

// const BackButton = tw.img`
// h-full object-contain h-10 w-10
// `;






















































// import { useEffect, useState } from "react";
// import tw from "tailwind-styled-components";
// import Map from "./components/Map";
// import RideSelector from "./components/RideSelector";
// import Link from "next/link";
// import { useRouter } from "next/router";

// const Confirm = () => {
//   const router = useRouter();
//   const { pickup, dropoff } = router.query;

//   const [pickupCoordinates, setPickupCoordinates] = useState([0,0]);
//   const [dropoffCoordinates, setDropoffCoordinates] = useState([0,0]);
//   const [selectedRides, setSelectedRides] = useState({}); // State to manage selected rides

//   const getPickupCoordinates = (pickup) => {
//     fetch(
//       `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
//         new URLSearchParams({
//           access_token:
//             "pk.eyJ1Ijoic2hyZXlhc2h2YXJzaG4iLCJhIjoiY2x3amxpNWlpMHc0MDJsa3h4OTh1NzV5NCJ9.WDPDfg-PwoHjPbHqbve8Dg",
//           limit: 1,
//         })
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setPickupCoordinates(data.features[0].center);
//       });
//   };

//   const getDropoffCoordinates = (dropoff) => {
//     fetch(
//       `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
//         new URLSearchParams({
//           access_token:
//             "pk.eyJ1Ijoic2hyZXlhc2h2YXJzaG4iLCJhIjoiY2x3amxpNWlpMHc0MDJsa3h4OTh1NzV5NCJ9.WDPDfg-PwoHjPbHqbve8Dg",
//           limit: 1,
//         })
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setDropoffCoordinates(data.features[0].center);
//       });
//   };

//   useEffect(() => {
//     if (pickup && dropoff) {
//       getPickupCoordinates(pickup);
//       getDropoffCoordinates(dropoff);
//     }
//   }, [pickup, dropoff]);

//   return (
//     <Wrapper>
//         <ButtonContainer>
//             <Link href="/search">
//               <BackButton src="https://cdn-icons-png.flaticon.com/256/545/545680.png" />
//             </Link>
//         </ButtonContainer>
//       <Map
//         pickupCoordinates={pickupCoordinates}
//         dropoffCoordinates={dropoffCoordinates}
//       />
//       <RideContainer>
//         {/* Pass selectedRides as prop to RideSelector */}
//         <RideSelector
//           pickupCoordinates={pickupCoordinates}
//           dropoffCoordinates={dropoffCoordinates}
//           selectedRides={selectedRides}
//           setSelectedRides={setSelectedRides}
//         />
//         {/* Link to payment page with selectedRides as query parameters */}
//         <Link href={{ pathname: "/payment", query: { rides: selectedRides } }}>
//           <ConfirmButtonContainer>
//             <ConfirmButton>Confirm Panwala</ConfirmButton>
//           </ConfirmButtonContainer>
//         </Link>
//       </RideContainer>
//     </Wrapper>
//   );
// };

// export default Confirm;

// const ConfirmButton = tw.div`
//   bg-black text-white my-4 mx-4 py-4 text-center text-xl
// `;

// const ConfirmButtonContainer = tw.div`
//   border-t-2
// `;

// const RideContainer = tw.div`
//   flex-1 flex flex-col h-1/2
// `;

// const Wrapper = tw.div`
//   flex h-screen flex-col
// `;

// const ButtonContainer = tw.div`
//   rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer 
// `;

// const BackButton = tw.img`
//   h-full object-contain h-10 w-10
// `;





































import React, { useState, useEffect } from 'react';
import tw from 'tailwind-styled-components';
import Map from './components/Map';
import RideSelector from './components/RideSelector';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Confirm = () => {
  const router = useRouter();
  const { pickup, dropoff } = router.query;

  const [pickupCoordinates, setPickupCoordinates] = useState([0, 0]);
  const [dropoffCoordinates, setDropoffCoordinates] = useState([0, 0]);
  const [selectedRides, setSelectedRides] = useState({});

  const getPickupCoordinates = (pickup) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            'pk.eyJ1Ijoic2hyZXlhc2h2YXJzaG4iLCJhIjoiY2x3amxpNWlpMHc0MDJsa3h4OTh1NzV5NCJ9.WDPDfg-PwoHjPbHqbve8Dg',
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setPickupCoordinates(data.features[0].center);
      });
  };

  const getDropoffCoordinates = (dropoff) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            'pk.eyJ1Ijoic2hyZXlhc2h2YXJzaG4iLCJhIjoiY2x3amxpNWlpMHc0MDJsa3h4OTh1NzV5NCJ9.WDPDfg-PwoHjPbHqbve8Dg',
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setDropoffCoordinates(data.features[0].center);
      });
  };

  useEffect(() => {
    if (pickup && dropoff) {
      getPickupCoordinates(pickup);
      getDropoffCoordinates(dropoff);
    }
  }, [pickup, dropoff]);

  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/search">
          <BackButton src="https://cdn-icons-png.flaticon.com/256/545/545680.png" />
        </Link>
      </ButtonContainer>
      <Map pickupCoordinates={pickupCoordinates} dropoffCoordinates={dropoffCoordinates} />
      <RideContainer>
        <RideSelector pickupCoordinates={pickupCoordinates} dropoffCoordinates={dropoffCoordinates} />
        <Link href={{ pathname: '/payment', query: { rides: JSON.stringify(selectedRides) } }}>
          <ConfirmButtonContainer>
            <ConfirmButton>Confirm Panwala</ConfirmButton>
          </ConfirmButtonContainer>
        </Link>
      </RideContainer>
    </Wrapper>
  );
};

export default Confirm;

const ConfirmButton = tw.div`
bg-black text-white my-4 mx-4 py-4 text-center text-xl
`;

const ConfirmButtonContainer = tw.div`
border-t-2
`;

const RideContainer = tw.div`
flex-1 flex flex-col h-1/2
`;

const Wrapper = tw.div`
flex h-screen flex-col
`;

const ButtonContainer = tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer 
`;

const BackButton = tw.img`
h-full object-contain h-10 w-10
`;
