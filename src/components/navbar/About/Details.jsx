import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Details() {
    return (
        <>
            <div style={{ marginTop: "20px" }}>Details
                <div>
                    <Link to="/address">address</Link>
                </div>

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim similique corrupti ea accusamus doloremque ratione natus quaerat doloribus quo? Non facere, quaerat accusantium libero quos minima provident ut recusandae cumque.
            </div>
            <Outlet />
        </>

    )
}
