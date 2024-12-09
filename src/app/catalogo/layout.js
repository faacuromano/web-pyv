export const metadata = {
  title: "Catalogo",
  description: "Mira los productos que tenemos en el catalogo, todos a precio popular para que puedas elegir lo que mas te gusta. Remeras, Libros, Stickers, y mas!",
};

export default function RootLayout({ children }) {
  return (
    <div>
        {children}
        <link rel="canonical" href='https://www.principiosyvaloressantafe.com.ar/catalogo'></link>

    </div>
  );
}
