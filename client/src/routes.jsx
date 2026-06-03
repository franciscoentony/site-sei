import { createBrowserRouter } from "react-router-dom";

import LayoutDash from "./components/privates/base/LayoutDash";
import Home from "./pages/Home";
import Eventos from "./pages/Eventos";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Dashboard from "./pages/private/Dashboard";
import MeuPerfil from "./pages/private/MeuPerfil";
import MeusEventos from "./pages/private/MeusEventos";
import Layout from "./components/publics/base/Layout";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true, // Define a Home como a página principal do "/"
          element: <Home />,
        },
        {
          path: "eventos",
          element: <Eventos />,
        },
        {
          path: "cadastro",
          element: <Cadastro />,
        },
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <LayoutDash />, // O Layout fica sempre como componente PAI
      children: [
        {
          index: true, // Isso faz o Dashboard ser a página inicial do /dashboard
          element: <Dashboard />, // O Dashboard fica como FILHO
        },
        {
          path: "perfil",
          element: <MeuPerfil/>,
        },
        {
          path: "eventos",
          element: <MeusEventos />, // Se quiseres que a aba eventos também mostre o dashboard
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
);
