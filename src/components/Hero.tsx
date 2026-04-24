import { Square, Download, ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  shortDescription: string;
  resume: string;
}

export function Hero({ title, shortDescription, resume }: HeroProps) {
  return (
    <section id="inicio" className="min-h-screen flex flex-col justify-center px-6 md:px-20 border-b-2 border-chess-ebony relative overflow-hidden bg-chess-cream pt-16">
      
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="grid grid-cols-12 h-full w-full">
          {[...Array(144)].map((_, i) => (
            <div key={i} className={`aspect-square border border-chess-ebony ${(Math.floor(i/12) + i) % 2 === 0 ? 'bg-chess-ebony' : ''}`}></div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10 max-w-7xl mx-auto w-full">

        <div className="space-y-8 order-2 lg:order-1">
          <div className="inline-flex items-center gap-3 border-2 border-chess-ebony px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] bg-chess-cream shadow-[4px_4px_0px_#211d1a]">
            <Square size={10} fill="currentColor" /> {title}
          </div>
          
          <h1 className="text-7xl md:text-9xl font-serif font-black leading-[0.85] uppercase tracking-tighter text-chess-ebony">
            Joyce <br /> 
            <span className="text-outline-ebony text">Silva</span>
          </h1>

          <div className="space-y-4">
            <p className="text-lg md:text-xl max-w-xl font-medium leading-tight text-chess-ebony/90 border-l-4 border-chess-ebony pl-6 py-1">
              {shortDescription}
            </p>
            <p className="text-sm font-mono text-chess-ebony/60 pl-7 uppercase tracking-widest">
              Fatec Jessen Vidal • 2026
            </p>
          </div>
          
          {/* Botões Reorganizados */}
          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <a href="#contato" className="group px-8 py-4 bg-chess-ebony text-chess-cream text-[10px] font-black uppercase tracking-[0.4em] hover:bg-chess-ebony/90 transition-all flex items-center justify-center gap-3 shadow-[8px_8px_0px_rgba(33,29,26,0.2)]">
              Contato <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className="flex items-center gap-6 sm:pl-4">
              <a href={resume} target="_blank" rel="noopener noreferrer" className="text-chess-ebony text-[10px] font-black uppercase tracking-[0.3em] hover:underline flex items-center gap-2">
                Currículo <Download size={14} />
              </a>
              <span className="w-1 h-1 bg-chess-ebony rounded-full opacity-30"></span>
              <a href="#projetos" className="text-chess-ebony text-[10px] font-black uppercase tracking-[0.3em] hover:underline">
                Projetos
              </a>
            </div>
          </div>
        </div>

        {/* Coluna da Direita: Imagem */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[450px] aspect-[4/5] border-4 border-chess-ebony p-2 bg-chess-cream shadow-[-16px_16px_0px_#211d1a] group">
            <div className="absolute inset-0 bg-chess-ebony/10 group-hover:bg-transparent transition-colors z-10"></div>
            <img 
              src="/profile.jpg" 
              alt="Joyce Silva - Desenvolvedora Backend" 
              className="w-full h-full object-cover grayscale contrast-125"
            />
          </div>
        </div>

      </div>

      {/* Badge Vertical Lateral */}
      <div className="absolute right-6 bottom-12 hidden xl:block">
        <p className="text-[9px] font-black uppercase tracking-[1em] opacity-20 [writing-mode:vertical-rl] rotate-180">
          {new Date().getFullYear()} © Joyce Silva
        </p>
      </div>
    </section>
  );
}