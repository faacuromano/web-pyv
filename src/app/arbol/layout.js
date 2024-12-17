import Head from 'next/head';

export default function RootLayout({ children }) {
  return (
    <div>
      <Head>
        <link
          rel="canonical"
          href="https://www.principiosyvaloressantafe.com.ar/nosotros/arbol"
        />
      </Head>
      {children}
    </div>
  );
}
