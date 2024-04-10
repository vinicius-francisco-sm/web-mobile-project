import "@/styles/globals.css";
import type { AppProps } from "next/app";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/components/Header/Header.css'
import { Ysabeau_Infant } from "next/font/google";

const infant = Ysabeau_Infant({
  subsets: ['latin'],
  weight: ['500','700']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={infant.className}>
      <Component {...pageProps} />;
    </div>
  )
}
