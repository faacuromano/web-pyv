export const metadata = {
  title: {
    default: "Acción Política",
  },
};

export default function RootLayout({ children }) {
  return (
    <div>
        {children}
        <link rel="canonical" href='http://localhost:3000/nosotros/accion-politica'></link>
    </div>
  );
}
