
import { ShoppingBag, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <button className="lg:hidden">
          <Menu className="w-6 h-6" />
        </button>
        
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="#" className="text-sm hover:text-gray-600 transition-colors">FEMMES</a>
          <a href="#" className="text-sm hover:text-gray-600 transition-colors">HOMMES</a>
          <a href="#" className="text-sm hover:text-gray-600 transition-colors">NOUVEAU</a>
        </nav>

        <a href="/" className="text-xl font-medium absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          BOUTIQUE
        </a>

        <Button variant="ghost" className="relative">
          <ShoppingBag className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
            0
          </span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
