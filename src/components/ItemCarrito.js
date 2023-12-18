import React, { useState, useEffect } from 'react';
import "../assets/css/ItemCarrito.css";
import Borrar from "../assets/static/borrar.png";

export default function ItemCarrito({ eliminarCarrito, actualizarCantidadItem, index, ...props }) {
    const { nombre, precio, img, id } = props[0];
    const [cantidad, setCantidad] = useState(0);

    useEffect(() => {
        setCantidad(props[1]);
    }, [props]);

    const handleBorrar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
            // Actualizar la cantidad en el componente padre
            actualizarCantidadItem(index, cantidad - 1);
            console.log(cantidad - 1, "la cantidad de props en 1");
        } else {
            eliminarCarrito();
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
