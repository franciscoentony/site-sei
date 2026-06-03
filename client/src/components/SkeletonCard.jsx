import React from 'react';

export default function SkeletonCard() {
  return (
    <div className="bg-[#102613] rounded-3xl overflow-hidden border border-emerald-950 shadow-md animate-pulse flex flex-col justify-between h-full">
      
      {/* Bloco de Conteúdo Superior */}
      <div className="p-5 space-y-4">
        
        {/* Placeholder da Imagem (Exata altura h-40 e arredondamento rounded-xl do original) */}
        <div className="w-full h-40 bg-emerald-900/20 rounded-xl border border-emerald-900/10"></div>

        {/* Info Básica (Simulando Data e Localização) */}
        <div className="space-y-2">
          <div className="flex items-center gap-4">
            {/* Ícone + Data */}
            <div className="h-3 bg-emerald-800/30 rounded-md w-16"></div>
            {/* Ícone + Cidade */}
            <div className="h-3 bg-emerald-800/30 rounded-md w-24"></div>
          </div>

          {/* Título do Evento (Simulando a tipografia text-lg) */}
          <div className="h-5 bg-emerald-800/50 rounded-md w-11/12 mt-1"></div>

          {/* Descrição (Simulando as 3 linhas do line-clamp-3 original) */}
          <div className="space-y-2 pt-1">
            <div className="h-3 bg-emerald-900/30 rounded-md w-full"></div>
            <div className="h-3 bg-emerald-900/30 rounded-md w-11/12"></div>
            <div className="h-3 bg-emerald-900/30 rounded-md w-4/5"></div>
          </div>
        </div>

      </div>

      {/* Footer do Card (Status Tracker Visual) */}
      <div className="px-5 pb-5 pt-2 border-t border-emerald-950/40 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          {/* Texto "Status institucional" */}
          <div className="h-3 bg-emerald-900/20 rounded-md w-28"></div>
          {/* Badge do Status (Em andamento/Concluído/Futuro) */}
          <div className="h-4 bg-emerald-800/40 rounded-md w-20"></div>
        </div>
        
        {/* Tracker da Barra de Progresso */}
        <div className="w-full h-1 bg-emerald-950 rounded-full">
          <div className="h-full bg-emerald-700/30 rounded-full w-1/3"></div>
        </div>
      </div>

    </div>
  );
}