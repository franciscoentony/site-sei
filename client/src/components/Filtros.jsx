import { useState } from 'react';

const Filtros = ({ onFiltrar, onLimpar }) => {
  // Estado para armazenar os valores dos campos
  const [titulo, setTitulo] = useState('');
  const [tipo, setTipo] = useState('Todos');
  const [ano, setAno] = useState('');

  // Opções para o select "Tipo"
  const opcoesTipo = [
    { value: 'Todos', label: 'Todos' },
    { value: 'Relatório', label: 'Relatório' },
    { value: 'Artigo', label: 'Artigo' },
    { value: 'Estudo', label: 'Estudo' },
    { value: 'Apresentação', label: 'Apresentação' },
  ];

  // Função para lidar com a submissão do filtro
  const handleFiltrar = () => {
    // Retorna os valores atuais para o componente pai
    if (onFiltrar) {
      onFiltrar({ titulo, tipo, ano });
    }
  };

  // Função para limpar os filtros
  const handleLimpar = () => {
    setTitulo('');
    setTipo('Todos');
    setAno('');
    // Informa o componente pai que os filtros foram limpos
    if (onLimpar) {
      onLimpar();
    }
  };

  return (
    // Contêiner principal com bordas arredondadas e sombra
    <div className="bg-white p-6 rounded-3xl shadow-[0_2px_12px_-1px_rgba(0,0,0,0.1),0_1px_3px_-1px_rgba(0,0,0,0.06)] border border-neutral-100 w-full lg:w-90">
      {/* Título Principal */}
      <h1 className="text-3xl font-bold text-[#1a2f1c] mb-6">Filtros</h1>

      {/* Campo Título */}
      <div className="mb-6">
        <label htmlFor="titulo" className="block text-xl font-medium text-neutral-800 mb-1.5">
          Título
        </label>
        <input
          id="titulo"
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Busque pelo título"
          // Estilização do input com Tailwind
          className="w-full px-4 py-3 text-lg text-neutral-800 placeholder-neutral-400 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-3 focus:ring-[#44ba6a]/30 focus:border-[#44ba6a] transition-colors"
        />
      </div>

      {/* Campo Tipo */}
      <div className="mb-6">
        <label htmlFor="tipo" className="block text-xl font-medium text-neutral-800 mb-1.5">
          Categoria
        </label>
        <div className="relative">
          <select
            id="tipo"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            // Estilização do select com Tailwind (remover aparência nativa)
            className="w-full px-4 py-3 text-lg text-neutral-800 bg-neutral-50 border border-neutral-200 rounded-xl appearance-none focus:ring-3 focus:ring-[#44ba6a]/30 focus:border-[#44ba6a] transition-colors cursor-pointer"
          >
            {opcoesTipo.map((opcao) => (
              <option key={opcao.value} value={opcao.value}>
                {opcao.label}
              </option>
            ))}
          </select>
          {/* Ícone da seta personalizada */}
          <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
            <svg
              className="w-5 h-5 text-neutral-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Campo Ano */}
      <div className="mb-8">
        <label htmlFor="ano" className="block text-xl font-medium text-neutral-800 mb-1.5">
          Ano
        </label>
        <input
          id="ano"
          type="text"
          value={ano}
          onChange={(e) => setAno(e.target.value)}
          placeholder="Busque pelo ano"
          // Estilização do input com Tailwind
          className="w-full px-4 py-3 text-lg text-neutral-800 placeholder-neutral-400 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-3 focus:ring-[#44ba6a]/30 focus:border-[#44ba6a] transition-colors"
        />
      </div>

      {/* Botões de Ação */}
      <div className="space-y-4">
        {/* Botão Filtrar */}
        <button
          type="button"
          onClick={handleFiltrar}
          // Estilização do botão primário (Verde)
          className="w-full py-3 text-xl font-medium text-white bg-[#44ba6a] rounded-xl hover:bg-[#399d59] active:scale-[0.98] transition-all duration-300 focus:ring-4 focus:ring-[#44ba6a]/30 focus:outline-none cursor-pointer"
        >
          Filtrar
        </button>

        {/* Botão Limpar */}
        <button
          type="button"
          onClick={handleLimpar}
          // Estilização do botão secundário (Transparente/Borda)
          className="w-full py-3 text-xl font-medium text-[#1a2f1c] bg-white border border-[#c1ccd5] rounded-xl hover:bg-neutral-50 active:scale-[0.98] transition-all duration-300 focus:ring-4 focus:ring-neutral-200 focus:outline-none cursor-pointer"
        >
          Limpar
        </button>
      </div>
    </div>
  );
};

export default Filtros;