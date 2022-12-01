import { ReactElement } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <div className="grid grid-cols-3 grid-rows-footer h-screen">
      <div className="row-start-1 col-span-3">
        <Navbar />
      </div>
      <div className="row-start-2 col-span-3">
        <main className="">{children}</main>
      </div>
      <div className="row-start-3 col-span-3">
        <Footer />
      </div>
    </div>
  );
}
