export const metadata = {
  title: {
    default: "Actividades",
  },
};

export default function RootLayout({ children }) {
  return (
    <div>
        {children}
        <link rel="canonical" href='https://principiosyvaloressantafe/actividades'></link>

    </div>
  );
}
