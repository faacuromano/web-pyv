export const metadata = {
  title: {
    default: "Rama Femenina",
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
