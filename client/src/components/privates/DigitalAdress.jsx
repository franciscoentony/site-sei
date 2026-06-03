import { faQrcode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

export default function DigitalAdress({periodo}) {
  return (
    <div className="bg-[#102613] p-6 rounded-3xl text-white shadow-xl shadow-emerald-950/10 flex flex-col items-center text-center relative overflow-hidden">
            {/* Círculo com blur decorativo de fundo */}
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-emerald-900/40 rounded-full blur-xl pointer-events-none"></div>

            <div className="w-12 h-12 rounded-xl bg-[#44ba6a] text-white flex items-center justify-center text-xl shadow-md mb-4">
              <FontAwesomeIcon icon={faQrcode} />
            </div>

            <h3 className="text-lg font-bold tracking-tight">
              Identidade Estudantil
            </h3>
            <p className="text-emerald-400/80 text-xs mt-0.5">
              {periodo} • TSI
            </p>

            {/* Box simulador do QR Code */}
            <div className="my-5 p-3 bg-white rounded-2xl shadow-inner">
              <div className="w-32 h-32 bg-neutral-50 border border-neutral-200 rounded-xl flex items-center justify-center relative">
                <div className="absolute inset-2 border-2 border-dashed border-neutral-300 rounded-lg flex items-center justify-center flex-col gap-1.5">
                  <FontAwesomeIcon
                    icon={faQrcode}
                    className="text-neutral-400"
                  />
                  <span className="text-[9px] font-mono font-bold text-neutral-400 tracking-widest">
                    VALIDADO
                  </span>
                </div>
              </div>
            </div>

            <div className="text-[11px] font-medium text-emerald-300 bg-emerald-950/60 px-4 py-2 rounded-xl border border-emerald-900/40 w-full flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#44ba6a] animate-pulse"></span>
              Acesso Liberado para Catracas
            </div>
          </div>
  )
}
