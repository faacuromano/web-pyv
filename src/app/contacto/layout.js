export const metadata = {
  title: "Contactate - Principios y Valores",
  description: "Contactate con nosotros para realizar actividades, conocer sobre el partido, afiliarte, o lo que necesites. "
};

export default function RootLayout({ children }) {
  return (
    <div>
        {children}
        <link rel="canonical" href='https://www.principiosyvaloressantafe.com.ar/contacto'></link>
    </div>
  );
}
