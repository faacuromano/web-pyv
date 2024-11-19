export const metadata = {
  title: {
    default: "Proponemos",
  },
};

export default function RootLayout({ children }) {
  return (
    <div>
        {children}
        <link rel="canonical" href='https://www.principiosyvaloressantafe.com.ar/nosotros/proponemos'></link>
    </div>
  );
}
