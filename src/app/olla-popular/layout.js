export const metadata = {
  title:"La olla",
  description: "Desde Principios y Valores Rosario, queremos invitarte a colaborar, cocinar, difundir, o dar una mano en lo que te sea posible a la olla popular que se realiza todos los JUEVES en PLAZA SARMIENTO con el objetivo de brindar, no solamente un plato de comida, sino una charla, un abrazo, y un espacio de encuentro a quienes hoy lamentablemente no lo tienen. No hay mayor aporte a la comunidad que ayudar a la felicidad de quienes la habitan"
}
export default function RootLayout({ children }) {
  return (
    <div>
        <link rel="canonical" href='https://www.principiosyvaloressantafe.com.ar/olla-popular'></link>
        {children}
    </div>
  );
}
