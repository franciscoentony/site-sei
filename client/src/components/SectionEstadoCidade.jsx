import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCity, faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";

// Base da API do IBGE
const IBGE_BASE = "https://servicodados.ibge.gov.br/api/v1/localidades";

export default function SectionEstadoCidade({ onChange }) {
  // --- Estados do componente
  const [states, setStates] = useState([]); // Lista de Estados [{ id, sigla, nome }]
  const [citiesByState, setCitiesByState] = useState({});
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [loadingStates, setLoadingStates] = useState(false);
  const [loadingCities, setLoadingCities] = useState(false);
  const [error, setError] = useState(null);

  // Carrega os Estados
  useEffect(() => {
    async function loadStates() {
      setLoadingStates(true);
      try {
        const res = await fetch(`${IBGE_BASE}/estados?orderBy=nome`);
        const data = await res.json();
        setStates(data.map((s) => ({ id: s.id, nome: s.nome, sigla: s.sigla })));
      } catch (err) {
        setError("Erro ao carregar estados", err);
      } finally {
        setLoadingStates(false);
      }
    }
    loadStates();
  }, []);

  // --- carrega as cidades quando o estado mudar
  useEffect(() => {
    if (!selectedState) {
      setSelectedCity("");
      return;
    }

    async function loadCities() {
      setLoadingCities(true);
      try {
        const res = await fetch(`${IBGE_BASE}/estados/${selectedState}/municipios?orderBy=nome`);
        const data = await res.json();
        setCitiesByState((prev) => ({
          ...prev,
          [selectedState]: data.map((c) => ({ id: c.id, nome: c.nome })),
        }));
      } catch (err) {
        setError("Erro ao carregar cidades");
      } finally {
        setLoadingCities(false);
      }
    }

    if (!citiesByState[selectedState]) {
      loadCities();
    }
  }, [selectedState, citiesByState]);

  useEffect(() => {
    if (typeof onChange === "function") {
      onChange({ state: selectedState, city: selectedCity });
    }
  }, [selectedState, selectedCity, onChange]);

  const cities = selectedState ? citiesByState[selectedState] || [] : [];

  return (
    <section className="flex flex-col min-w-full max-w-lg gap-5">
      {/* ESTADO */}
      <div className="state flex flex-col items-center">
        <label htmlFor="state-select" className="text-start w-full text-lg font-semibold">
          Estado:
        </label>

        <div className="relative flex items-center bg-gray-100 border border-gray-300 rounded-xl p-3 w-full">
          <FontAwesomeIcon icon={faLocationCrosshairs} className="text-lg mr-3 text-stone-400" />

          <select
            id="state-select"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            disabled={loadingStates}
            className="flex-1 bg-transparent outline-none text-gray-700 appearance-none"
          >
            <option value="">Selecione um estado</option>

            {loadingStates ? (
              <option value="">Carregando estados...</option>
            ) : (
              states.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.nome} ({s.sigla})
                </option>
              ))
            )}
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
      </div>

      {/* CIDADE */}
      <div className="cities">

      {selectedState && (
        <div className="flex flex-col">
          <label htmlFor="city-select" className="text-start text-lg font-semibold">
            Cidade:
          </label>

          <div className="relative flex items-center bg-gray-100 border border-gray-300 rounded-xl p-3 w-full">
            <FontAwesomeIcon icon={faCity} className="text-lg mr-3 text-stone-400" />

            <select
              id="city-select"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              disabled={loadingCities || cities.length === 0}
              className="flex-1 bg-transparent outline-none text-gray-700 appearance-none"
            >
              <option value="">Selecione uma cidade</option>

              {loadingCities ? (
                <option value="">Carregando cidades...</option>
              ) : (
                cities.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.nome}
                  </option>
                ))
              )}
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
        </div>
      )}
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </section>
  );
}