export default function GraficoStatus({
  title = "Status de Eventos",
  description = "Divisão em tempo real do estado atual das atividades e eventos.",
  // Array de dados dinâmico mapeando as duas partes empilhadas de cada barra vertical
  data = [
    { 
      label: "Em andamento", 
      primaryHeight: "65%", 
      secondaryHeight: "15%", 
      secondaryColor: "bg-[#102613] group-hover:brightness-110" 
    },
    { 
      label: "Concluídos", 
      primaryHeight: "40%", 
      secondaryHeight: "45%", 
      secondaryColor: "bg-[#102613] group-hover:brightness-110" 
    },
    { 
      label: "Futuros", 
      primaryHeight: "30%", 
      secondaryHeight: "60%", 
      secondaryColor: "bg-neutral-400 group-hover:brightness-90" 
    }
  ],
  // Lista de legendas dinâmicas mapeadas na base do componente
  legends = [
    { colorClass: "bg-[#44ba6a]", text: "Ativo" },
    { colorClass: "bg-[#102613]", text: "Validado" },
    { colorClass: "bg-neutral-400", text: "Planeado" }
  ],
  className = "" // Permite customizar o comportamento de grid layouts externamente
}) {
  return (
    <div className={`bg-white p-6 rounded-3xl border border-neutral-100 shadow-sm flex flex-col justify-between ${className}`}>
      <div>
        <h3 className="text-xl font-bold text-neutral-900 mb-2">
          {title}
        </h3>
        <p className="text-xs text-neutral-400 mb-6">
          {description}
        </p>

        {/* Barras Verticais Agrupadas em Grid Dinâmico */}
        <div className="h-48 flex items-end justify-around gap-4 px-2 relative border-b border-neutral-100">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center flex-1 h-full justify-end group">
              {/* Parte Superior (Verde Padrão) */}
              <div
                className="w-full bg-[#44ba6a] rounded-t-lg transition-all duration-300 group-hover:brightness-95 shadow-sm"
                style={{ height: item.primaryHeight }}
              ></div>
              
              {/* Parte Inferior Empilhada (Cor customizada via objeto de dados) */}
              <div
                className={`w-full transition-all duration-300 ${item.secondaryColor}`}
                style={{ height: item.secondaryHeight }}
              ></div>
              
              <span className="text-[11px] text-neutral-500 font-medium mt-2 truncate max-w-full">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Legendas customizadas */}
        <div className={`grid gap-1 text-[10px] font-bold text-neutral-500 mt-4 text-center`} style={{ gridTemplateColumns: `repeat(${legends.length}, minmax(0, 1fr))` }}>
          {legends.map((legend, index) => (
            <div key={index} className="flex items-center gap-1 justify-center">
              <span className={`w-2 h-2 rounded-sm ${legend.colorClass}`}></span>{" "}
              {legend.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}