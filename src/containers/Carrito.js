import React, { useContext, useState } from 'react';
import "../assets/css/Carrito.css";
import ItemCarrito from '../components/ItemCarrito';
import Contexto from '../context/Contexto';

export default function Carrito() {
    const { carrito, eliminarCarrito } = useContext(Contexto);

    // Estado para mantener el carrito con las cantidades actualizadas
    const [carritoConCantidades, setCarritoConCantidades] = useState(carrito);

    // Calcular el total teniendo en cuenta la cantidad
    const calcularTotal = () => {
        let total = 0;
        for (let i = 0; i < carritoConCantidades.length; i++) {
            if (
                carritoConCantidades[i] &&
                carritoConCantidades[i][0] &&
                carritoConCantidades[i][0].precio &&
                carritoConCantidades[i][1] &&
                !isNaN(carritoConCantidades[i][1])
            ) {
                total += carritoConCantidades[i][0].precio * carritoConCantidades[i][1];
            }
        }
        return total;
    };

    // Función para actualizar la cantidad en el carritoConCantidades
    const actualizarCantidadItem = (index, nuevaCantidad) => {
        const carritoActualizado = [...carritoConCantidades];
        carritoActualizado[index][1] = nuevaCantidad;
        setCarritoConCantidades(carritoActualizado);
    };

    // Eliminar item del carrito
    const handleEliminarCarrito = (index) => {
        const carritoActualizado = [...carritoConCantidades];
        carritoActualizado.splice(index, 1);
        setCarritoConCantidades(carritoActualizado);
        eliminarCarrito(carritoActualizado);
    };

    return (
        <>
            <div className="carrito">
                <div className="carrito-listadito">
                    {carritoConCantidades.map((item, i) => (
                        <ItemCarrito
                            {...item}
                            key={i}
                            index={i}
                            eliminarCarrito={() => handleEliminarCarrito(i)}
                            actualizarCantidadItem={actualizarCantidadItem}
                        ></ItemCarrito>
                    ))}
                </div>

                <div className="carrito-precio">
                    {console.log(carritoConCantidades, "el contenido del carrito con cantidades")}
                    Total a pagar <br /><strong>AR$ {calcularTotal()}</strong>
                </div>
            </div>
        </>
    );
}
