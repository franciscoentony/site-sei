import {
  faAddressCard,
  faBook,
  faBuildingColumns,
  faEnvelope,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Input from "../components/Input";
import SectionEstadoCidade from "../components/SectionEstadoCidade";
import SectionOcupacao from "../components/SectionOcupacao";
//import Logo from "../components/Logo";
import SectionServAluno from "../components/SectionServAluno";
import InputSenha from "../components/InputSenha";

export default function Cadastro() {
  return (
    <div className="min-h-screen flex flex-col items-center border-t-3 border-light-green bg-bg-light text-dark-green px-4 py-10">

      {/*Formulario de cadastro*/}
      <form
        className="mt-24 md:mt-32 mb-15 flex flex-col items-center justify-center w-full max-w-xl bg-white rounded-3xl shadow-xl p-6 md:p-10"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-start w-full mt-4 md:m-10 mb-8">
          Cadastro
        </h1>
        {/*Input Nome*/}
        <div className="flex flex-col gap-5 justify-center pb-10 w-full">
          <Input
            icon={faUser}
            label={"Nome Completo:"}
            type={"text"}
            placeholder={"Ex.: José Ricardo da Silva"}
          />
          {/*Input Email*/}
          <Input
            icon={faEnvelope}
            label={"Email:"}
            type={"email"}
            placeholder={"Ex.: usuario.ifrn@escolar.ifrn.edu.br"}
          />
          {/*Input CPF*/}
          <Input
            icon={faAddressCard}
            label={"CPF (somente números):"}
            type={"number"}
            placeholder={"000.000.000-00"}
          />
          {/*Input Telefone*/}
          <Input
            icon={faPhone}
            label={"Telefone com DDD:"}
            type={"number"}
            placeholder={"Ex.: 84 90020345"}
          />
          {/*Section Estado e Cidade*/}
          <SectionEstadoCidade />
          {/*Section Ocupacao*/}
          <SectionOcupacao />
          {/*Section Servidor ou Aluno*/}
          <SectionServAluno />
          {/*Input Instituicao ou vinculo*/}
          <Input
            icon={faBook}
            label={"Instituição/Vínculo:"}
            type={"text"}
            placeholder={"IFRN, UFRN..."}
          />
          {/*Input Campus ou Unidade*/}
          <Input
            icon={faBuildingColumns}
            label={"Campus/Unidade (opcional):"}
            type={"text"}
            placeholder={"Natal-Central, Currais Novos..."}
          />
          {/*inputs de senha*/}
          <InputSenha text="Senha" />
          <InputSenha text="Confirme a senha" />
        </div>
        {/*Botao Cadastro*/}
        <button
          type="submit"
          className="bg-strong-green text-white cursor-pointer border-strong-green border-2 hover:bg-transparent hover:text-dark-green w-full sm:w-80 h-13 rounded-xl font-semibold duration-300 ease-in"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}