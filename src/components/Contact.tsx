"use client";

import React, { useState } from 'react';
import { Github, Linkedin } from 'lucide-react';

interface ContactProps {
  contact: {
    github: string;
    linkedin: string;
    email: string;
  };
  name: string;
}

export function Contact({ contact, name }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const data = new FormData(e.currentTarget);
    const values = Object.fromEntries(data);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(values),
      });

      if (res.ok) {
        setStatus("Mensagem enviada com sucesso! Entrarei em contacto em breve.");
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus("Ocorreu um erro. Tente novamente mais tarde.");
      }
    } catch {
      setStatus("Erro na conexão. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contato" className="grid md:grid-cols-2 bg-chess-ebony text-chess-cream overflow-hidden pt-16 scroll-mt-16">
      <div className="p-8 md:p-16 flex flex-col justify-between border-b-2 md:border-b-0 md:border-r-2 border-chess-cream/10">
        <div className="space-y-10">
          <h2 className="text-4xl md:text-6xl font-serif font-black italic leading-none break-words">Contato Profissional</h2>
          <p className="text-lg md:text-xl font-medium opacity-80 leading-relaxed max-w-md">
            Estou disponível para novas oportunidades, colaborações em projetos complexos ou discussões técnicas de alto nível.
          </p>
          <div className="space-y-4 pt-6">
            <div className="flex gap-6 pt-6">
              <a href={contact.github} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform"><Github size={24} /></a>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform"><Linkedin size={24} /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 md:p-16 bg-chess-cream text-chess-ebony">
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="border-b-2 border-chess-ebony focus-within:border-chess-ebony/30 transition-colors">
            <label htmlFor="name" className="block text-[9px] font-black uppercase tracking-[0.3em] mb-3">Nome Completo</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full pb-3 bg-transparent outline-none placeholder:text-chess-ebony/20 font-serif text-lg md:text-xl font-black uppercase"
              placeholder="Seu Nome"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="border-b-2 border-chess-ebony focus-within:border-chess-ebony/30 transition-colors">
            <label htmlFor="email" className="block text-[9px] font-black uppercase tracking-[0.3em] mb-3">E-mail Corporativo</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full pb-3 bg-transparent outline-none placeholder:text-chess-ebony/20 font-serif text-lg md:text-xl font-black uppercase"
              placeholder="email@empresa.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="border-b-2 border-chess-ebony focus-within:border-chess-ebony/30 transition-colors">
            <label htmlFor="message" className="block text-[9px] font-black uppercase tracking-[0.3em] mb-3">Mensagem / Proposta</label>
            <textarea
              id="message"
              name="message"
              rows={2}
              className="w-full pb-3 bg-transparent outline-none placeholder:text-chess-ebony/20 font-serif text-lg md:text-xl font-black uppercase resize-none"
              placeholder="Descrição do Assunto"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-6 bg-chess-ebony text-chess-cream font-black uppercase tracking-[0.4em] hover:bg-chess-ebony/90 transition-all text-[10px] border-2 border-chess-ebony active:scale-[0.99]"
            disabled={loading}
          >
            {loading ? 'Enviando...' : 'Enviar Mensagem'}
          </button>
          {status && (
            <p className={`text-center text-[10px] font-black uppercase tracking-widest mt-4 ${status.includes('sucesso') ? 'text-green-600' : 'text-red-600'}`}>
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
