/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Rocket, ShoppingCart, MessageSquare, Instagram, MessageCircle, Star, Sparkles, Zap, Globe } from "lucide-react";

const FloatingElements = () => {
  const [elements, setElements] = useState<{ Icon: any; color: string; size: number; top: string; left: string; duration: number }[]>([]);

  useEffect(() => {
    setElements([
      { Icon: Rocket, color: "text-blue-500", size: 24, top: "10%", left: "5%", duration: 25 },
      { Icon: Instagram, color: "text-pink-500", size: 20, top: "30%", left: "15%", duration: 32 },
      { Icon: MessageCircle, color: "text-emerald-500", size: 20, top: "70%", left: "5%", duration: 28 },
      { Icon: Star, color: "text-purple-500", size: 16, top: "15%", left: "85%", duration: 30 },
      { Icon: Globe, color: "text-emerald-500", size: 20, top: "60%", left: "10%", duration: 22 },
      { Icon: Sparkles, color: "text-yellow-500", size: 18, top: "80%", left: "70%", duration: 28 },
      { Icon: Zap, color: "text-blue-400", size: 22, top: "40%", left: "90%", duration: 35 },
      { Icon: Code2, color: "text-zinc-600", size: 14, top: "25%", left: "40%", duration: 40 },
    ]);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((el, i) => (
        <motion.div
          key={i}
          initial={{ x: "-100%", y: el.top, opacity: 0 }}
          animate={{ 
            x: "110vw", 
            y: [el.top, "20%", "80%", el.top],
            opacity: [0, 0.4, 0.4, 0],
            rotate: [0, 360]
          }}
          transition={{ 
            duration: el.duration, 
            repeat: Infinity, 
            ease: "linear",
            delay: i * 5 
          }}
          className={`absolute ${el.color}`}
        >
          <el.Icon size={el.size} />
        </motion.div>
      ))}
    </div>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } }
  };

  const services = [
    {
      title: "Criação de Sites",
      desc: "Sites institucionais que passam autoridade e profissionalismo.",
      icon: <Code2 className="w-10 h-10 text-blue-500" />,
      message: "Olá Yudi! Gostaria de saber mais sobre a criação de um site profissional para o meu negócio."
    },
    {
      title: "Landing Pages",
      desc: "Páginas focadas 100% em conversão e vendas de produtos ou serviços.",
      icon: <Rocket className="w-10 h-10 text-purple-500" />,
      message: "Olá Yudi! Gostaria de saber mais sobre a criação de uma Landing Page de alta conversão."
    },
    {
      title: "Lojas Virtuais",
      desc: "E-commerces completos e otimizados para vender seus produtos online.",
      icon: <ShoppingCart className="w-10 h-10 text-emerald-500" />,
      message: "Olá Yudi! Gostaria de saber mais sobre a criação de uma Loja Virtual (E-commerce)."
    }
  ];

  const handleServiceClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/21990380384?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30 font-sans overflow-x-hidden">
      {/* GRID BACKGROUND */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,#1e293b,transparent)]" />
      </div>

      {/* FLOATING ELEMENTS */}
      <FloatingElements />

      {/* GLOW OVERLAYS */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl pointer-events-none z-0 opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-purple-600 rounded-full blur-[150px] animate-pulse" />
      </div>

      <motion.div style={{ scale }} className="relative z-10 p-6 max-w-[1100px] mx-auto min-h-screen flex flex-col">
        {/* NAV */}
        <motion.nav 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="relative z-50 flex justify-between items-center mb-16 px-4 py-8"
        >
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="text-2xl font-black tracking-tighter lowercase group-hover:tracking-normal transition-all duration-300">
              sitesstudio<span className="text-blue-500">.br</span>
            </div>
          </div>
          <div className="hidden md:flex px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            <span className="flex w-2 h-2 rounded-full bg-blue-500 animate-ping mr-2 self-center" />
            Disponível para novos projetos
          </div>
        </motion.nav>

        {/* HERO */}
        <section className="relative z-10 grid grid-cols-12 gap-12 mb-40 mt-10">
          <div className="col-span-12 lg:col-span-7 flex flex-col justify-center text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-[10px] font-black uppercase tracking-widest text-zinc-500">
                <Globe size={12} /> Engenharia Digital de Elite
              </div>
              <h1 className="text-6xl md:text-[7rem] font-black tracking-tight leading-[0.82] bg-gradient-to-b from-white via-white to-zinc-700 bg-clip-text text-transparent mb-10 uppercase">
                O Futuro<br />Do Seu<br />Negócio<span className="text-blue-600">.</span>
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-zinc-400 text-lg md:text-2xl max-w-xl leading-relaxed mb-12 font-medium"
            >
              Não criamos apenas sites. Projetamos <strong>máquinas de vendas</strong> de alta performance com design ultra-futurista e conversão garantida.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                id="cta-hero"
                size="lg" 
                className="group relative rounded-full px-10 py-8 text-xl font-black bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-[0_0_40px_rgba(37,99,235,0.4)] cursor-pointer overflow-hidden uppercase"
                onClick={() => window.open("https://wa.me/21990380384", "_blank")}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Construir Meu Futuro <Zap className="w-5 h-5 fill-white" />
                </span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 to-transparent opacity-0 group-hover:opacity-20 transition-opacity"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </Button>
            </motion.div>
          </div>

          <div className="col-span-12 lg:col-span-5 flex flex-col gap-6 justify-center">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {services.map((item, i) => (
                <motion.div 
                  key={i}
                  variants={{
                    initial: { opacity: 0, x: 50 },
                    whileInView: { opacity: 1, x: 0 }
                  }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="p-6 rounded-[2rem] bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-xl group hover:border-blue-500/50 transition-all cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
                  onClick={() => handleServiceClick(item.message)}
                >
                  <div className="flex items-center gap-5">
                    <div className={`p-4 rounded-2xl ${
                      i === 0 ? "bg-blue-500/10 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.2)]" : 
                      i === 1 ? "bg-purple-500/10 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.2)]" : 
                      "bg-emerald-500/10 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                    }`}>
                      {React.cloneElement(item.icon as React.ReactElement, { className: "w-8 h-8" })}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{item.title}</h3>
                      <p className="text-sm text-zinc-500 leading-tight font-mono">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              {...fadeIn}
              className="mt-10 p-8 rounded-[2rem] bg-zinc-900/20 border border-zinc-800/30 backdrop-blur-sm"
            >
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="flex flex-col group">
                  <span className="text-3xl font-black text-white group-hover:text-blue-500 transition-colors">0</span>
                  <span className="text-[9px] text-zinc-600 uppercase tracking-widest font-black">Mecanismos</span>
                </div>
                <div className="flex flex-col group">
                  <span className="text-3xl font-black text-white group-hover:text-purple-500 transition-colors">0</span>
                  <span className="text-[9px] text-zinc-600 uppercase tracking-widest font-black">Protocolos</span>
                </div>
                <div className="flex flex-col group">
                  <span className="text-3xl font-black text-white group-hover:text-emerald-500 transition-colors">R$ 0</span>
                  <span className="text-[9px] text-zinc-600 uppercase tracking-widest font-black">Expansão</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="mt-40 max-w-5xl mx-auto">
          <motion.div {...fadeIn}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[3rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-zinc-900/50 border border-zinc-800/50 p-10 md:p-16 rounded-[3rem] backdrop-blur-2xl">
                <div className="flex items-center gap-6 mb-10">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent to-zinc-800"></div>
                  <h2 className="text-5xl font-black uppercase tracking-tighter">O Visionário</h2>
                  <div className="h-px flex-1 bg-gradient-to-l from-transparent to-zinc-800"></div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-12 items-center">
                  <div className="w-full md:w-1/2 space-y-6">
                    <p className="text-zinc-200 text-2xl leading-relaxed font-bold">
                      "Meu nome é <span className="bg-blue-600 px-2 rounded">Yudi</span>, tenho 13 anos e não estou apenas criando sites, estou construindo o <span className="text-blue-400">sitesstudio.br</span> como o novo padrão do mercado."
                    </p>
                    <p className="text-zinc-400 text-lg leading-relaxed">
                      Enquanto muitos seguem padrões, eu invento os meus. Comecei cedo para chegar longe. A tecnologia é meu combustível e cada pixel é uma oportunidade de dominação digital.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
                    <div className="p-6 rounded-3xl bg-zinc-900/80 border border-zinc-800 text-center">
                      <div className="text-3xl font-black text-blue-500 mb-2">13y</div>
                      <div className="text-[10px] uppercase font-bold text-zinc-500">Idade</div>
                    </div>
                    <div className="p-6 rounded-3xl bg-zinc-900/80 border border-zinc-800 text-center">
                      <div className="text-3xl font-black text-purple-500 mb-2">∞</div>
                      <div className="text-[10px] uppercase font-bold text-zinc-500">Ambição</div>
                    </div>
                    <div className="p-6 rounded-3xl bg-zinc-900/80 border border-zinc-800 text-center col-span-2">
                      <div className="text-2xl font-black text-white mb-2 font-mono uppercase tracking-tighter">ESTRATÉGIA & DESIGN</div>
                      <div className="text-[10px] uppercase font-bold text-zinc-500">Habilidades</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SERVIÇOS */}
        <section id="servicos" className="mt-40 max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <motion.span {...fadeIn} className="text-blue-500 font-mono text-sm tracking-[0.3em] uppercase block mb-4">Serviços de Próxima Geração</motion.span>
            <motion.h2 {...fadeIn} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl font-black uppercase tracking-tighter">O Que Fazemos</motion.h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="cursor-pointer group"
                onClick={() => handleServiceClick(item.message)}
              >
                <Card className="h-full bg-zinc-900/20 border-zinc-800 rounded-[2.5rem] hover:bg-zinc-900/40 hover:border-blue-500/30 transition-all duration-500 group overflow-hidden relative">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity">
                    {React.cloneElement(item.icon as React.ReactElement, { size: 120 })}
                  </div>
                  <CardContent className="p-10 relative z-10">
                    <div className="mb-8 p-4 w-fit rounded-2xl bg-zinc-800/50 text-blue-500 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                      {item.icon}
                    </div>
                    <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">{item.title}</h3>
                    <p className="text-zinc-400 leading-relaxed text-lg font-medium">
                      {item.desc}
                    </p>
                    <div className="mt-8 flex items-center gap-2 text-blue-500 font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      Solicitar Orçamento <Zap size={14} />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROVA SOCIAL / STATUS */}
        <section id="resultados" className="mt-40 mb-20 relative px-6 md:px-0">
          <div className="absolute inset-0 bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />
          <motion.div 
            {...fadeIn}
            className="relative p-12 md:p-24 rounded-[4rem] border border-zinc-800/50 bg-zinc-900/10 backdrop-blur-md overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-600/50 to-transparent" />
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-center">Dashboard Ativo</h2>
            <p className="mt-6 text-zinc-500 uppercase tracking-[0.4em] text-xs font-bold text-center">Status do Sistema: <span className="text-blue-500">Online</span></p>
            
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
              <div className="flex flex-col items-center">
                <span className="text-7xl font-black bg-gradient-to-b from-blue-500 to-blue-800 bg-clip-text text-transparent">0</span>
                <span className="text-zinc-600 uppercase text-[10px] tracking-[0.3em] font-black mt-4">Unidades Integradas</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-7xl font-black bg-gradient-to-b from-purple-500 to-purple-800 bg-clip-text text-transparent">0</span>
                <span className="text-zinc-600 uppercase text-[10px] tracking-[0.3em] font-black mt-4">Nodos Ativos</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-7xl font-black bg-gradient-to-b from-emerald-500 to-emerald-800 bg-clip-text text-transparent">$0</span>
                <span className="text-zinc-600 uppercase text-[10px] tracking-[0.3em] font-black mt-4">Recursos Gerados</span>
              </div>
            </div>
            <p className="mt-20 text-zinc-600 text-xs text-center font-mono opacity-50">SINCRONIZANDO COM O MERCADO DIGITAL...</p>
          </motion.div>
        </section>

        {/* CTA FINAL */}
        <section id="cta-final" className="mb-40 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-16 md:p-28 rounded-[5rem] bg-gradient-to-b from-blue-600 to-blue-900 shadow-[0_0_50px_rgba(37,99,235,0.3)] relative overflow-hidden flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/20 rounded-full blur-[80px]" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-black/40 rounded-full blur-[80px]" />
            
            <h2 className="relative z-10 text-5xl md:text-8xl font-black uppercase tracking-tighter mb-10 leading-[0.9]">Inicie Sua<br/>Dominação</h2>
            <p className="relative z-10 text-white/80 mb-14 max-w-2xl mx-auto text-xl font-medium">
              O futuro não espera. Enquanto você hesita, seus concorrentes estão escalando. 
              Tome o controle do seu destino digital agora mesmo.
            </p>
            <Button 
              size="lg" 
              className="relative z-10 rounded-full px-14 py-10 text-2xl font-black bg-white text-blue-600 hover:scale-105 transition-all shadow-[0_15px_30px_rgba(0,0,0,0.3)] uppercase"
              onClick={() => window.open("https://wa.me/21990380384", "_blank")}
            >
              <MessageSquare className="w-8 h-8 mr-3 fill-blue-600/10" />
              Chamar no Protocolo
            </Button>
          </motion.div>
        </section>

        <footer className="mt-auto py-16 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-zinc-900 text-zinc-600 text-[10px] uppercase font-black tracking-[0.4em]">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center font-mono text-zinc-300">S</div>
            © {new Date().getFullYear()} sitesstudio.br • SETOR COMERCIAL
          </div>
          <div className="flex gap-12 font-black">
            <a href="https://www.instagram.com/sitesstudio.br" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">INSTAGRAM</a>
            <span className="hover:text-purple-500 transition-colors cursor-pointer">LINKEDIN</span>
            <span className="hover:text-emerald-500 transition-colors cursor-pointer">GITHUB</span>
          </div>
        </footer>

        {/* Floating Actions */}
        <div className="fixed bottom-10 right-10 z-50 flex flex-col gap-6">
          <motion.a
            initial={{ opacity: 0, scale: 0, y: 50 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: [0, -10, 0] 
            }}
            transition={{ 
              opacity: { duration: 0.5 },
              scale: { duration: 0.5 },
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
            href="https://www.instagram.com/sitesstudio.br"
            target="_blank"
            rel="noopener noreferrer"
            className="w-15 h-15 bg-white text-black rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(255,255,255,0.2)] hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            <Instagram className="w-8 h-8" />
          </motion.a>

          <motion.a
            initial={{ opacity: 0, scale: 0, y: 50 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: [0, -15, 0] 
            }}
            transition={{ 
              opacity: { delay: 0.2, duration: 0.5 },
              scale: { delay: 0.2, duration: 0.5 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
            }}
            href="https://wa.me/21990380384"
            target="_blank"
            rel="noopener noreferrer"
            className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-[0_0_50px_rgba(37,99,235,0.6)] hover:scale-110 transition-transform relative group"
          >
            <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-30" />
            <MessageCircle className="w-12 h-12 fill-white/10" />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
