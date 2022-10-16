import '../styles/globals.css';
import dynamic from 'next/dynamic';
import MainLayout from '../layouts/MainLayout';
function MyApp({ Component, pageProps }) {

  const DynamicNavbar = dynamic(() => import('../components/main/Navbar'), {
    ssr: false,
  })
  const Layout = Component.Layout || EmptyLayout;

  return (
  <div>
    <DynamicNavbar/>

    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>

  </div>
)}

const EmptyLayout = ({children}) =>{
  <>
  {children}
  </>
}

export default MyApp
