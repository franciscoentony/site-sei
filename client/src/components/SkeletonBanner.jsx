import React from 'react';

export default function DestaquesSkeleton() {
  return (
    <div 
      className="min-w-85 h-120 flex rounded-3xl overflow-hidden bg-neutral-200 dark:bg-emerald-950/20 animate-pulse border border-neutral-300/30 dark:border-emerald-900/10 items-center justify-center relative select-none"
    >
      {/* Ícone sutil de imagem no centro para indicar nativamente o tipo de conteúdo que vai carregar */}
      <i className="far fa-image text-neutral-400/40 dark:text-emerald-800/30 text-4xl"></i>
    </div>
  );
}