import { useState } from "react";
import Link from "next/link";
import React from "react";
import tw from "tailwind-styled-components";

const Search = () => {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");


  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/">
          <BackButton src="https://cdn-icons-png.flaticon.com/256/545/545680.png" />
        </Link>
      </ButtonContainer>

      <InputContainer>
        <FromToIcons>
          <Circle src="https://cdn-icons-png.flaticon.com/256/5720/5720434.png" />
          <Line src="https://cdn-icons-png.flaticon.com/256/649/649686.png" />
          <Square src="https://cdn-icons-png.flaticon.com/256/7151/7151973.png" />
        </FromToIcons>
        <InputBoxes>
          <Input
            placeholder="Enter the pickup location"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
          ></Input>
          <Input
            placeholder="where to?"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
          ></Input>
        </InputBoxes>
        <PlusIcon src="https://cdn-icons-png.flaticon.com/256/9312/9312231.png" />
      </InputContainer>
      <SavedPlaces>
        <StarIcon src="https://cdn-icons-png.flaticon.com/256/616/616489.png" />
        Saved Places
      </SavedPlaces>
      <Link
        href={{
          pathname: "/confirm",
          query: {
            pickup: pickup,
            dropoff: dropoff,
          },
        }}
      >
        <ConfirmButtonContainer>Confirm Location</ConfirmButtonContainer>
      </Link>
    </Wrapper>
  );
};

export default Search;

const ConfirmButtonContainer = tw.div`
bg-black text-white text-center mt-2 mx-4 px-4 py-3 text-2xl cursor-pointer
`;

const Wrapper = tw.div`
bg-gray-200 h-screen 
`;

const ButtonContainer = tw.div`
bg-white px-4
`;

const BackButton = tw.img`
h-12 cursor-pointer
`;

const FromToIcons = tw.div`
w-10 flex flex-col mr-2 items-center
`;

const InputContainer = tw.div`
bg-white flex items-center px-4 mb-2
`;

const Circle = tw.img`
h-2.5
`;

const Line = tw.img`
h-10
`;

const Square = tw.img`
h-3
`;

const InputBoxes = tw.div`
flex flex-col flex-1 
`;

const Input = tw.input`
h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none 
`;

const PlusIcon = tw.img`
w-10 h-10 bg-gray-200 rounded-full ml-3
`;
const SavedPlaces = tw.div`
flex items-center bg-white px-4 py-2
`;

const StarIcon = tw.img`
bg-gray-400 w-10 h-10 p-2 rounded-full mr-2
`;
