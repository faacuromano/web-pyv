export const metadata = {
  title: {
    default: "Rama Sindical",
  },
};

export default function RootLayout({ children }) {
  return (
    <div>
        {children}
        <link rel="canonical" href="https://www.principiosyvaloressantafe.com.ar/arbol"></link>

    </div>
  );
}
