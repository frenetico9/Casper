
import React from 'react';
import Section from './Section';
import Card from './Card';
import type { RoadmapItem } from '../types';
import { GhostIcon, RocketIcon, UsersIcon, PuzzleIcon } from '../constants';

const roadmapItems: RoadmapItem[] = [
  {
    id: 'fase1',
    phase: 'Fase 1',
    title: 'O Início Fantasmagórico',
    description: 'Lançamento na pump.fun, criação dos canais sociais e formação da nossa incrível comunidade inicial. É aqui que a magia começa!',
    icon: <GhostIcon className="w-10 h-10" />,
    color: 'text-teal-500',
  },
  {
    id: 'fase2',
    phase: 'Fase 2',
    title: 'Aparições Amigáveis',
    description: 'Crescimento da comunidade através de marketing criativo (memes, concursos!), parcerias iniciais e fortalecimento da nossa presença online. Vamos mostrar ao mundo quem somos!',
    icon: <UsersIcon className="w-10 h-10" />,
    color: 'text-sky-500',
  },
  {
    id: 'fase3',
    phase: 'Fase 3',
    title: 'Expansão Etérea',
    description: 'A comunidade vota nas primeiras utilidades e projetos para Casper Coin. Exploração de listagens em corretoras (CEX/DEX) e iniciativas de maior impacto, tudo decidido em conjunto.',
    icon: <RocketIcon className="w-10 h-10" />,
    color: 'text-emerald-500',
  },
  {
    id: 'fase4',
    phase: 'Fase 4',
    title: 'Além do Véu: O Futuro é Nosso!',
    description: 'O futuro de Casper Coin é um livro aberto, escrito por todos nós. Implementação de governança comunitária (Casper DAO?) e desenvolvimento contínuo baseado nas decisões da comunidade. O céu (ou o além?) é o limite!',
    icon: <PuzzleIcon className="w-10 h-10" />,
    color: 'text-purple-500',
  },
];

const Roadmap: React.FC = () => {
  return (
    <Section id="roadmap" title="Nosso Mapa Assombrado (Roadmap)" subtitle="Guiado pela comunidade, para a comunidade. Este é apenas o começo da nossa jornada fantástica!">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {roadmapItems.map((item, index) => (
          <Card key={item.id} className="flex flex-col h-full border-t-4 border-casper-teal">
            <div className={`mb-4 ${item.color}`}>
              {React.cloneElement(item.icon, { className: "w-12 h-12", "aria-hidden": "true" })}
            </div>
            <h4 className={`text-sm font-semibold uppercase ${item.color} mb-1`}>{item.phase}</h4>
            <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
            <p className="text-slate-600 text-sm flex-grow">{item.description}</p>
          </Card>
        ))}
      </div>
       <p className="text-center text-slate-500 mt-12 text-sm">
        *Lembre-se: este roadmap é flexível e será moldado pela nossa comunidade. Sua voz é fundamental!
      </p>
    </Section>
  );
};

export default Roadmap;
