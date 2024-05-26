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



































// import { useEffect } from 'react';
// import { useRouter } from 'next/router';
// import tw from 'tailwind-styled-components';
// import Link from 'next/link';

// const Payment = () => {
//   const router = useRouter();
//   const { totalAmount } = router.query;

//   // State to manage payment amount
//   // const [paymentAmount, setPaymentAmount] = useState(0);

//   useEffect(() => {
//     if (totalAmount) {
//       // Parse selected rides data and set payment amount if needed
//       // setPaymentAmount(Number(totalAmount));
//     }
//   }, [totalAmount]);

//   // Function to handle payment
//   const handlePayment = () => {
//     // Implement your payment logic here
//     console.log('Payment successful!');
//   };

//   return (
//     <Wrapper>
//       <Title>Payment Information</Title>
//       <PaymentAmount>
//         Total Amount: ₹{totalAmount}
//       </PaymentAmount>
//       <PaymentButton onClick={handlePayment} >Pay Now</PaymentButton>
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







// import { useEffect } from 'react';
// import { useRouter } from 'next/router';
// import tw from 'tailwind-styled-components';
// import Link from 'next/link';

// const Payment = () => {
//   const router = useRouter();
//   const { totalAmount } = router.query;

//   useEffect(() => {
//     if (totalAmount) {
//       // Parse selected rides data and set payment amount if needed
//       // setPaymentAmount(Number(totalAmount));
//     }
//   }, [totalAmount]);

//   // Function to handle payment
//   const handlePayment = () => {
//     // Implement your payment logic here
//     router.push('/qr');

//   };

//   return (
//     <Wrapper>
//       <Title>Payment Information</Title>
//       <PaymentAmount>
//         Total Amount: ₹{totalAmount}
//       </PaymentAmount>
//       <PaymentButton onClick={handlePayment}>Pay Now</PaymentButton>
//       <BackLink href="/search">Back to Search</BackLink>
//     </Wrapper>
//   );
// };

// export default Payment;


// const Wrapper = tw.div`
//   flex flex-col items-center justify-center h-screen bg-gray-100
// `;

// const Title = tw.h1`
//   text-3xl font-bold mb-4
// `;

// const PaymentAmount = tw.p`
//   text-xl mb-6
// `;

// const QRContainer = tw.div`
//   mb-6
// `;

// const QRImage = tw.img`
//   w-40 h-40
// `;

// const PaymentButton = tw.button`
//   bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out
// `;

// const BackLink = tw(Link)`
//   mt-4 text-blue-500 hover:text-blue-600 
//   transition-all duration-300 hover:font-bold 
// `;




import { useEffect } from 'react';
import { useRouter } from 'next/router';
import tw from 'tailwind-styled-components';
import Link from 'next/link';

const Payment = () => {
  const router = useRouter();
  const { totalAmount } = router.query;

  useEffect(() => {
    if (totalAmount) {
      // Parse selected rides data and set payment amount if needed
      // setPaymentAmount(Number(totalAmount));
    }
  }, [totalAmount]);

  // Function to handle payment
  const handlePayment = () => {
    // Implement your payment logic here
    router.push('/qr');
  };

  // Function to handle back button click
  const handleBackToSearch = () => {
    // Display an alert with a message
    alert('Returning to search page');
    // Navigate to the search page
    router.push('/search');
  };

  return (
    <Wrapper>
      <Title>Payment Information</Title>
      <PaymentAmount>
        Total Amount: ₹{totalAmount}
      </PaymentAmount>
      <PaymentButton onClick={handlePayment}>Pay Now</PaymentButton>
      {/* Update BackLink to use a custom onClick handler */}
      <BackLink onClick={handleBackToSearch}>Back to Search</BackLink>
    </Wrapper>
  );
};

export default Payment;

const Wrapper = tw.div`
  flex flex-col items-center justify-center h-screen bg-gray-100
`;

const Title = tw.h1`
  text-3xl font-bold mb-4
`;

const PaymentAmount = tw.p`
  text-xl mb-6
`;

const QRContainer = tw.div`
  mb-6
`;

const QRImage = tw.img`
  w-40 h-40
`;

const PaymentButton = tw.button`
  bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out
`;

const BackLink = tw.span`
  mt-4 text-blue-500 hover:text-blue-600 cursor-pointer
  transition-all duration-300 hover:font-bold 
`;
