import React, { useState } from 'react';
import { INITIAL_EVENTS } from '../../components/privates/Dados';
import CardInst from "../../components/CardInst"; // Importando o seu componente reutilizável
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarTimes, faPlus } from '@fortawesome/free-solid-svg-icons';

export default function MeusEventos() {
  const [events] = useState(INITIAL_EVENTS);
  const [filtroAtual, setFiltroAtual] = useState('Todos');

  // Filtra os eventos com base na aba selecionada (Todos, Em andamento, Futuros, Concluídos)
  const eventosFiltrados = (events || []).filter(event => {
    if (filtroAtual === 'Todos') return true;
    return event.status === filtroAtual;
  });

  // Lista de abas para o filtro superior
  const abas = ['Todos', 'Em andamento', 'Concluídos', 'Futuros',];

  return (
    <div className="p-8 flex-1 max-w-7xl w-full mx-auto space-y-8 select-none">
      
      {/* Cabeçalho da Página */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
            Meus Eventos
          </h1>
          <p className="text-neutral-500 mt-1">
            Gerencie suas inscrições, presenças e certificados em eventos institucionais.
          </p>
        </div>
        <button className="flex items-center gap-2 bg-[#102613] hover:bg-emerald-950 text-white px-5 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer self-start md:self-center">
          <FontAwesomeIcon icon={faPlus}/>
          Inscrever-se em Evento
        </button>
      </div>

      {/* BARRA DE FILTROS (Abas Estilizadas) */}
      <div className="flex border-b border-neutral-200 gap-2 overflow-x-auto pb-px">
        {abas.map((aba) => (
          <button
            key={aba}
            onClick={() => setFiltroAtual(aba)}
            className={`px-5 py-3 text-sm font-bold border-b-2 transition-all duration-300 ease-in-out whitespace-nowrap cursor-pointer rounded-lg ${
              filtroAtual === aba
                ? 'border-[#44ba6a] text-[#102613] bg-[#44ba6a]/15'
                : 'border-transparent text-neutral-400 hover:text-neutral-600 hover:border-neutral-300 hover:bg-neutral-300/30'
            }`}
          >
            {aba}
          </button>
        ))}
      </div>

      {/* GRID DE EVENTOS REUTILIZANDO O CARDINST */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventosFiltrados.length > 0 ? (
          eventosFiltrados.map((event) => (
            <CardInst key={event.id} title={event.title} event={event} date={event.date} description={event.description} status={event.status}/>
          ))
        ) : (
          /* Estado Vazio amigável caso a aba não tenha registros */
          <div className="col-span-full bg-white text-center py-16 rounded-2xl border border-dashed border-neutral-200 text-neutral-400 font-medium">
            <FontAwesomeIcon icon={faCalendarTimes} className="text-4xl mb-3 block text-neutral-300"/>
            Nenhum evento encontrado na categoria "{filtroAtual}".
          </div>
        )}
      </div>

    </div>
  );
} 