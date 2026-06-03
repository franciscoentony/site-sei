import { Outlet } from 'react-router-dom';
import Footer from '../../publics/Base/Footer'
import LateralBar from './LateralBar';
import Header from './Header';
import { useState } from 'react';

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#f4f6f5] font-sans antialiased text-neutral-800 relative">
      
      {/* SIDEBAR LATERAL - Identidade Visual Escura */}
      <LateralBar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* CONTEÚDO PRINCIPAL (Main Content) */}
      <main className="flex-1 lg:ml-64 min-h-screen flex flex-col w-full overflow-x-hidden">
        
        {/* BARRA DE TOPO (Navbar) */}
        <Header 
          variable={searchQuery} 
          functionVar={setSearchQuery} 
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
        />

        {/* CONTAINER DO DASHBOARD */}
        <Outlet context={{ searchQuery }}/>

        {/* FOOTER INSTITUCIONAL */}
        <Footer />
      </main>
    </div>
  );
}