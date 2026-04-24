import { History } from 'lucide-react';

interface ExperienceProps {
  experience: Array<{
    company: string;
    role: string;
    duration: string;
    responsibilities: string[];
  }>;
}

export function Experience({ experience }: ExperienceProps) {
  return (
    <section id="experiencia" className="border-b-2 border-chess-ebony bg-chess-ebony text-chess-cream pt-14 scroll-mt-20">
      <div className="px-8 md:px-16 py-8">
        <h2 className="text-4xl md:text-5xl font-serif font-black italic mb-16 uppercase tracking-tighter flex items-center gap-4">
          <History size={32} /> Experiência Profissional
        </h2>
        <div className="space-y-12">
          {experience.map((exp, index) => (
            <div key={index} className="grid md:grid-cols-4 gap-8 border-t border-chess-cream/20 pt-10">
              <div className="text-[10px] font-black uppercase tracking-[0.4em] opacity-60">
                {exp.duration}
              </div>
              <div className="md:col-span-3 space-y-6">
                <h4 className="text-3xl font-serif font-black uppercase leading-none">{exp.role}</h4>
                <p className="text-sm font-bold opacity-80 uppercase tracking-[0.2em] border-b border-chess-cream/10 pb-4 inline-block">{exp.company}</p>
                <ul className="space-y-4 pt-2">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="text-sm leading-relaxed opacity-70 flex gap-4">
                      <span className="w-1.5 h-1.5 bg-chess-cream mt-1.5 shrink-0 rotate-45"></span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
