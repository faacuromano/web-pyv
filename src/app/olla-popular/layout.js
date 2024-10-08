export const metadata = {
  title: {
    default: "La olla",
  }
};

export default function RootLayout({ children }) {
  return (
    <div>
        {children}
    </div>
  );
}
