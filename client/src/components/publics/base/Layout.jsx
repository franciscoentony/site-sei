import { Outlet } from "react-router-dom";

import Footer from "./Footer"
import Header from "./Header";

export default function Layout() {
  return (
    <div className="max-h-screen text-white font-sans">
      <Header/>
      <main className="container min-w-full max-h-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}