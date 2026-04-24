import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import information from '@/data/information.json';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactRequest {
  name: string;
  email: string;
  message: string;
}

function generateEmailHtml({ name, email, message }: ContactRequest) {
  return `
    <div style="font-family: serif; color: #2A1B10; background-color: #F3E5DC; padding: 40px; border: 2px solid #2A1B10;">
      <h1 style="text-transform: uppercase; border-bottom: 2px solid #2A1B10; padding-bottom: 10px;">Nova mensagem do Portfólio</h1>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <div style="margin-top: 20px; border-top: 1px solid #2A1B10; pt: 20px;">
        <p><strong>Mensagem:</strong></p>
        <p style="font-style: italic;">${message}</p>
      </div>
    </div>
  `;
}

export async function POST(req: Request) {
  try {
    const body: ContactRequest = await req.json();
    const { name, email, message } = body;
    const { contact } = information;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Campos obrigatórios ausentes" }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>', 
      to: [contact.email], 
      subject: `Novo contacto: ${name}`,
      replyTo: email, 
      html: generateEmailHtml(body),
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ error: "Erro ao enviar e-mail" }, { status: 500 });
  }
}
