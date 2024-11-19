export const metadata = {
  title: {
    default: "Política y Actualidad",
  },
};

export default function RootLayout({ children }) {
  return (
    <div>
        {children}
        <link rel="canonical" href='https://www.principiosyvaloressantafe.com.ar/nosotros/politica-y-actualidad'></link>
    </div>
  );
}
