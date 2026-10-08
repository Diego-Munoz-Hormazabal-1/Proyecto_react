import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
function Producto({ nombre,precio,emoji }) {
return (
<Card style={{ width: "18rem" }}>
<Card.Body>
<Card.Title>
{emoji} {nombre}
</Card.Title>
<Card.Text>${precio}</Card.Text>
<Button variant="primary">
Agregar al carrito
</Button>
</Card.Body>
</Card>
);
}
export default Producto;