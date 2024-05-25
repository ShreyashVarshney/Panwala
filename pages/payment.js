// pages/payment.js

// import { useState } from 'react';
// import tw from 'tailwind-styled-components';
// import Link from 'next/link';

// const Payment = () => {
//   // State to manage payment amount
//   const [paymentAmount, setPaymentAmount] = useState(0);

//   // Function to handle payment
//   const handlePayment = () => {
//     // Implement your payment logic here
//     console.log('Payment successful!');
//   };

//   return (
//     <Wrapper>
//       <Title>Payment Information</Title>
//       <PaymentAmount>
//         Total Amount: ${paymentAmount.toFixed(2)}
//       </PaymentAmount>
//       <PaymentButton onClick={handlePayment}>Pay Now</PaymentButton>
//       <BackLink href="/confirm">Back to Confirm</BackLink>
//     </Wrapper>
//   );
// };

// export default Payment;

// // Styled components
// const Wrapper = tw.div`
//   flex flex-col items-center justify-center h-screen
// `;

// const Title = tw.h1`
//   text-3xl font-bold mb-4
// `;

// const PaymentAmount = tw.p`
//   text-xl mb-6
// `;

// const PaymentButton = tw.button`
//   bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out
// `;

// const BackLink = tw(Link)`
//   mt-4 text-blue-500 hover:text-blue-600
// `;





































import { useState, useEffect } from 'react';
import tw from 'tailwind-styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Payment = () => {
  const router = useRouter();
  const { rides } = router.query;

  // State to manage payment amount
  const [paymentAmount, setPaymentAmount] = useState(0);

  useEffect(() => {
    if (rides) {
      // Parse selected rides data
      const selectedRides = JSON.parse(rides);

      // Calculate total amount based on selected rides
      const totalAmount = Object.values(selectedRides).reduce((acc, count) => {
        return acc + count;
      }, 0);

      setPaymentAmount(totalAmount);
    }
  }, [rides]);

  // Function to handle payment
  const handlePayment = () => {
    // Implement your payment logic here
    console.log('Payment successful!');
  };

  return (
    <Wrapper>
      <Title>Payment Information</Title>
      <PaymentAmount>
        Total Amount: ₹{paymentAmount.toFixed(2)}
      </PaymentAmount>
      <PaymentButton onClick={handlePayment}>Pay Now</PaymentButton>
      <BackLink href="/confirm">Back to Confirm</BackLink>
    </Wrapper>
  );
};

export default Payment;

// Styled components
const Wrapper = tw.div`
  flex flex-col items-center justify-center h-screen
`;

const Title = tw.h1`
  text-3xl font-bold mb-4
`;

const PaymentAmount = tw.p`
  text-xl mb-6
`;

const PaymentButton = tw.button`
  bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out
`;

const BackLink = tw(Link)`
  mt-4 text-blue-500 hover:text-blue-600
`;
