import HeaderTop from "./HeaderTop";
import Navbar from "./Navbar";

export default function PageLayout({ children }) {
  return (
    <div className="w-full min-h-screen bg-neutral-900 text-white flex flex-col">
      <div className="sticky top-0 z-50 bg-neutral-900 shadow-md">
        <HeaderTop />
        <Navbar />
      </div>
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}
