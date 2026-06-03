import {
  faCalendar,
  faCertificate,
  faListCheck,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Destaques from "../components/Destaques";
import VerMais from "../components/VerMais";
import ButtonLink from "../components/ButtonLink";
import Infos from "../components/Infos";

import { INITIAL_EVENTS } from "../components/privates/Dados";
import CardInst from "../components/CardInst";
import CardSkeleton from "../components/SkeletonCard";

import { useEffect, useState } from "react";
import DestaquesSkeleton from "../components/SkeletonBanner";

import { Link } from "react-router-dom";

export default function Homepage() {
  const [loading, setLoading] = useState(true);
  const [banners, setBanners] = useState([]);

  const events = INITIAL_EVENTS;

  useEffect(() => {
    // Simula o carregamento da API
    setTimeout(() => {
      setBanners([
        { id: 1, link: "/evento/1", image: "https://picsum.photos/401/500" },
        { id: 2, link: "/evento/2", image: "https://picsum.photos/401/600" },
        { id: 3, link: "/evento/2", image: "https://picsum.photos/401/700" },
        { id: 4, link: "/evento/2", image: "https://picsum.photos/401/800" },
        { id: 5, link: "/evento/2", image: "https://picsum.photos/401/900" },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <main className="max-w-full min-h-200 flex flex-col justify-center items-center w-full">
      <section className="min-w-full h-160 text-white flex flex-col items-center justify-center relative overflow-hidden">
        <div className="flex flex-col gap-7 absolute z-10 w-full px-6 items-center text-center">
          <div className="flex flex-col items-center">
            <p className="text-xl md:text-2xl font-normal">
              Seja bem vindo(a) ao
            </p>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-2xl mt-2 leading-tight">
              Sistema de Gerenciamento de Eventos Institucionais do IFRN
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-10 w-full">
            <ButtonLink link="/login" text="Entrar" />
            <Link
              to="/cadastro"
              className="border-2 border-white w-40 h-12 flex justify-center items-center rounded-xl hover:bg-white duration-500 font-semibold hover:text-dark-green hover:scale-105"
            >
              Cadastrar
            </Link>
          </div>
        </div>
        <div className="w-full h-full relative flex justify-center items-center">
          <img
            src={`${import.meta.env.BASE_URL}/IFRN-Salgado-Filho-2-scaled.webp`}
            alt="banner"
            draggable="false"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 w-full min-h-full bg-dark-green/65"></div>
        </div>
      </section>
      {/*Conteudo da pagina*/}
      <div className="content w-full flex flex-col py-10 md:py-20 items-center">
        <div className="w-full px-6 md:w-4/6 md:px-0 h-auto pb-12 md:pb-20 overflow-hidden">
          <div className="title text-start py-6 md:py-10 flex justify-between items-center">
            <h1 className="text-3xl md:text-4xl font-bold text-dark-green">
              Destaques
            </h1>
            <VerMais link="/cadastro" />
          </div>
          <div className="flex gap-5 overflow-x-scroll scrollbar pb-5">
            {/* Injeção local das Keyframes de animação (Zero configuração externa) */}
            <style>{`
              @keyframes cardFadeIn {
                from {
                  opacity: 0;
                  transform: translateY(8px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
              .animate-card-entry {
                animation: cardFadeIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
              }
            `}</style>
            {loading // Exibe 2 blocos de banners fictícios idênticos enquanto carrega
              ? Array.from({ length: 4 }).map((_, i) => (
                  <DestaquesSkeleton key={i} />
                ))
              : // Exibe os banners reais pós-carregamento
                banners.map((item) => (
                  <Destaques
                    key={item.id}
                    link={item.link}
                    image={item.image}
                  />
                ))}
          </div>
        </div>

        <div className="w-full overflow-hidden py-12 md:py-20 bg-dark-green flex justify-center">
          <div className="w-full px-6 md:w-4/6 md:px-0 h-auto overflow-hidden flex flex-col items-center">
            <div className="w-full title text-start flex justify-start mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Informações Gerais
              </h1>
            </div>
            <div className="infos h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full p-0">
              <Infos icon={faUsers} number={363} text={"Participantes"} />
              <Infos icon={faCalendar} number={13} text={"Eventos"} />
              <Infos icon={faListCheck} number={45} text={"Atividades"} />
              <Infos
                icon={faCertificate}
                number={211}
                text={"Certificados Emitidos"}
              />
            </div>
          </div>
        </div>

        <div className="w-full px-6 md:w-4/6 md:px-0 h-auto pb-12 md:pb-20 overflow-hidden">
          <div className="title text-start pt-12 md:pt-20 flex flex-col justify-between">
            <div className="flex justify-between items-center mb-6 md:mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-dark-green">
                Últimos Cadastros
              </h1>
              <VerMais link="/cadastro" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {loading
                ? Array.from({ length: 3 }).map((_, index) => (
                    <CardSkeleton key={index} />
                  ))
                : events.map((event) => (
                    <CardInst
                      key={event.id}
                      date={event.date}
                      title={event.title}
                      description={event.description}
                      status={event.status}
                    />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
