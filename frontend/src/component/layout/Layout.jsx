import React from "react";
import { Outlet } from "react-router-dom";
import Topbar from "../Topbar";
import Sidebar from "../Sidebar";
import Footer from "../Footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="w-full flex flex-col">
        <Topbar />
        <div className="h-full">
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
}
