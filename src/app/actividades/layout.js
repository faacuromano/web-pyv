export const metadata = {
  title: "Actividades",
  description: "Sumate a ver nuestras actividades, a cualquiera de ellas podes acercarte a participar o dar una mano. Todos son siempre bienvenido. Olla popular. Club de lectura. Joranada de Afiliaciones. Charlas. El roperito",
};

export default function RootLayout({ children }) {
  return (
    <div>
        {children}
        <link rel="canonical" href='https://www.principiosyvaloressantafe.com.ar/actividades'></link>

    </div>
  );
}
