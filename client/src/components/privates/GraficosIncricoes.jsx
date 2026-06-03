import { useState } from "react";

export default function GraficoInscricoes({
  title = "Inscrições por Mês",
  labelPrimary = "Participantes",
  labelSecondary = "Média Anual",
  yAxisValues = [250, 200, 150, 100, 50, 0],
  xAxisLabels = ["Jan", "Mar", "Mai", "Jul", "Set", "Nov", "Dez"],
  // Coordenadas das curvas do SVG (padrão do mock original)
  pathSecondary = "M 0 85 Q 20 60 40 70 T 80 50 T 100 55", 
  pathPrimary = "M 0 90 Q 15 40 30 65 T 50 25 T 75 55 T 100 20",
  // Pontos de dados para a interação do mouse e exibição do tooltip
  dataPoints = [
    { month: "Jan", value: 32, x: 0, y: 90 },
    { month: "Mar", value: 115, x: 25, y: 55 },
    { month: "Jun", value: 230, x: 50, y: 25 },
    { month: "Set", value: 140, x: 75, y: 55 },
    { month: "Dez", value: 248, x: 100, y: 20 },
  ],
  progressWidth = "75%", // Valor da barra de carregamento inferior
  className = "lg:col-span-2" // Permite customizar o tamanho do card no grid externo
}) {
  // Estado isolado do Tooltip de forma que não afeta ou reconstrói o Dashboard inteiro
  const [hoveredPoint, setHoveredPoint] = useState(null);

  return (
    <div className={`bg-white p-6 rounded-3xl border border-neutral-100 shadow-sm flex flex-col justify-between relative ${className}`}>
      <div>
        {/* Cabeçalho do Gráfico */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-neutral-900">
            {title}
          </h3>
          <div className="flex items-center gap-4 text-xs font-semibold text-neutral-500">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 bg-[#44ba6a] rounded-full"></span>{" "}
              {labelPrimary}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 bg-neutral-400 rounded-full"></span>{" "}
              {labelSecondary}
            </span>
          </div>
        </div>

        {/* Área do Gráfico SVG */}
        <div className="relative h-64 w-full mt-6">
          {/* Tooltip Interativo */}
          {hoveredPoint && (
            <div
              className="absolute bg-neutral-800 text-white text-xs px-3 py-2 rounded-lg shadow-xl z-20 pointer-events-none transform -translate-x-1/2 -translate-y-12 transition-all duration-150"
              style={{
                left: `${hoveredPoint.x}%`,
                top: `${hoveredPoint.y}%`,
              }}
            >
              <p className="font-bold">{hoveredPoint.month}</p>
              <p className="text-emerald-300">
                Inscrições: {hoveredPoint.value}
              </p>
            </div>
          )}

          {/* Linhas de Grade (Eixo Y) */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-50">
            {yAxisValues.map((val) => (
              <div
                key={val}
                className="w-full border-b border-neutral-100 flex justify-between text-[10px] text-neutral-400 pb-1"
              >
                <span>{val}</span>
              </div>
            ))}
          </div>

          {/* Curvas Vetoriais */}
          <svg
            className="w-full h-full overflow-visible absolute inset-0 z-10"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {/* Linha Secundária (Média Anual) */}
            <path
              d={pathSecondary}
              fill="none"
              stroke="#a3a3a3"
              strokeWidth="1.5"
            />

            {/* Linha Primária (Participantes) */}
            <path
              d={pathPrimary}
              fill="none"
              stroke="#44ba6a"
              strokeWidth="2.5"
              strokeLinecap="round"
                />
          </svg>

          {/* Áreas Invisíveis de Captura de Mouse (Hover) */}
          <div className="absolute inset-0 z-20 flex justify-between px-2">
            {dataPoints.map((pt, idx) => (
              <div
                key={idx}
                className="h-full w-8 flex flex-col justify-end cursor-pointer group relative"
                onMouseEnter={() => setHoveredPoint(pt)}
                onMouseLeave={() => setHoveredPoint(null)}
              >
                {/* Ponto indicador visual */}
                <div
                  className="absolute w-3 h-3 bg-white border-2 border-[#44ba6a] rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-30"
                  style={{
                    left: "50%",
                    transform: "translateX(-50%)",
                    bottom: `${100 - pt.y}%`,
                    marginBottom: "-6px",
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Labels (Eixo X) */}
        <div className="flex justify-between text-xs text-neutral-400 font-medium px-1 mt-3">
          {xAxisLabels.map((label, idx) => (
            <span key={idx}>{label}</span>
          ))}
        </div>
      </div>

      {/* Barra de Progresso Estética Inferior */}
      <div className="w-full h-1.5 bg-neutral-100 rounded-full overflow-hidden mt-4">
        <div 
          style={{ width: progressWidth }} 
          className="h-full bg-[#44ba6a] rounded-full"
        ></div>
      </div>
    </div>
  );
}