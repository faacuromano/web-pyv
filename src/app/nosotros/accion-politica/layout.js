export const metadata = {
  title: "Acción Política",
  description: "La acción política es una acción colectiva; es menester terminar con la mentalidad individualista. En este sentido es necesario acostumbrarse a trabajar por equipos, sin sentido personal e individualista, trabajando uno para todos y todos para uno.",
};

export default function RootLayout({ children }) {
  return (
    <div>
        {children}
        <link rel="canonical" href='https://www.principiosyvaloressantafe.com.ar/nosotros/accion-politica'></link>
    </div>
  );
}
