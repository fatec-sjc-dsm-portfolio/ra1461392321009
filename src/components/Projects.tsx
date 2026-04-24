'use client';

import { useRef } from 'react';
import { ExternalLink, ArrowLeft, ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link: string;
  type: string;
}

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      let move = clientWidth;
      
      if (window.innerWidth >= 1024) move = clientWidth / 3;
      else if (window.innerWidth >= 768) move = clientWidth / 2;
      
      const scrollTo = direction === 'left' ? scrollLeft - move : scrollLeft + move;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="projetos" className="py-10 border-b-2 border-chess-ebony overflow-hidden pt-16 ">
      <div className="px-8 md:px-16 mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div >
          <h2 className="text-4xl md:text-5xl font-serif font-black uppercase italic leading-none">Projetos</h2>
        </div>
        
        <div className="flex border-2 border-chess-ebony rounded-md overflow-hidden">
          <button 
            onClick={() => scroll('left')}
            className="p-4 bg-chess-cream hover:bg-chess-ebony hover:text-chess-cream transition-colors border-r-2 border-chess-ebony group cursor-pointer"
            aria-label="Anterior"
          >
            <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={24} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-4 bg-chess-cream hover:bg-chess-ebony hover:text-chess-cream transition-colors group cursor-pointer"
            aria-label="Próximo"
          >
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
          </button>
        </div>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar border-t-2 border-chess-ebony"
      >
        {projects.map((project, idx) => (
          <div 
            key={project.id} 
            className={`min-w-full md:min-w-[50%] lg:min-w-[33.333%] snap-start group ${idx < projects.length - 1 ? 'border-r-2 border-chess-ebony' : ''} transition-colors duration-300 flex flex-col ${
              idx % 2 === 0 ? 'bg-chess-cream' : 'bg-chess-ebony text-chess-cream'
            }`}>
            <div className="p-10 space-y-8 h-full flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className={`text-[8px] font-black uppercase tracking-[0.2em] border border-current px-2 py-0.5 ${
                      idx % 2 === 0 ? 'border-chess-ebony' : 'border-chess-cream'
                    }`}>
                      {t}
                    </span> 
                  ))}
                </div>
                <h3 className="text-3xl font-serif font-black leading-none uppercase tracking-tighter">{project.title}</h3>
                <span className={`text-[9px] font-black uppercase tracking-[0.3em] border border-current px-2 py-0.5 mb-4 inline-block ${idx % 2 === 0 ? 'border-chess-ebony' : 'border-chess-cream'}`}>
                  {project.type}
                </span>
                <p className="text-sm leading-relaxed font-medium opacity-80 line-clamp-6">
                  {project.description}
                </p>
              </div>
              
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.3em] group-hover:gap-6 transition-all pt-6 border-t border-current/20 mt-auto"
              >
                Repositório GitHub <ExternalLink size={12} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
