import React from 'react'
import TransportNav from './TransportNav'
import Transport from './Transport'
import TransportOffers from './TransportOffers'
import Transportpartners from './Transportpartners'
import Transportservices from './Transportservices'

function TransportHome() {
  return (
    <>
    <TransportNav />
    <Transport className="bgbus" title="Book Bus Ticket" />
    <TransportOffers />
    <Transportpartners />
    <Transportservices />
    </>
  )
}

export default TransportHome