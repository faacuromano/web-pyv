import Head from 'next/head';

export default function RootLayout({ children }) {
  return (
    <div>
        <link
          rel="canonical"
          href="https://www.principiosyvaloressantafe.com.ar/tecnicos-profesionales"
        />
      {children}
    </div>
  );
}
