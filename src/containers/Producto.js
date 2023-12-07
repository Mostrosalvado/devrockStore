// En el componente Producto
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Contexto from '../context/Contexto';
import "../assets/css/Producto.css"



export default function Producto() {
    const { id } = useParams();
    const { productos } = useContext(Contexto);
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        // Buscar el producto por ID
        const productoEncontrado = productos.find(item => item.id === parseInt(id));

        // Actualizar el estado con el producto encontrado
        setProducto(productoEncontrado);
    }, [id, productos]);

    if (!producto) {
        return <div>Cargando...</div>;
    }

    // Resto del código para mostrar el detalle del producto
    return (

        <>
        <div className="detalle">
            <img src={producto.img} alt="" className="detalle-img"/>
        <h1 className="home-item-titulo">{producto.nombre}</h1>
        <p className="home-item-medidas">Medidas: {producto.medida}</p>
        <div className="home-item-actions">
        <h3 className="home-item-precio">AR$ {producto.precio}</h3>&nbsp;
        <a href="carrito">  <button className="home-item-comprar">+</button></a>
        </div>
            <strong>{producto.descripcion}</strong>
        </div>
    </>
    );
}
