import React from 'react'
import iconoCarrito from "../assets/static/carrito.png"
import iconoVolver from "../assets/static/volver.png"
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
    const location = useLocation();
    return (
        <>
            <Link to = "carrito">
                <img src= {iconoCarrito} alt="" className="carritou"/>
            </Link>
            {location.pathname !== '/' && (
                <Link to="/">
                    <img src={iconoVolver} alt="" className="volver" />
                </Link>
            )}

            <h1 className="titulo">
                Dev <br />
                RockStore
            </h1>
        </>
    )
}
