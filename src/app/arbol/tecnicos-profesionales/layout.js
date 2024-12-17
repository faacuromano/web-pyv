import Head from 'next/head';

export default function RootLayout({ children }) {
  return (
    <div>
      <Head>
        <link
          rel="canonical"
          href="https://www.principiosyvaloressantafe.com.ar/tecnicos-profesionales"
        />
      </Head>
      {children}
    </div>
  );
}
