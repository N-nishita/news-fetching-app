import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AppLayout() {
  return (
    <>
      <Header />
      <main className="container mx-auto flex-1">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
