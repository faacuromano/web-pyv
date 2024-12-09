export const metadata = {
  title: "Contactos",
  description: "Contactate con nosotros para realizar actividades, conocer sobre el partido, afiliarte, o lo que necesites. Siempre es un gratificante y necesario escuchar la palabra de quienes comparten nuestra comunidad "
};

export default function RootLayout({ children }) {
  return (
    <div>
        {children}
        <link rel="canonical" href='https://www.principiosyvaloressantafe.com.ar/contacto'></link>
    </div>
  );
}
