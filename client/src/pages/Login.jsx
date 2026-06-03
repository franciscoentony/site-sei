import { faUser } from "@fortawesome/free-solid-svg-icons";
import Input from "../components/Input";
import InputSenha from "../components/InputSenha";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center border-t-3 border-light-green bg-bg-light text-dark-green px-4 py-10">
      <form
        action=""
        className="mt-16 md:mt-20 pb-10 md:pb-15 mb-10 md:mb-15 flex flex-col items-center justify-center w-full max-w-lg bg-white rounded-3xl shadow-xl p-6 md:p-10"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-start w-full mt-4 md:mt-10 mb-8">
          Login
        </h1>
        <div className="flex flex-col gap-5 justify-center pb-8 w-full">
          <Input
            icon={faUser}
            label={"Email ou CPF:"}
            type={"text"}
            placeholder={"Ex.: usuario.ifrn@escolar.ifrn.edu.br"}
          />
          <InputSenha text="Senha" />
          <div className="flex justify-end">
            <Link
              to="#"
              className="text-strong-green font-semibold duration-200 hover:text-green-700 text-sm md:text-base"
            >
              Esqueceu a senha?
            </Link>
          </div>
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white cursor-pointer hover:bg-green-800 w-full sm:w-80 h-13 rounded-xl font-semibold duration-200 ease-in-out"
        >
          Entrar
        </button>
        <div className="mt-5 flex flex-col text-center">
          <Link to="" className="mb-1 font-semibold hover:text-light-green duration-300 ease-in-out text-sm md:text-base">
            Não tem conta ainda? Cadastre-se
          </Link>
        </div>
      </form>
    </div>
  );
}
