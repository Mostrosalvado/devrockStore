import React, { useState, useEffect } from 'react';
import "../assets/css/ItemCarrito.css";
import Borrar from "../assets/static/borrar.png";

export default function ItemCarrito({ eliminarCarrito, ...props }) {
    const { nombre, precio, img, id } = props[0];
    const [cantidad, setCantidad] = useState(0);

    useEffect(() => {
        setCantidad(props[1]);
    }, []);

    console.log(props[1], "cantidad");
    console.log(props, "como vienen al item carrito");

    const handleBorrar = () => {
        if (cantidad > 1) {
            // Si la cantidad es mayor a 1, restar 1 a la cantidad
            setCantidad(cantidad - 1);
        } else {
            // Si la cantidad es 1, eliminar el elemento del carrito
            eliminarCarrito(id);
        }
    };

    return (
        <div className="carrito-item">
            <h1>{cantidad} x </h1>
            <img src={img} alt="" className="carrito-item-img" />
            <div className="carrito-txt">
                <h1 className="carrito-item-titulo">{nombre}</h1>
                <h3 className="carrito-item-precio">AR$ {precio}</h3>
            </div>
            <img src={Borrar} alt="" className="carrito-item-borrar" onClick={handleBorrar} />
        </div>
    );
}

