// import React,{useState,useEffect} from 'react'
// import tw from "tailwind-styled-components";
// import {carList} from '../data/carList'
// import { data } from 'autoprefixer';

// const RideSelector = ({pickupCoordinates,dropoffCoordinates}) => {
//     const[rideDuration,setRideDuration] = useState(0)

//     //get ride duration
//     useEffect(() => {
//         fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1Ijoic2hyZXlhc2h2YXJzaG4iLCJhIjoiY2x3amxpNWlpMHc0MDJsa3h4OTh1NzV5NCJ9.WDPDfg-PwoHjPbHqbve8Dg`)
//           .then(res => res.json())
//           .then(data => {
//             setRideDuration(data.routes[0].duration / 100);
//           })
//           .catch(error => {
//             console.error('Error fetching ride duration:', error);
//             // Handle error state if needed
//           });
//       }, [pickupCoordinates, dropoffCoordinates]);

//   return (
//     <Wrapper>
//       <Title>Choose a ride, or scroll down for more</Title>
//       <CarList>
//         { carList.map((car,index)=>(
//             <Car key={index}>
//             <CarImage src = {car.imgUrl}></CarImage>
//             <CarDetails>
//                 <Service>{car.service}</Service>
//                 <Time>5 min away</Time>
//             </CarDetails>
//             <Price>{'₹'+ (rideDuration*car.multiplier).toFixed(2)}</Price>
//             </Car>

//         ))}

//       </CarList>
//     </Wrapper>
//   )
// }

// export default RideSelector

// const CarDetails = tw.div`
// flex-1
// `
// const Service = tw.div`
// font-medium
// `
// const Time = tw.div`
// text-xs text-blue-500
// `
// const Price = tw.div`
// text-sm
// `
// const CarImage = tw.img`
// h-14 mr-4
// `

// const Car = tw.div`
// flex p-4 items-center
// `

// const Title = tw.div`
// text-gray-500 text-center text-xs py-2 border-b
// `

// const CarList = tw.div`
// overflow-y-scroll
// `
// const Wrapper = tw.div`
// flex-1 overflow-y-scroll flex flex-col
// `

// import React, { useState, useEffect } from 'react';
// import tw from 'tailwind-styled-components';
// import { carList } from '../data/carList';
// import { FaPlus, FaMinus } from 'react-icons/fa';

// const RideSelector = ({ pickupCoordinates, dropoffCoordinates }) => {
//   const [rideDuration, setRideDuration] = useState(0);
//   const [selectedRides, setSelectedRides] = useState({});

//   //get ride duration
//   useEffect(() => {
//     fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1Ijoic2hyZXlhc2h2YXJzaG4iLCJhIjoiY2x3amxpNWlpMHc0MDJsa3h4OTh1NzV5NCJ9.WDPDfg-PwoHjPbHqbve8Dg`)
//       .then(res => res.json())
//       .then(data => {
//         setRideDuration(data.routes[0].duration / 100);
//       })
//       .catch(error => {
//         console.error('Error fetching ride duration:', error);
//         // Handle error state if needed
//       });
//   }, [pickupCoordinates, dropoffCoordinates]);

//   const handleAddRide = (car) => {
//     setSelectedRides({
//       ...selectedRides,
//       [car.service]: (selectedRides[car.service] || 0) + 1
//     });
//   };

//   const handleRemoveRide = (car) => {
//     if (selectedRides[car.service] > 0) {
//       setSelectedRides({
//         ...selectedRides,
//         [car.service]: selectedRides[car.service] - 1
//       });
//     }
//   };

//   return (
//     <Wrapper>
//       <Title>Choose a ride, or scroll down for more</Title>
//       <CarList>
//         {carList.map((car, index) => (
//           <Car key={index}>
//             <CarImage src={car.imgUrl} />
//             <CarDetails>
//               <Service>{car.service}</Service>
//               <Time>5 min away</Time>
//             </CarDetails>
//             <Price>
//               {'₹' + (rideDuration * car.multiplier).toFixed(2)}
//               <ButtonContainer>
//                 <Button onClick={() => handleAddRide(car)}>
//                   <FaPlus />
//                 </Button>
//                 <Count>{selectedRides[car.service] || 0}</Count>
//                 <Button onClick={() => handleRemoveRide(car)}>
//                   <FaMinus />
//                 </Button>
//               </ButtonContainer>
//             </Price>
//           </Car>
//         ))}
//       </CarList>
//     </Wrapper>
//   );
// };

// export default RideSelector;

// const CarDetails = tw.div`
//   flex-1
// `;

// const Service = tw.div`
//   font-medium
// `;

// const Time = tw.div`
//   text-xs text-blue-500
// `;

// const Price = tw.div`
//   text-sm relative
// `;

// const CarImage = tw.img`
//   h-14 mr-4
// `;

// const Car = tw.div`
//   flex p-4 items-center
// `;

// const ButtonContainer = tw.div`
//   flex items-center
// `;

// const Button = tw.button`
//   ml-2 text-blue-500 hover:text-blue-700 transition-colors p-1
// `;

// const Count = tw.span`
//   px-2 py-1 text-xs
// `;

// const Title = tw.div`
//   text-gray-500 text-center text-xs py-2 border-b
// `;

// const CarList = tw.div`
//   overflow-y-scroll
// `;

// const Wrapper = tw.div`
//   flex-1 overflow-y-scroll flex flex-col
// `;























import React, { useState, useEffect } from "react";
import tw from "tailwind-styled-components";
import { carList } from "../data/carList";
import { FaPlus, FaMinus } from "react-icons/fa";

const RideSelector = ({
  pickupCoordinates,
  dropoffCoordinates,
  setTotalAmount,
}) => {
  const [rideDuration, setRideDuration] = useState(0);
  const [selectedRides, setSelectedRides] = useState({});
   useEffect(()=>{
    localStorage.setItem("carlist",carList)
   },[])
  // Get ride duration
  useEffect(() => {
    fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1Ijoic2hyZXlhc2h2YXJzaG4iLCJhIjoiY2x3amxpNWlpMHc0MDJsa3h4OTh1NzV5NCJ9.WDPDfg-PwoHjPbHqbve8Dg`
    )
      .then((res) => res.json())
      .then((data) => {
        setRideDuration(data.routes[0].duration / 100);
      })
      .catch((error) => {
        console.error("Error fetching ride duration:", error);
      });
  }, [pickupCoordinates, dropoffCoordinates]);

  const handleAddRide = (car) => {
    const updatedRides = {
      ...selectedRides,
      [car.service]: (selectedRides[car.service] || 0) + 1,
    };
    setSelectedRides(updatedRides);
    calculateTotalAmount(updatedRides);
  };

  const handleRemoveRide = (car) => {
    if (selectedRides[car.service] > 0) {
      const updatedRides = {
        ...selectedRides,
        [car.service]: selectedRides[car.service] - 1,
      };
      setSelectedRides(updatedRides);
      calculateTotalAmount(updatedRides);
    }
  };

  const calculateTotalAmount = (rides) => {
    let total = 0;
    for (const [service, count] of Object.entries(rides)) {
      const car = carList.find((car) => car.service === service);
      if (car) {
        total += count * (rideDuration * car.multiplier*10);
      }
    }
    setTotalAmount(Math.floor(total.toFixed(2)));
  };

  return (
    <Wrapper>
      <Title>Choose a ride, or scroll down for more</Title>
      <CarList>
        {carList.map((car, index) => (
          <Car key={index}>
            <CarImage src={car.imgUrl} />
            <CarDetails>
              <Service>{car.service}</Service>
              <Time>{`${Math.floor(car.time)} min away`}</Time>
            </CarDetails>
            <Price>
              {"₹" + (rideDuration * car.multiplier*10).toFixed(2)}
              <ButtonContainer>
                <Button onClick={() => handleAddRide(car)}>
                  <FaPlus />
                </Button>
                <Count>{selectedRides[car.service] || 0}</Count>
                <Button onClick={() => handleRemoveRide(car)}>
                  <FaMinus />
                </Button>
              </ButtonContainer>
            </Price>
          </Car>
        ))}
      </CarList>
     
    </Wrapper>
  );
};

export default RideSelector;

const CarDetails = tw.div`
  flex-1
`;

const Service = tw.div`
  font-medium
`;

const Time = tw.div`
  text-xs text-blue-500
`;

const Price = tw.div`
  text-sm relative
`;

const CarImage = tw.img`
  h-14 mr-4
`;

const Car = tw.div`
  flex p-4 items-center 
`;

const ButtonContainer = tw.div`
  flex items-center
`;

const Button = tw.button`
  ml-2 text-blue-500 hover:text-blue-700 transition-colors p-1
`;

const Count = tw.span`
  px-2 py-1 text-xs
`;

const Title = tw.div`
  text-gray-500 text-center text-xs py-2 border-b
`;

const CarList = tw.div`
flex-1
`;

const Wrapper = tw.div`
  flex-1 overflow-y-scroll flex flex-col
`;

const TotalAmountContainer = tw.div`
  p-4 border-t
`;

const TotalAmount = tw.div`
  text-lg font-bold text-right
`;
