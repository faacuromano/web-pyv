export const metadata = {
  title: {
    default: "Movimientos Sociales",
  },
};

export default function RootLayout({ children }) {
  return (
    <div>
        {children}
        <link rel="canonical" href="https://principiosyvaloressantafe.com.ar/arbol"></link>

    </div>
  );
}
