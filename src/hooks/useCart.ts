import { useState, useEffect, useMemo } from "react";
// Importamos la base de datos de juguetes
import { db_juguetes } from "../data/db_juguetes";
// Importamos la interfaz Juguete para tipar el juguete
import type {Juguete, JugueteEnCarrito } from "../types";

export const useCart = () => {

    const initialCart = () : JugueteEnCarrito[] => {
        const localStorageCart = localStorage.getItem("cart");
        return localStorageCart ? JSON.parse(localStorageCart) : [];
      };
    
      // Declaramos el estado con el tipo Juguete[]
      const [data] = useState<Juguete[]>(db_juguetes);
    
      // Definimos el tipo del carrito como un array de JugueteEnCarrito
      const [cart, setCart] = useState<JugueteEnCarrito[]>(initialCart);
    
      // Unidad máxima de un mismo producto en el carrito
      const MAX_ITEMS = 5;
    
      // Unidad minima de un mismo producto en el carrito
      const MIN_ITEMS = 0;
    
      // useEffect para cargar el carrito desde LocalStorage
      useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
      }, [cart]);
    
      // Función para añadir un elemento al carrito
      function addToCart(item: Juguete) {
        // Buscamos si el elemento ya existe en el carrito
        const itemExist = cart.findIndex((juguete) => juguete.id === item.id);
        if (itemExist >= 0) {
          if (cart[itemExist].quantity >= MAX_ITEMS) {
            alert("No puedes añadir más unidades de este producto");
            return;
          }
          // Si el elemento ya existe, creamos una copia del carrito y actualizamos la cantidad
          const updatedCart = [...cart];
          updatedCart[itemExist].quantity++;
          setCart(updatedCart); // Actualizamos el carrito con el nuevo array
        } else {
          // Si el elemento no existe en el carrito, lo añadimos con quantity: 1
          const newItem : JugueteEnCarrito = { ...item, quantity: 1 }
          setCart([...cart, newItem ]);
        }
      }
    
      // Funcion para eliminar un juguete del carrito
      function removeFromCart(id: number) {
        // Filtramos el carrito para eliminar el elemento con el id recibido
        setCart((prevCart) => prevCart.filter((juguete) => juguete.id !== id));
      }
    
      // Funcion para incrementar unidades de un elemento en el carrito
      function increaseQuantity(id: number) {
        // Creamos una copia del carrito y actualizamos la cantidad
        const updatedCart = cart.map((item) => {
          if (item.id === id && item.quantity < MAX_ITEMS) {
            // limitamos las unidades
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
        setCart(updatedCart); // Actualizamos el carrito con el nuevo array
      }
    
      // Funcion para disminuir unidades de un elemento en el carrito
      function decreaseQuantity(id: number) {
        const updatedCart = cart
          .map((item) => {
            if (item.id === id && item.quantity > MIN_ITEMS) {
              return { ...item, quantity: item.quantity - 1 };
            }
            return item;
          })
          .filter((item) => item.quantity > 0); // Eliminar el elemento si la cantidad es 0
        setCart(updatedCart);
      }
    
      // limpiar carrito
      function clearCart() {
        setCart([]);
      }

      // State derivado usando useMemo para evitar cálculos innecesarios
  const isEmpty = useMemo(() => cart.length === 0, [cart]);

  const cartTotal = useMemo(
    () => cart.reduce((total, item) => total + item.quantity * item.price, 0),
    [cart]
  );
    
    return{
        data, cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, isEmpty, cartTotal
    }
}
