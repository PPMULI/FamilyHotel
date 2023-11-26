import React, { useContext, useEffect } from 'react'
import Sidebar from '../Home2/Sidebar'
import AdminNav from '../genralcomponent/AdminNav'
import hotelcontext from '../hotelcontext/hotelContext'

function AdminHome() {
  const context = useContext(hotelcontext)
  const { checkAdmin } = context

  useEffect(() => {
    checkAdmin()
  }, [])
  return (
    <>
    <div className="restraurant_image">
    <AdminNav />
    <Sidebar />
    </div>
     </>
  )
}

export default AdminHome