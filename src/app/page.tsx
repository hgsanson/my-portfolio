"use client";

import Link from "next/link";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const skills = ["TypeScript", "React", "Next.js", "Node.js", "Docker", "PostgreSQL", "Redis", "GraphQL", "Tailwind CSS", "Git",]

export default function Home() {
  return (
    <div>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 m-auto flex justify-center">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Badge className="mb-4 bg-blue-600/10 text-cyan-500 hover:bg-blue-700/20 transition-colors">
                Frontend Developer
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Hello, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-400">
                  Giovani
                </span>
                !
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Desenvolvedor frontend especializado em criar experiências digitais modernas e interativas com React,
                TypeScript e Node.js.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="px-3 py-1 border-cyan-400/40">
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="gap-2 text-zinc-50 font-semibold bg-gradient-to-r from-cyan-600 to-blue-500 hover:opacity-90"
                >
                  <Link href="/projetos">
                    Ver Projetos <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <Link href="/contato">Contato</Link>
                </Button>
              </div>

              <div className="flex gap-4 mt-8">
                <Link
                  href="https://github.com/hgsanson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="w-6 h-6" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="https://linkedin.com/in/hgsanson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="mailto:hgsanson@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-6 h-6" />
                  <span className="sr-only">Gmail</span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative mx-auto"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-400/40">
                <Image
                  src="https://github.com/hgsanson.png"
                  alt="Sua foto"
                  width={320}
                  height={320}
                  className="object-cover"
                  priority
                />
              </div>

              <div className="absolute -inset-1 bg-gradient-to-tr from-purple-600 to-cyan-400 rounded-full blur-xl opacity-30 -z-10"></div>

              <div className="absolute -bottom-4 -right-4 bg-background p-4 rounded-2xl border border-border shadow-lg">
                <div className="text-sm font-medium">Experiência</div>
                <div className="text-2xl font-bold">3+ anos</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 relative flex justify-center">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16 flex flex-col items-center">
            <Badge className="mb-4 text-md bg-blue-600/10 text-cyan-500 hover:bg-blue-700/20 transition-colors">
              Sobre mim
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-[650px]">
              Tranformando ideias em experiências digitais
            </h2>
            <p className="text-lg text-muted-foreground">
              Sou um desenvolvedor frontend apaixonado por criar interfaces modernas e intuitivas. Com experiência em
              React, TypeScript e Node.js, desenvolvo soluções web escaláveis e de alta performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Frontend Development",
                description:
                  "Especializado em React, TypeScript e frameworks modernos para criar interfaces responsivas e interativas.",
                icon: "💻",
              },
              {
                title: "Backend Integration",
                description: "Experiência com Node.js, PostgreSQL e GraphQL para criar APIs robustas e eficientes.",
                icon: "⚙️",
              },
              {
                title: "UI/UX Design",
                description: "Foco em experiências de usuário intuitivas e designs modernos com atenção aos detalhes.",
                icon: "🎨",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-accent/50 p-6 rounded-xl border border-border hover:border-purple-500/30 transition-all hover:shadow-lg hover:shadow-purple-500/5"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))
            }
          </div>
        </div>
      </section>
    </div>
  );
}
