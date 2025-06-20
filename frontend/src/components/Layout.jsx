import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Index from "../pages/Index";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex min-h-screen p-5">
      <Sidebar />
      <main className="flex-1 flex flex-col min-h-screen">
        <Header />
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}
