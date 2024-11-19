export const metadata = {
  title: {
    default: "Contactos",
  },
};

export default function RootLayout({ children }) {
  return (
    <div>
        {children}
        <link rel="canonical" href='https://principiosyvaloressantafe.com.ar/contacto'></link>
    </div>
  );
}
