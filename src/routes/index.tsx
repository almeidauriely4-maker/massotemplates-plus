import { createFileRoute } from "@tanstack/react-router";
import {
  Activity, BadgeCheck, CalendarDays, Check, ChevronDown, ClipboardCheck,
  Clock3, Dumbbell, Gift, HeartPulse, Leaf, LockKeyhole, Search, ShieldCheck,
  Sparkles, Star, Waves, Zap,
} from "lucide-react";
import heroImage from "@/assets/massopro-mockup-principal.png";
import easeImage from "@/assets/massopro-facilidade-total.png";
import rafael from "@/assets/avatar-rafael.jpg";
import camila from "@/assets/avatar-camila.jpg";
import bruno from "@/assets/avatar-bruno.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "+250 Sequências de Massagem Prontas para Massoterapeutas" },
    { name: "description", content: "Conteúdo exclusivo para massoterapeutas: +250 sequências organizadas por objetivo, região do corpo e tipo de cliente." },
    { property: "og:title", content: "MassoPro | +250 Sequências de Massagem Prontas" },
    { property: "og:description", content: "Sequências organizadas para facilitar seus atendimentos diários." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

const pillars = [
  [HeartPulse, "Massagem Relaxante", "Sequências completas para reduzir estresse, ansiedade e tensão muscular do dia a dia."],
  [Activity, "Massagem Terapêutica", "Protocolos para dores crônicas, tensões localizadas e recuperação muscular."],
  [Dumbbell, "Massagem Desportiva", "Sequências para pré-treino, pós-treino, recuperação e prevenção de lesão."],
  [Waves, "Drenagem Linfática", "Manobras para retenção, pós-cirúrgico, gestante e celulite."],
  [Zap, "Massagem Miofascial", "Liberação de pontos-gatilho e fascias por região do corpo."],
  [Leaf, "Massagem em Idosos e Gestantes", "Adaptações seguras, posicionamento e contraindicações."],
];
const features = ["Objetivo terapêutico", "Lista de acessórios e óleos", "Passo a passo detalhado das manobras", "Tempo estimado por região", "Adaptações p/ tipo de cliente", "Indicações e contraindicações"];
const bonuses = [
  ["GRÁTIS", ClipboardCheck, "Checklist de Anamnese", "Ficha prática para coletar histórico e queixas do cliente."],
  ["BRINDE", CalendarDays, "Organizador de Sessões", "Planilha para organizar agenda, pacotes e retornos."],
  ["VIP", Gift, "+20 Sequências Bônus", "Focadas em atendimento domiciliar e quick massage."],
  ["PDF", BadgeCheck, "Guia de Pacotes e Precificação", "Scripts de como montar pacote e cobrar mais por sessão."],
];
const testimonials = [
  [rafael, "“Material prático e direto. Facilitou muito o meu planejamento diário.”", "Dr. Rafael Menezes", "Massoterapeuta"],
  [camila, "“Meus clientes perceberam a diferença nas sessões semanais.”", "Camila Andrade", "Massoterapeuta Desportiva"],
  [bruno, "“Organização impecável por objetivo e tipo de cliente.”", "Dr. Bruno Tavares", "Clínica de Estética Corporal"],
];
const premium = ["+250 Sequências Profissionais", "Acesso imediato", "PDF em alta qualidade", "Aplicativo exclusivo para acessar as sequências", "Organização por categorias", "Organização por região do corpo", "Busca rápida de sequências", "Atualizações futuras inclusas", "Interface premium e fácil de usar", "Acesso pelo celular, tablet e computador", "Favoritar sequências", "Sessões organizadas por objetivo terapêutico", "Bônus: guia prático de drenagem linfática", "Bônus: checklist de anamnese semanal", "Bônus: guia de pacotes e precificação"];

function Tag({ children }: { children: React.ReactNode }) { return <span className="tag"><Sparkles size={14}/>{children}</span>; }
function CTA({ children = "Quero acessar agora" }: { children?: React.ReactNode }) { return <a href="#planos" className="cta">{children}</a>; }

function Index() {
  return <div className="min-h-screen bg-background text-foreground antialiased">
    <main>
      <section className="px-4 pb-16 pt-10 text-center sm:px-6 sm:pt-14">
        <div className="mx-auto max-w-6xl">
          <Tag>Conteúdo exclusivo para massoterapeutas</Tag>
          <h1 className="mx-auto mt-6 max-w-5xl text-4xl font-extrabold leading-[1.05] sm:text-6xl lg:text-[4.25rem]">+250 <span className="text-primary">Sequências de Massagem</span> Prontas para Massoterapeutas</h1>
          <img src={heroImage} alt="Guia MassoPro apresentado em livro, celular e notebook" className="mx-auto mt-5 w-full max-w-5xl drop-shadow-2xl" />
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">Sequências organizadas por objetivo, região do corpo e tipo de cliente para facilitar seus atendimentos diários com excelência técnica.</p>
          <div className="mt-10 flex flex-col items-center gap-3"><CTA/><small className="text-muted-foreground">Acesso imediato · Garantia de 7 dias</small></div>
        </div>
      </section>

      <section className="section"><header className="section-head"><Tag>Pilares da Massoterapia</Tag><h2>Tudo o que você precisa em um só lugar</h2><p>Explore um arsenal de sequências divididas estrategicamente por objetivo e tipo de atendimento.</p></header>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{pillars.map(([Icon,title,text]) => <article className="info-card" key={String(title)}><div className="icon"><Icon size={20}/></div><h3>{title as string}</h3><p>{text as string}</p></article>)}</div>
      </section>

      <section className="band"><div className="section grid items-center gap-12 lg:grid-cols-2"><img src={easeImage} alt="Material MassoPro aberto em tablet" className="w-full"/><div><Tag>Sessões planejadas</Tag><h2 className="mt-5 text-4xl font-extrabold sm:text-5xl">Facilidade total</h2><p className="mt-4 text-muted-foreground">Sequências prontas em tempo recorde. Cada sequência inclui tudo que você precisa para uma aplicação técnica perfeita.</p><ul className="mt-7 grid gap-4 sm:grid-cols-2">{features.map(x=><li className="check" key={x}><Check size={17}/>{x}</li>)}</ul></div></div></section>

      <section className="section"><header className="section-head"><Tag>Presentes para você</Tag><h2>Bônus Gratuitos</h2><p>Garantindo seu acesso hoje, você libera materiais extras inclusos.</p></header><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{bonuses.map(([label,Icon,title,text])=><article className="bonus-card" key={String(title)}><b>{label as string}</b><div className="icon"><Icon size={22}/></div><h3>{title as string}</h3><p>{text as string}</p></article>)}</div></section>

      <section className="band"><div className="section"><header className="section-head"><Tag>Comunidade Massoterapeutas</Tag><h2>Profissionais Satisfeitos</h2><p>O que dizem os profissionais que já utilizam o material.</p></header><div className="grid gap-5 md:grid-cols-3">{testimonials.map(([img,quote,name,role])=><article className="quote-card" key={String(name)}><div className="flex gap-1 text-highlight">{[1,2,3,4,5].map(n=><Star key={n} size={16} fill="currentColor"/>)}</div><p className="my-6 text-lg">{quote}</p><div className="flex items-center gap-3"><img src={img as string} alt={name as string} className="size-12 rounded-full object-cover"/><div><h3>{name as string}</h3><small className="text-muted-foreground">{role as string}</small></div></div></article>)}</div></div></section>

      <section id="planos" className="section"><header className="section-head"><h2>Escolha seu plano</h2><p className="font-bold text-primary">OFERTA EXPIRA EM:</p><div className="mt-3 text-4xl font-extrabold">22:26:40</div></header><div className="mx-auto grid max-w-4xl items-start gap-6 md:grid-cols-2">
        <article className="plan"><h3>Plano Básico</h3><p>Acesso rápido ao essencial.</p><div className="price">R$ 14,90</div><ul>{["+250 sequências profissionais","Acesso imediato","PDF em alta qualidade"].map(x=><li key={x}><Check size={17}/>{x}</li>)}</ul><CTA>Quero agora</CTA></article>
        <article className="plan featured"><span className="chosen">MAIS ESCOLHIDO</span><h3>Plano Premium</h3><p>Acesso completo com aplicativo e atualizações.</p><div className="price">R$ 27,90</div><ul>{premium.map(x=><li key={x}><Check size={17}/>{x}</li>)}</ul><CTA>Quero agora</CTA></article>
      </div></section>

      <section className="guarantee"><ShieldCheck size={54}/><b>100% SEGURO</b><h2>7 Dias de Garantia Incondicional</h2><p>Teste o material, aplique as sequências e sinta a diferença. Se não gostar por qualquer motivo, devolvemos seu dinheiro na hora, sem perguntas.</p></section>

      <section className="section max-w-3xl"><header className="section-head"><Tag>Objeções & Dúvidas</Tag><h2>Dúvidas Comuns</h2></header>{["O acesso é enviado por onde?","Posso acessar pelo celular?","O material é físico?","Qual a validade do acesso?"].map((q,i)=><details key={q}><summary>{q}<ChevronDown size={20}/></summary><p>{["O acesso é enviado imediatamente para o e-mail informado na compra.","Sim. Você pode acessar pelo celular, tablet ou computador.","Não. Todo o material é digital e fica disponível logo após a compra.","Seu acesso ao material não expira."][i]}</p></details>)}</section>

      <section className="final"><h2>Pare de improvisar e eleve sua clínica hoje.</h2><CTA>Começar agora</CTA><small>Acesso imediato · Garantia de 7 dias</small></section>
    </main>
    <footer><div className="brand"><span>M</span><b>MassoPro</b></div><div><LockKeyhole size={16}/> Pagamento Seguro</div><div><ShieldCheck size={16}/> Certificado SSL</div><small>© 2026 MassoPro.</small></footer>
  </div>;
}