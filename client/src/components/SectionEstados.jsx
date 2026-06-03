import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";

export default function SectionEstados() {
  const [estadoSelecionado, setEstadoSelecionado] = useState("");

  const estados = [
    "Acre (AC)",
    "Alagoas (AL)",
    "Amapá (AP)",
    "Amazonas (AM)",
    "Bahia (BA)",
    "Ceará (CE)",
    "Distrito Federal (DF)",
    "Espírito Santo (ES)",
    "Goiás (GO)",
    "Maranhão (MA)",
    "Mato Grosso (MT)",
    "Mato Grosso do Sul (MS)",
    "Minas Gerais (MG)",
    "Pará (PA)",
    "Paraíba (PB)",
    "Paraná (PR)",
    "Pernambuco (PE)",
    "Piauí (PI)",
    "Rio de Janeiro (RJ)",
    "Rio Grande do Norte (RN)",
    "Rio Grande do Sul (RS)",
    "Rondônia (RO)",
    "Roraima (RR)",
    "Santa Catarina (SC)",
    "São Paulo (SP)",
    "Sergipe (SE)",
    "Tocantins (TO)",
  ];

  return (
    <section className="flex flex-col min-w-full max-w-lg">
      <label htmlFor="estado" className="text-start text-lg font-semibold">
        Estado:
      </label>

      <div className="relative flex items-center bg-gray-100 border border-gray-300 rounded-xl p-3 w-full">
        <FontAwesomeIcon
          icon={faLocationCrosshairs}
          className="text-lg mr-3 text-stone-400"  
        />

        <select
          id="estado"
          value={estadoSelecionado}
          onChange={(e) => setEstadoSelecionado(e.target.value)}
          className="flex-1 bg-transparent outline-none text-gray-700 appearance-none"
        >
          <option value="">Selecione</option>
          {estados.map((estado, index) => (
            <option key={index} value={estado}>
              {estado}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
          <svg
            className="w-4 h-4 text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
