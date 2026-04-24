import { Award } from 'lucide-react';

interface CertificationsProps {
  certifications: Array<{
    name: string;
    issuer: string;
    year: string;
  }>;
}

export function Certifications({ certifications }: CertificationsProps) {
  return (
    <section className="border-b-2 border-chess-ebony bg-chess-cream">
      <div className="p-8 md:p-16">
        <h2 className="text-[14px] font-black uppercase tracking-[0.5em] mb-12 flex items-center gap-3">
          <Award size={16} /> Certificações & Conquistas
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-chess-ebony border-2 border-chess-ebony">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-chess-cream p-8 hover:bg-chess-ebony hover:text-chess-cream transition-all duration-300 group h-full flex flex-col justify-between">
              <h4 className="font-serif font-black text-xl leading-tight uppercase mb-4">{cert.name}</h4>
              <div className="space-y-1">
                <p className="text-[9px] font-black uppercase tracking-widest opacity-60 group-hover:opacity-100">{cert.issuer}</p>
                <p className="text-[9px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-60">{cert.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
