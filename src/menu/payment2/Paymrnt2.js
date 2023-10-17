import React from 'react'

function Paymrnt2() {
    const makepayment = async () => {
        console.log("ok")
    }
  return (
    <>
    <button className='btn btn-success' onClick={makepayment} type='button'>Check Out</button>
    </>
  )
}

export default Paymrnt2