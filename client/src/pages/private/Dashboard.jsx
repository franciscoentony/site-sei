import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { INITIAL_EVENTS } from "../../components/privates/Dados";
import CardInst from "../../components/CardInst";
import CardMetrica from "../../components/privates/CardMetrica";
import GraficoInscricoes from "../../components/privates/GraficosIncricoes";
import GraficoStatus from "../../components/privates/GraficoStatus";
import { faAward, faCalendar, faChevronRight, faFolderOpen, faTasks, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CardSkeleton from '../../components/SkeletonCard';

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const [hoveredDataPoint, setHoveredDataPoint] = useState(null);

  const context = useOutletContext();
  const searchQuery = context?.searchQuery || "";

  // Filtragem simples por pesquisa
  const filteredEvents = (events || []).filter((event) => {
    const title = event?.title?.toLowerCase() || "";
    const description = event?.description?.toLowerCase() || "";
    const search = searchQuery?.toLowerCase() || "";

    return title.includes(search) || description.includes(search);
  });
  const metricas = [
    {
      icon: faUserGroup,
      value: "362",
      label: "Participantes",
      percentage: "+12%",
      trendIcon: "fas fa-arrow-trend-up",
      trendClass: "text-[#44ba6a] bg-emerald-50",
      chartData: [40, 55, 45, 60, 75, 90, 85, 100],
    },
    {
      icon: faCalendar,
      value: "13",
      label: "Eventos",
      percentage: "+4%",
      trendIcon: "fas fa-arrow-trend-up",
      trendClass: "text-[#44ba6a] bg-emerald-50",
      chartData: [30, 45, 60, 40, 50, 70, 85, 95],
    },
    {
      icon: faTasks,
      value: "45",
      label: "Atividades",
      percentage: "0%",
      trendIcon: "fas fa-minus",
      trendClass: "text-amber-600 bg-amber-50", // Estilo amber para estabilidade
      chartData: [60, 60, 65, 55, 70, 70, 65, 80],
    },
    {
      icon: faAward,
      value: "211",
      label: "Certificados",
      percentage: "+18%",
      trendIcon: "fas fa-arrow-trend-up",
      trendClass: "text-[#44ba6a] bg-emerald-50",
      chartData: [20, 35, 50, 45, 65, 80, 75, 100],
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setEvents(INITIAL_EVENTS);
      setIsLoading(false);
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="p-8 flex-1 max-w-7xl w-full mx-auto space-y-8">
      {/* Saudação e Header da Seção */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
            Visão Geral do Dashboard
          </h1>
          <p className="text-neutral-500 mt-1">
            Bem-vindo de volta! Aqui está o resumo institucional dos seus
            eventos.
          </p>
        </div>
        <div className="text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1.5 rounded-full inline-flex items-center gap-2 self-start md:self-center select-none">
          <span className="w-2 h-2 rounded-full bg-[#44ba6a] animate-pulse"></span>{" "}
          Sistema Online (IFRN CANG)
        </div>
      </div>

      {/* GRID DE METRICAS (Estilo Exato das Imagens) */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metricas.map((metrica, index) => (
          <CardMetrica
            key={index}
            icon={metrica.icon}
            value={metrica.value}
            label={metrica.label}
            percentage={metrica.percentage}
            trendIcon={metrica.trendIcon}
            trendClass={metrica.trendClass}
            chartData={metrica.chartData}
          />
        ))}
      </section>

      {/* SECÇÃO DOS GRÁFICOS INTERATIVOS COMPLEXOS (Fidelidade ao mock da imagem) */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Gráfico 1: Inscrições por Mês (Ocupa 2 colunas) */}
        <GraficoInscricoes />

        {/* Gráfico 2: Status de Eventos (Ocupa 1 coluna) */}
        <GraficoStatus />
      </section>

      {/* ÚLTIMOS CADASTRADOS (Listagem Reativa com Estilo Original) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">
            Últimos Cadastrados
          </h2>
          <button className="text-sm font-bold text-[#102613] hover:text-[#44ba6a] transition-colors flex items-center gap-1.5 group">
            Ver todos{" "}
            <FontAwesomeIcon icon={faChevronRight} className="text-xs group-hover:translate-x-0.5 transition-transform"/>
          </button>
        </div>

        {/* Grid dos Cards Institucionais Originais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            // 1ª Condição: Se estiver carregando, renderiza 3 skeletons na tela
            Array.from({ length: 3 }).map((_, index) => (
              <CardSkeleton key={index} />
            ))
          ) : filteredEvents.length > 0 ? (
            // 2ª Condição: Se terminou de carregar e tem dados, renderiza os cards reais
            filteredEvents.map((event) => (
              <CardInst
                key={event.id}
                date={event.date}
                title={event.title}
                description={event.description}
                status={event.status}
              />
            ))
          ) : (
            // 3ª Condição: Terminou de carregar mas a pesquisa não retornou nada (Empty State)
            <div className="col-span-full bg-white text-center py-12 rounded-2xl border border-dashed border-neutral-300 text-neutral-400 font-medium flex justify-center items-center gap-2">
              <FontAwesomeIcon icon={faFolderOpen} className="text-md block text-neutral-300"/>
              Nenhum evento encontrado para "{searchQuery}"
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
