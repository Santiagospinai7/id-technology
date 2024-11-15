// Layout.jsx
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './home/Footer';
import WhatsAppButton from './contact/whatsAppButton'; // Importa el nuevo componente

function Layout() {
  return (
    <main className="page-content bg-gray-50 dark:bg-slate-800 font-effra">
      <NavBar />
      <Outlet />
      <Footer />
      <WhatsAppButton /> {/* Añade el botón de WhatsApp */}
    </main>
  );
}

export default Layout;