"use client";

interface NavbarProps {
  activeSection: string;
  name: string;
}

export function Navbar({ activeSection, name }: NavbarProps) {
  const items = ['Início', 'Sobre', 'Experiência', 'Projetos', 'Contato'];
  
  return (
    <nav className="fixed top-0 w-full bg-chess-cream/95 backdrop-blur-sm z-50 border-b-2 border-chess-ebony">
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        <div className="w-10 h-10 bg-chess-ebony text-chess-cream flex items-center justify-center mr-4">
          <span className="text-3xl transform -rotate-12 group-hover:rotate-0 transition-transform duration-500 ease-in-out">
             ♜
             </span>
        </div>
        <div className="hidden md:flex h-full border-l-2 border-chess-ebony">
          {items.map((item) => {
            const id = item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            return (
              <a
                key={item}
                href={`#${id}`}
                className={`px-8 flex items-center text-[10px] font-black uppercase tracking-[0.3em] transition-all border-r-2 border-chess-ebony ${
                  activeSection === id 
                    ? 'bg-chess-ebony text-chess-cream' 
                    : 'hover:bg-chess-ebony hover:text-chess-cream'
                }`}
              >
                {item}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
