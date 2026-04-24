export function Footer() {
  return (
    <footer className="h-48 flex flex-col items-center justify-center gap-6 border-x-2 border-chess-ebony max-w-7xl mx-auto">
      <div className="flex gap-3">
        {[...Array(4)].map((_, i) => (
          <div key={i} className={`w-4 h-4 rotate-45 border border-chess-ebony ${i % 2 === 0 ? 'bg-chess-ebony' : ''}`}></div>
        ))}
      </div>
      <div className="text-[9px] font-black uppercase tracking-[0.8em] opacity-20">
        Desenvolvido por Joyce Silva - {new Date().getFullYear()}
      </div>
    </footer>
  );
}
