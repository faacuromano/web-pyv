export const metadata = {
  title: {
    default: "La olla",
  }};

export default function RootLayout({ children }) {
  return (
    <div>
        <link rel="canonical" href='https://principiosyvaloressantafe.com.ar/olla-popular'></link>
        {children}
    </div>
  );
}
