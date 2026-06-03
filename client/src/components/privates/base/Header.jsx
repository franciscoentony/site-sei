import { faBars, faBell, faChevronDown, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header({variable, functionVar, onToggleSidebar}) {
  
  return (
    <header className="bg-white border-b border-neutral-200/80 px-4 md:px-8 py-4 flex items-center justify-between sticky top-0 z-40 shadow-sm gap-2">
      {/* Esquerda: Hamburger para Mobile + Barra de Pesquisa */}
      <div className="flex items-center flex-1 gap-2 md:gap-4">
        <button 
          onClick={onToggleSidebar}
          className="lg:hidden p-2 text-neutral-500 hover:text-neutral-800 cursor-pointer flex items-center justify-center shrink-0"
        >
          <FontAwesomeIcon icon={faBars} className="text-xl"/>
        </button>

        <div className="relative w-full max-w-[160px] sm:max-w-xs md:w-96">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-neutral-400">
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
          </span>
          <input
            type="text"
            placeholder="Busque por eventos..."
            value={variable}
            onChange={(e) => functionVar(e.target.value)}
            className="w-full pl-10 pr-3 py-2 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-[#44ba6a]/30 focus:border-[#44ba6a] text-xs sm:text-sm transition-all placeholder-neutral-400"
          />
        </div>
      </div>

      {/* Perfil e Notificações */}
      <div className="flex items-center gap-2 sm:gap-5 shrink-0">
        <button className="relative p-2 text-neutral-500 hover:text-neutral-800 duration-300 ease-in-out transition-colors cursor-pointer">
          <FontAwesomeIcon icon={faBell} className="text-lg sm:text-xl"/>
          <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full border border-white"></span>
        </button>
        <div className="h-8 w-px bg-neutral-200"></div>
        <div className="flex items-center gap-2 sm:gap-3 cursor-pointer group">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-100 flex items-center justify-center text-[#499954] font-bold border border-emerald-200 group-hover:scale-105 transition-transform">
            <FontAwesomeIcon icon={faUser} className="text-sm sm:text-base"/>
          </div>
          <div className="text-left hidden md:block">
            <p className="text-sm font-semibold text-neutral-800 leading-none">
              Usuário IFRN
            </p>
            <p className="text-xs text-neutral-400 mt-0.5">
              Aluno / Tecnologia
            </p>
          </div>
          <FontAwesomeIcon icon={faChevronDown} className="text-[10px] sm:text-xs text-neutral-400 group-hover:text-neutral-600 transition-colors ml-0.5"/>
        </div>
      </div>
    </header>
  );
}
