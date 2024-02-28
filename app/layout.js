import { Inter,Poppins } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

const nico = localFont({ 
  src: [{ 
    path: '../public/static-fonts/NicoMoji-Regular (1).ttf',
    
  
  } ],
  variable:"--font-nico"

})

const poppins = Poppins({ 
  subsets:['latin'],
  weight:['400','700'],
  display:"swap",
  variable:"--font-poppins"
 }); 


export const metadata = {
  title: "Doctor Booking Appointment",
  description: "Book your doctor with the best website of booking ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${nico.variable} ${poppins.variable}`} >
      <body className={`${inter.className} min-h-screen ` } >
        
        <Header  />
        {children}
        <Toaster  />
        <Footer />
      </body>
    </html>
  );
}
