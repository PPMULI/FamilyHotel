// // import React from 'react'

// // function PaymentComponent() {
// //   return (
// //     <>

// //     </>
// //   )
// // }

// // export default PaymentComponent

// import React, { Component } from 'react'
// // import { CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
// import CardSection from './CardSection';

//  class PaymentComponent extends Component {
//  handleSubmit = async (e) => {
//   e.preventDefault();
//   alert("ok")
//   const {stripe, elements} = this.props

//   if(!stripe || !elements) {
//     return;
//   }

//   // const card = elements.getElement(CardElement)
//   // const result = await stripe.createToken(card)

//   if(!result.error) {
//     console.log(result.error.message)
//   }
//   else {
//     console.log(result)
//   }
//  }
//   render() {
//     return (
//       <>
//       <div className="cardcontainer">
//         <form onSubmit={this.handleSubmit}>
//           <CardSection />
//           <button disabled={!this.props.stripe} onClick={this.handleSubmit} className='btn-pay'>
//             Buy now
//           </button>
//         </form>
//       </div>
//       </>
//     )
//   }
// }

// export default function InjectCheckout() {
//   // return(
//   //   <ElementsConsumer>
//   //     {({stripe, elements}) => (
//   //       <PaymentComponent stripe={stripe} elements={elements} />
//   //     )}
//   //   </ElementsConsumer>
//   // )
// }