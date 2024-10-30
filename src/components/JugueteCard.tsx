// Importamos la interfaz Juguete para tipar el juguete
import type { Juguete } from "../types";

interface JugueteCardProps {
  juguete: Juguete;
  addToCart: (item: Juguete) => void;
}

const JugueteCard = ({ juguete, addToCart }: JugueteCardProps) => {
  // Desestructuración del juguete
  const { name, image, description, price } = juguete;

  return (
    <div className="col-md-6 col-lg-4 my-4 row align-items-center">
      <div className="col-4">
        <img
          className="img-fluid"
          src={`/img/${image}.png`}
          alt={`imagen ${name}`}
        />
      </div>
      <div className="col-8 card">
        <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
        <div className="card-content">
          <p>{description}</p>
          <p className="fw-black text-primary fs-3">${price}</p>
        </div>
        <button
          type="button"
          className="btn btn-dark w-100"
          onClick={() => addToCart(juguete)} // Pasamos la función como prop
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default JugueteCard;
