export const metadata = {
  title: {
    default: "Catalogo",
  },
};

export default function RootLayout({ children }) {
  return (
    <div>
        {children}
    </div>
  );
}
