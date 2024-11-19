export const metadata = {
  title: {
    default: "Acción Política",
  },
};

export default function RootLayout({ children }) {
  return (
    <div>
        {children}
        <link rel="canonical" href='https://www.principiosyvaloressantafe.com.ar/nosotros/accion-politica'></link>
    </div>
  );
}
