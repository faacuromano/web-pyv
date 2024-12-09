export const metadata = {
  title: "Proponemos",
  description: "La construcción de comunidad, entendida a partir de organizar la capacidad creativa de la misma, y la práctica como marca del desarrollo político, y en su desarrollo, se irá dando la identidad, no sin un sentido comunitario, ante la libertad el deber, la armonía social del conjunto por sobre metas individuales.",
};

export default function RootLayout({ children }) {
  return (
    <div>
        {children}
        <link rel="canonical" href='https://www.principiosyvaloressantafe.com.ar/nosotros/proponemos'></link>
    </div>
  );
}
