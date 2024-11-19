export const metadata = {
  title: {
    default: "Proponemos",
  },
};

export default function RootLayout({ children }) {
  return (
    <div>
        {children}
        <link rel="canonical" href='https://principiosyvaloressantafe/nosotros/proponemos'></link>
    </div>
  );
}
