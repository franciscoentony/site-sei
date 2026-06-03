import { useState } from 'react';
import CardEventos from "../components/CardEventos";
import Filtros from '../components/Filtros';

export default function Eventos() {
    const [dadosFiltrados, setDadosFiltrados] = useState(null);

    const handleAplicarFiltros = (filtros) => {
    console.log('Filtros aplicados:', filtros);
    // Aqui você faria a lógica de filtragem real (ex: API call, filter array)
    setDadosFiltrados(filtros);
  };

    const handleLimparFiltros = () => {
        console.log('Filtros limpos');
        setDadosFiltrados(null);
    };
    const eventos = [
        {
            "title": "Inovação de tecnologias no desenvolvimento",
            "locale": "IFRN CANG",
            "peaples": 489,
            "banner": "https://picsum.photos/400/600",
            "category": "Entretenimento",
            "date": "29/02/2026",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque repellat rerum veniam molestiae, architecto laudantium fugiat sed quisquam expedita tempora impedit officiis optio non possimus, obcaecati quibusdam voluptate suscipit voluptates!",
        },
        {
            "title": "Google IO Extended Natal -2026",
            "locale": "IFRN CNAT",
            "peaples": 111,
            "banner": "https://picsum.photos/400/700",
            "category": "Tecnologia",
            "date": "13/05/2026",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque repellat rerum veniam molestiae, architecto laudantium fugiat sed quisquam expedita tempora impedit officiis optio non possimus, obcaecati quibusdam voluptate suscipit voluptates!",
        },
        {
            "title": "DunaSec: Primeiro Evento de CyberSecurity do RN",
            "locale": "IFRN PAR",
            "peaples": 29,
            "banner": "https://picsum.photos/400/800",
            "category": "Segurança",
            "date": "01/09/2026",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque repellat rerum veniam molestiae, architecto laudantium fugiat sed quisquam expedita tempora impedit officiis optio non possimus, obcaecati quibusdam voluptate suscipit voluptates!",
        },
    ]

  return (
    <div className="mt-28 md:mt-32 max-w-90/100 w-full mx-auto flex flex-col lg:flex-row items-start justify-center mb-15 gap-6 px-4">
      {/* Listagem de Eventos */}
      <div className="order-2 lg:order-1 flex-1 bg-white rounded-3xl md:rounded-4xl shadow-xl flex flex-col items-center w-full p-6 md:p-10 h-auto overflow-hidden">
        <div className="title w-full text-start flex justify-between mb-2">
          <h1 className="text-3xl md:text-4xl font-bold text-dark-green">Eventos</h1>
        </div>
        <div className="pt-6 md:pt-10 w-full">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventos.map((items, idx) => {
               return (
                   <CardEventos
                     key={idx}
                     title={items.title}
                     description={items.description}
                     locale={items.locale}
                     peaples={items.peaples}
                     banner={items.banner}
                     category={items.category}
                     date={items.date}
                   />
               ) 
            })}
          </div>
        </div>
      </div>

      {/* Barra de Filtros */}
      <div className="order-1 lg:order-2 w-full lg:w-auto shrink-0 flex justify-center">
        <Filtros onFiltrar={handleAplicarFiltros} onLimpar={handleLimparFiltros} />
      </div>
    </div>
  );
}
