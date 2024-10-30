// Definimos la interfaz para cada juguete
export interface Juguete {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
  }
  
  // Nueva interfaz extendida para carrito
  export interface JugueteEnCarrito extends Juguete {
    quantity: number;
  }