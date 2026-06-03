import {
  faAddressCard,
  faEdit,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faKey,
  faMobileAlt,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import DigitalAdress from "../../components/privates/DigitalAdress";
import IndiceRendimento from "../../components/privates/IndiceRendimento";

export default function MeuPerfil() {
  // Mock data integrado à sua identidade acadêmica do IFRN Canguaretama
  const [perfil, setPerfil] = useState({
    nome: "Usuário IFRN",
    matricula: "2025101010001",
    curso: "Tecnologia em Sistemas para Internet",
    campus: "IFRN Canguaretama",
    email: "usuario.estudante@escolar.ifrn.edu.br",
    telefone: "(84) 99999-1234",
    cpf: "123.456.789-00",
    cra: "9.4",
    periodo: "5º Período",
    status: "Ativo",
  });

  return (
    <div className="p-8 flex-1 max-w-7xl w-full mx-auto space-y-8">
      {/* Título e Subtítulo da View */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
          Meu Perfil
        </h1>
        <p className="text-neutral-500 mt-1">
          Gerencie suas informações institucionais, acadêmicas e configurações
          de segurança.
        </p>
      </div>

      {/* Grid Principal do Perfil */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* CARD 1: BANNER DE APRESENTAÇÃO (Ocupa as 3 colunas) */}
        <div className="lg:col-span-3 bg-white p-6 rounded-3xl border border-neutral-100 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          {/* Linha decorativa da marca na borda superior */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#44ba6a]"></div>

          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Bloco do Avatar */}
            <div className="w-24 h-24 rounded-full bg-emerald-100 flex items-center justify-center text-[#6bb674] font-black text-3xl border-2 border-emerald-300 relative group">
              <FontAwesomeIcon icon={faUser} />
            </div>

            {/* Informações de Identificação Rápida */}
            <div className="text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center gap-2.5">
                <h2 className="text-2xl font-bold text-neutral-900">
                  {perfil.nome}
                </h2>
                <span className="bg-[#44ba6a]/20 text-[#44ba6a] px-2 py-0.5 rounded-md font-semibold text-[10px] uppercase tracking-wider">
                  {perfil.status}
                </span>
              </div>
              <p className="text-neutral-500 font-medium text-sm mt-1">
                {perfil.curso}
              </p>
              <p className="text-neutral-400 text-xs mt-0.5">
                {perfil.campus} • Matrícula: {perfil.matricula}
              </p>
            </div>
          </div>

          {/* Botão de Ação Principal */}
          <button className="flex items-center gap-2 bg-[#102613] hover:bg-emerald-900 duration-200 ease-in-out text-white px-5 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer">
            <FontAwesomeIcon icon={faEdit} />
            Editar Dados
          </button>
        </div>

        {/* CARD 2: FORMULÁRIO DE INFOS E SEGURANÇA (Ocupa 2 colunas) */}
        <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-neutral-100 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] space-y-6">
          <div>
            <h3 className="text-xl font-bold text-neutral-900 flex items-center gap-2.5">
              <FontAwesomeIcon icon={faAddressCard} /> Informações Pessoais
            </h3>
            <p className="text-xs text-neutral-400 mt-0.5">
              Seus dados cadastrais básicos validados na instituição.
            </p>
          </div>

          {/* Inputs estilizados (Read-Only com visual premium) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1.5">
                Nome Completo
              </label>
              <div className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 text-neutral-800 rounded-xl font-medium text-sm">
                {perfil.nome}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1.5">
                Matrícula
              </label>
              <div className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 text-neutral-700 rounded-xl font-medium text-sm">
                {perfil.matricula}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1.5">
                E-mail Institucional
              </label>
              <div className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 text-neutral-800 rounded-xl font-medium text-sm">
                {perfil.email}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1.5">
                Telefone / WhatsApp
              </label>
              <div className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 text-neutral-800 rounded-xl font-medium text-sm">
                {perfil.telefone}
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1.5">
                CPF
              </label>
              <div className="w-full md:w-1/2 px-4 py-3 bg-neutral-50 border border-neutral-200 text-neutral-800 rounded-xl font-medium text-sm">
                {perfil.cpf}
              </div>
            </div>
          </div>

          {/* Subseção de Segurança */}
          <div className="pt-6 border-t border-neutral-100">
            <h3 className="text-lg font-bold text-neutral-900 flex items-center gap-2.5 mb-4">
              <FontAwesomeIcon icon={faShieldAlt} /> Segurança e Autenticação
            </h3>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3.5 bg-neutral-50 border border-neutral-200 rounded-xl">
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faKey} className="text-[#606060]" />
                  <div>
                    <p className="text-sm font-semibold text-neutral-800">
                      Senha de Acesso
                    </p>
                    <p className="text-xs text-neutral-400">
                      Alterada pela última vez há 3 meses.
                    </p>
                  </div>
                </div>
                <button className="text-sm font-semibold text-[#102613] hover:text-[#44ba6a] transition-colors cursor-pointer px-3 py-1.5">
                  Alterar Senha
                </button>
              </div>

              <div className="flex items-center justify-between p-3.5 bg-neutral-50 border border-neutral-200 rounded-xl">
                <div className="flex items-center gap-3 ">
                  <FontAwesomeIcon
                    icon={faMobileAlt}
                    className="text-[#606060]"
                  />
                  <div>
                    <p className="text-sm font-semibold text-neutral-800">
                      Autenticação em Dois Fatores (2FA)
                    </p>
                    <p className="text-xs text-neutral-400">
                      Proteção extra utilizando o aplicativo mobile.
                    </p>
                  </div>
                </div>
                <span className="bg-[#44ba6a]/10 text-[#44ba6a] text-sm font-bold px-3 py-1 rounded-full border border-[#44ba6a]/20">
                  Ativo
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 3: DESEMPENHO ACADÊMICO & WALLET (Ocupa 1 coluna) */}
        <div className="space-y-8">
          {/* Bloco Estatístico CRA */}
          <IndiceRendimento cra={perfil.cra}/>

          {/* Carteira Digital (Identidade Digital Mobile) */}
          <DigitalAdress periodo={perfil.periodo}/>
        </div>
      </div>
    </div>
  );
}
