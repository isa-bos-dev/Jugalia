// Importamos la interfaz para tipar el juguete en carrito
import type { JugueteEnCarrito, Juguete } from "../types";

// Definimos la interfaz de props para Header
interface HeaderProps {
  cart: JugueteEnCarrito[];
  removeFromCart: (id: Juguete["id"]) => void;
  increaseQuantity: (id: Juguete["id"]) => void;
  decreaseQuantity: (id: Juguete["id"]) => void;
  clearCart: () => void;
  isEmpty: boolean;
  cartTotal: number;
}

const Header = ({
  cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  isEmpty,
  cartTotal,
}: HeaderProps) => {
  return (
    <header>
      <header className=" header">
        <div className="container-xl">
          <div className="row justify-content-center justify-content-md-between">
            <div className="col-8 col-md-3">
              <a href="index.html">
                <img
                  className="img-fluid"
                  src="./img/logo.png"
                  alt="imagen logo"
                />
              </a>
            </div>
            <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
              <div className="carrito">
                <img
                  className="img-fluid"
                  src="./img/cart.svg"
                  alt="imagen carrito"
                />

                <div id="carrito" className="bg-white p-3">
                  {/* Comprobar si el carrito está vacío */}
                  {isEmpty ? ( // si el carrito está vacío, mostramos el mensaje
                    <p className="text-center">El carrito está vacío</p>
                  ) : (
                    <>
                      // si el carrito no está vacío, mostramos la tabla
                      <table className="w-100 table">
                        <thead>
                          <tr>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* Iteración del carrito para mostrar cada elemento */}
                          {cart.map((juguete) => (
                            <tr key={juguete.id}>
                              <td>
                                <img
                                  className="img-fluid"
                                  src={`/img/${juguete.image}.png`}
                                  alt={`imagen ${juguete.name}`}
                                />
                              </td>
                              <td>{juguete.name}</td>
                              <td className="fw-bold">${juguete.price}</td>
                              <td className="flex align-items-start gap-4">
                                <button
                                  type="button"
                                  className="btn btn-dark"
                                  onClick={() => decreaseQuantity(juguete.id)}
                                >
                                  -
                                </button>
                                {juguete.quantity}
                                <button
                                  type="button"
                                  className="btn btn-dark"
                                  onClick={() => increaseQuantity(juguete.id)}
                                >
                                  +
                                </button>
                              </td>
                              <td>
                                <button
                                  className="btn btn-danger"
                                  type="button"
                                  onClick={() => removeFromCart(juguete.id)}
                                >
                                  X
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      {/* Total */}
                      <p className="text-end">
                        Total a pagar:{" "}
                        <span className="fw-bold">${cartTotal}</span>
                      </p>
                    </>
                  )}
                  <button
                    className="btn btn-dark w-100 mt-3 p-2"
                    onClick={clearCart}
                  >
                    Vaciar Carrito
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </header>
  );
};

export default Header;
