export const metadata = {
  title: {
    default: "Política y Actualidad",
  },
};

export default function RootLayout({ children }) {
  return (
    <div>
        {children}
        <link rel="canonical" href='http://localhost:3000/nosotros/politica-y-actualidad'></link>
    </div>
  );
}
