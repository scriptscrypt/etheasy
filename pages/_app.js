import '../styles/globals.css';
import dynamic from 'next/dynamic';
import MainLayout from '../layouts/MainLayout';
import { AddressProvider } from '../context/wallet';

function MyApp({ Component, pageProps }) {

  const DynamicNavbar = dynamic(() => import('../components/main/Navbar'), {
    ssr: false,
  })
  const DynamicWallet = dynamic(() => import('../context/wallet'), {
    ssr: false,
  })
  
  const Layout = Component.Layout || EmptyLayout;

  return (
  <div>
    <AddressProvider>

    <DynamicNavbar/>

    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>

    </AddressProvider>
 
  </div>
)}

const EmptyLayout = ({children}) =>{
  <>
  {children}
  </>
}

export default MyApp
