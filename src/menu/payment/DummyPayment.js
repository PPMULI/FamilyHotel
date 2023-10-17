import React from 'react'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from '@stripe/react-stripe-js';
import InjectCheckout from './PaymentComponent';

function DummyPayment() {
    const stripePromise = loadStripe("pk_test_51NjDDKSGqU1b536r4HOTJqHH0uaq8m6NCPlcLyPmjU5knig9uaOFdm4OowiQA2nLf9BLBhtyVlHm9eK4X4iGpEAx00o1MV1tEo");
    console.log(stripePromise)
  return (
    <>
    <div className='dummyproduct'>
        <Elements stripe={stripePromise}>
            <InjectCheckout />
        </Elements>
    </div>
    </>
  )
}

export default DummyPayment