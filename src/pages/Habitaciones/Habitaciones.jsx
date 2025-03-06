import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "../../styles/styles.css";

const habitaciones = [
  {
    titulo: "Clásica",
    descripcion: "Cómoda habitación de 12m² con ventana y vistas.",
    detalles: [
      "Colchón de resortes",
      "Smart TV de 32 pulgadas",
      "Aire acondicionado split frío/calor",
      "Secador de pelo",
      "Cómodo escritorio",
      "Somier de 130cm x 180cm",
    ],
  },
  {
    titulo: "Prémium",
    descripcion: "Habitación de 20m² sin ventana, con estar amplio.",
    detalles: [
      "Colchón con resortes",
      "Smart TV de 32 pulgadas",
      "Aire acondicionado split frío/calor",
      "Secador de pelo",
      "Frigobar",
      "Cama matrimonial king o individuales de 90cm x 190cm",
    ],
  },
  {
    titulo: "Superior",
    descripcion: "Habitación luminosa de 18m² con ventana.",
    detalles: [
      "Colchón con resortes",
      "Smart TV de 32 pulgadas",
      "Aire acondicionado split frío/calor",
      "Secador de pelo",
      "Cómodo escritorio",
      "Cama matrimonial king o individuales de 90cm x 190cm",
    ],
  },
  {
    titulo: "Suite",
    descripcion: "Amplia habitación con ventanales y mobiliario moderno.",
    detalles: [
      "Dos ambientes",
      "Amplio vestidor",
      "Bañera con hidromasaje",
      "Smart TV de 32 pulgadas",
      "Dos aires acondicionado split frío/calor",
      "Mesa con sillas, frigobar, vajilla y hervidor eléctrico",
      "Cama matrimonial king o individuales de 90cm x 190cm",
    ],
  },
  {
    titulo: "Familiar",
    descripcion: "Habitación espaciosa con ventanales y ambiente acogedor.",
    detalles: [
      "Dos ambientes",
      "Colchones de resortes",
      "Smart TV de 32 y 42 pulgadas",
      "Dos aires acondicionado split frío/calor",
      "Baño con ducha amplia",
      "Secador de pelo, frigobar",
      "Cama matrimonial king o individuales de 90cm x 190cm",
    ],
  },
];

function Habitaciones() {
  return (
    <Container className="landing-container">
      <h1 className="text-center" style={{ color: "#24B3A1" }}>Habitaciones</h1>
      <Row>
        {habitaciones.map((hab, index) => (
          <Col md={6} lg={4} key={index} className="mb-4">
            <Card className="habitacion-card">
              <Card.Body>
                <Card.Title className="habitacion-titulo">{hab.titulo}</Card.Title>
                <Card.Text className="habitacion-descripcion">{hab.descripcion}</Card.Text>
                <ul className="habitacion-lista">
                  {hab.detalles.map((detalle, i) => (
                    <li key={i}>{detalle}</li>
                  ))}
                </ul>
                <Button className="btn-reserva">Reservar Ahora</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Habitaciones;