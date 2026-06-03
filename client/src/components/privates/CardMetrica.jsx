import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CardMetrica({ 
  icon, 
  value, 
  label, 
  percentage, 
  trendIcon, 
  trendClass = "text-[#44ba6a] bg-emerald-50", // Estilo verde padrão para subidas
  chartData = [] 
}) {
  return (
    <div className="bg-white p-6 rounded-3xl border border-neutral-100 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_25px_-2px_rgba(0,0,0,0.08)] transition-all flex flex-col justify-between group">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          {/* Ícone Dinâmico */}
          <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-[#499954]">
            <FontAwesomeIcon icon={icon}/>
          </div>
          <div>
            <span className="block text-4xl font-extrabold text-neutral-900 tracking-tight">
              {value}
            </span>
            <span className="text-neutral-500 font-medium text-sm">
              {label}
            </span>
          </div>
        </div>
        
        {/* Badge de Tendência (com cor customizável via prop) */}
        <span className={`text-sm font-bold flex items-center gap-1 px-2 py-0.5 rounded-lg ${trendClass}`}>
          <FontAwesomeIcon icon={trendIcon}/> {percentage}
        </span>
      </div>

      {/* Mini gráfico estético baseado no array de dados */}
      {chartData && chartData.length > 0 && (
        <div className="mt-4 pt-4 border-t border-neutral-100 flex items-end h-8 gap-1">
          {chartData.map((h, i) => (
            <div
              key={i}
              style={{ height: `${h}%` }}
              className="flex-1 bg-emerald-100 group-hover:bg-[#44ba6a]/40 rounded-sm transition-colors duration-300"
            ></div>
          ))}
        </div>
      )}
    </div>
  );
}