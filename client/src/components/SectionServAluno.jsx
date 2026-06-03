import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool } from "@fortawesome/free-solid-svg-icons";

export default function SectionServAluno() {
  const [sectionServAluno, setSectionServAluno] = useState("");

  const ServAluno = [
    "Servidor",
    "Aluno",
  ];

  return (
    <section className="flex flex-col min-w-full max-w-lg">
      <label htmlFor="ServAluno" className="text-start text-lg font-semibold">
        É servidor ou aluno do IFRN?
      </label>

      <div className="relative flex items-center bg-gray-100 border border-gray-300 rounded-xl p-3 w-full">
        <FontAwesomeIcon
          icon={faSchool}
          className="text-lg mr-3 text-stone-400"  
        />

        <select
          id="ServAluno"
          value={sectionServAluno}
          onChange={(e) => setSectionServAluno(e.target.value)}
          className="flex-1 bg-transparent outline-none text-gray-700 appearance-none"
        >
        <option value="">Selecione</option>
          {ServAluno.map((ServAluno, index) => (
            <option key={index} value={ServAluno}>
              {ServAluno}
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

