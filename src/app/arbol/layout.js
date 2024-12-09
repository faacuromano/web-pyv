export const metadata = {
  title: "Arbol - Principios y Valores",
  Description: "Conoce nuestro arbol Peronista interactivo, donde podras ver y conocer las ramas del movimiento integradas en un diseño único. Para ingresar a las ramas haz click en ellas."
};

export default function RootLayout({ children }) {
  return (
    <div>
        {children}
        <link rel="canonical" href='https://www.principiosyvaloressantafe.com.ar/arbol'></link>

    </div>
  );
}
