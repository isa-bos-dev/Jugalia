import Header from "./components/Header";
import Footer from "./components/Footer";
import JugueteCard from "./components/JugueteCard";
import { useCart } from "./hooks/useCart";

function App() {
  const {
    data,
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    isEmpty,
    cartTotal,
  } = useCart();

  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        clearCart={clearCart}
        isEmpty={isEmpty}
        cartTotal={cartTotal}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
          {data.map((juguete) => (
            <JugueteCard
              key={juguete.id}
              juguete={juguete}
              addToCart={addToCart}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
