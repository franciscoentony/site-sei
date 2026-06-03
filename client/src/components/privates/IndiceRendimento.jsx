export default function IndiceRendimento({cra}) {
  return (
    <div className="bg-white p-6 rounded-3xl border border-neutral-100 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] text-center relative overflow-hidden">
      <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1">
        Índice de Rendimento
      </h4>
      <div className="text-5xl font-bold text-[#44ba6a] tracking-tight">
        {cra}
      </div>
      <p className="text-xs text-neutral-500 font-semibold mt-2">
        C.R.A Geral do Curso
      </p>

      <div className="w-full h-1.5 bg-neutral-100 rounded-full overflow-hidden mt-4">
        <div className="w-[94%] h-full bg-[#44ba6a] rounded-full"></div>
      </div>
      <div className="text-[10px] text-neutral-400 mt-2 flex justify-between font-medium">
        <span>Integralização</span>
        <span className="font-bold text-neutral-500">78% Concluído</span>
      </div>
    </div>
  );
}
