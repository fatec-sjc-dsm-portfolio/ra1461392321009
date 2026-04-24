import { Hash } from 'lucide-react';

interface AboutProps {
  description: string;
  education: Array<{
    degree: string;
    institution: string;
    year: string;
  }>;
  skills: string[];
}

export function About({ description, education, skills }: AboutProps) {
  return (
    <section id="sobre" className="grid md:grid-cols-2 border-b-2 border-chess-ebony pt-12">
      <div className="p-8 md:p-14 border-r-2 border-chess-ebony space-y-10">
        <h2 className="text-4xl font-serif font-black italic underline decoration-4 underline-offset-12">Um pouco sobre mim</h2>
        <p className="text-lg leading-relaxed font-medium">
          {description}
        </p>
        <div className="space-y-8 pt-6">
          <h3 className="text-[14px] font-black uppercase tracking-[0.4em] flex items-center gap-3">
            <Hash size={14} /> Formação Acadêmica
          </h3>
          {education.map((edu, index) => (
            <div key={index} className="border-l-4 border-chess-ebony pl-6 py-1">
              <h4 className="font-serif text-xl font-black uppercase tracking-tight">{edu.degree}</h4>
              <p className="text-[10px] uppercase font-black opacity-60 tracking-widest mt-1">{edu.institution}{' // '}{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="p-8 md:p-14 bg-chess-ebony text-chess-cream">
        <h2 className="text-4xl font-serif font-black italic mb-12">Stacks</h2>
        <div className="grid grid-cols-2 gap-px bg-chess-cream/10 border border-chess-cream/20">
          {skills.map((stack) => (
            <div key={stack} className="p-6 bg-chess-ebony hover:bg-chess-cream hover:text-chess-ebony transition-all group border border-chess-cream/5 flex items-center justify-between">
              <span className="text-[9px] font-black uppercase tracking-[0.2em]">{stack}</span>
            </div>
          ))}
        </div>
        <div className="mt-12 grid grid-cols-8 gap-px border-2 border-chess-ebony">
          {[...Array(16)].map((_, i) => (
            <div key={i} className={`aspect-square ${((Math.floor(i / 8) + i) % 2 === 0) ? '' :'bg-chess-cream/10'}`}></div>
          ))}
        </div>
      </div>
    </section>
  );
}
