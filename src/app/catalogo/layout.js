export const metadata = {
  title: {
    default: "Catalogo",
  },
};

export default function RootLayout({ children }) {
  return (
    <div>
        {children}
        <link rel="canonical" href='https://principiosyvaloressantafe/catalogo'></link>

    </div>
  );
}
