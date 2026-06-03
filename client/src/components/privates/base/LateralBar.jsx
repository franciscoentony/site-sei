import { faCalendar, faUser } from '@fortawesome/free-regular-svg-icons';
import { faCheckDouble, faDashboard, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";

export default function LateralBar({ isOpen, onClose }) {
  const handleLinkClick = () => {
    if (onClose) onClose();
  };

  return (
    <>
      {/* Overlay Backdrop for Mobile */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      <aside className={`w-64 bg-[#102613] text-white flex flex-col justify-between fixed h-full z-50 shadow-xl transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        <div>
          {/* Logo SEI */}
          <div className="p-6 border-b border-emerald-900/40 flex items-center gap-3">
            <div className="bg-[#44ba6a] text-white p-1.5 rounded-lg flex items-center justify-center shadow-md shadow-emerald-900/50">
              <FontAwesomeIcon icon={faCheckDouble} className="text-lg"/>
            </div>
            <Link to='/' className="text-2xl font-black tracking-wider text-white" onClick={handleLinkClick}>SEI</Link>
          </div>

          {/* Links de Navegação */}
          <nav className="mt-6 px-3 space-y-1">
            <NavLink
              to="/dashboard"
              end
              onClick={handleLinkClick}
              className={({ isActive }) =>
                `w-full flex items-center gap-4 px-4 py-3.5 rounded-xl text-left font-medium text-lg transition-all ${
                  isActive
                    ? 'bg-[#44ba6a] text-white shadow-lg shadow-emerald-800/30 font-bold'
                    : 'text-neutral-400 hover:bg-emerald-500/20 duration-300 ease-in-out hover:text-white'
                }`
              }
            >
              <FontAwesomeIcon icon={faDashboard}/>
              Dashboard
            </NavLink>
            <NavLink
              to="/dashboard/perfil"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                `w-full flex items-center gap-4 px-4 py-3.5 rounded-xl text-left font-medium text-lg transition-all duration-300 ease-in-out ${
                  isActive
                    ? 'bg-[#44ba6a] text-white shadow-lg shadow-emerald-800/30 font-bold'
                    : 'text-neutral-400 hover:bg-emerald-500/20 hover:text-white'
                }`
              }
            >
              <FontAwesomeIcon icon={faUser}/>
              Meu Perfil
            </NavLink>

            <NavLink
              to="/dashboard/eventos"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                `w-full flex items-center gap-4 px-4 py-3.5 rounded-xl text-left font-medium text-lg transition-all duration-300 ease-in-out ${
                  isActive
                    ? 'bg-[#44ba6a] text-white shadow-lg shadow-emerald-800/30 font-bold'
                    : 'text-neutral-400 hover:bg-emerald-500/20 hover:text-white'
                }`
              }
            >
              <FontAwesomeIcon icon={faCalendar}/>
              Meus Eventos
            </NavLink>
          </nav>
        </div>

        {/* Botão de Sair da Conta */}
        <div className="p-4 border-t border-emerald-900/40">
          <button
            onClick={() => {
              handleLinkClick();
              alert('Saindo da conta...');
            }}
            className="w-full flex items-center gap-4 px-4 py-3.5 rounded-xl text-left font-medium text-lg text-rose-400 hover:bg-rose-400/30 duration-300 ease-in-out hover:text-rose-300 transition-all cursor-pointer"
          >
            <FontAwesomeIcon icon={faSignOut}/>
            Sair da Conta
          </button>
        </div>
      </aside>
    </>
  );
}
