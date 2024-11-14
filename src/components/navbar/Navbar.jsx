import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <div style={{ marginBottom: "80px" }}>

                <div>
                    <Link to="home">Home</Link>
                </div>
                <div>
                    <Link to="aboutus">About Us</Link>

                </div>
                <div>
                    <Link to="products">Products</Link>
                </div>

                <div>
                    <Link to="pricing">Pricing</Link>
                </div>

            </div>
            <Outlet />
        </>

    )
}
