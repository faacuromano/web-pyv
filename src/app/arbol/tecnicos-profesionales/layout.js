export const metadata = {
  title: {
    default: "Rama Tecnicos y Profesionales",
  },
};

export default function RootLayout({ children }) {
  return (
    <div>
        {children}
        <link rel="canonical" href="https://www.principiosyvaloressantafe.com.ar/arbol/tecnicos-profesionales"></link>
    </div>
  );
}
