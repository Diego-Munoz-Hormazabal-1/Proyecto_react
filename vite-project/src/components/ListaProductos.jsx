import productos from "../data/productos";
import Producto from "./Producto";

function ListaProductos() {
return (
<div>
{productos.map((producto) => (
<Producto
key={producto.id}
nombre={producto.nombre}
precio={producto.precio}
emoji={producto.emoji}
/>
))}
</div>
);
}
export default ListaProductos;