import { Facebook, Instagram, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeaderTop() {
  return (
    <div className="bg-templePurple text-white py-2">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 items-center gap-4">

        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <img src="/logo.png" alt="Temple Logo" className="h-20 w-auto object-contain" />
        </div>

        {/* Address + Name */}
        <div className="text-center flex flex-col items-center">
          <div className="bg-templeDark/30 px-6 py-1 rounded-sm border border-white/20 mb-1 w-full max-w-lg">
            <p className="text-xs uppercase tracking-wider text-center">Varadapura, Sagar-577401, Shimoga Dist, Karnataka</p>
          </div>
          <h1 className="font-bold text-xl tracking-wide mt-1">SHRI KSHETRA VARADAHALLI</h1>
        </div>

        {/* Donate + Social */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <Link to="/donate">
            <button className="bg-saffron hover:bg-orange-600 text-white px-6 py-1 rounded-sm font-bold text-sm uppercase tracking-wide transition-colors">
              Donate
            </button>
          </Link>
          <div className="flex gap-3 mt-1">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                <Instagram size={16} className="text-white" />
              </div>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                <Facebook size={16} className="text-white" />
              </div>
            </a>
            <a href="https://wa.link/oniiif" target="_blank" rel="noopener noreferrer">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                <MessageCircle size={16} className="text-white" />
              </div>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
