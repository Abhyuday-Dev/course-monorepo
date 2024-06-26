import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import AppBar from "./components/AppBar";
import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps }: AppProps) {
  return  <SessionProvider session={pageProps.session}>
    
    <RecoilRoot>
    <AppBar />
    <Component {...pageProps} />
    </RecoilRoot>
  </SessionProvider>
}
