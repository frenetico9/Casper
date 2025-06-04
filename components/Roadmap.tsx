
import React from 'react';
import Section from './Section';
import Card from './Card';
import type { RoadmapItem } from '../types';
import { GhostIcon, RocketIcon, UsersIcon, PuzzleIcon } from '../constants';

const roadmapItems: RoadmapItem[] = [
  {
    id: 'phase1',
    phase: 'Phase 1',
    title: 'The Spooky Start',
    description: 'Launch on pump.fun, creation of social channels, and formation of our amazing initial community. This is where the magic begins!',
    icon: <GhostIcon className="w-10 h-10" />,
    color: 'text-teal-500',
  },
  {
    id: 'phase2',
    phase: 'Phase 2',
    title: 'Friendly Apparitions',
    description: 'Community growth through creative marketing (memes, contests!), initial partnerships, and strengthening our online presence. Let\'s show the world who we are!',
    icon: <UsersIcon className="w-10 h-10" />,
    color: 'text-sky-500',
  },
  {
    id: 'phase3',
    phase: 'Phase 3',
    title: 'Ethereal Expansion',
    description: 'The community votes on the first utilities and projects for Casper Coin. Exploration of exchange listings (CEX/DEX) and higher-impact initiatives, all decided together.',
    icon: <RocketIcon className="w-10 h-10" />,
    color: 'text-emerald-500',
  },
  {
    id: 'phase4',
    phase: 'Phase 4',
    title: 'Beyond the Veil: The Future is Ours!',
    description: 'The future of Casper Coin is an open book, written by all of us. Implementation of community governance (Casper DAO?) and continuous development based on community decisions. The sky (or the beyond?) is the limit!',
    icon: <PuzzleIcon className="w-10 h-10" />,
    color: 'text-purple-500',
  },
];

const Roadmap: React.FC = () => {
  return (
    <Section id="roadmap" title="Our Haunted Map (Roadmap)" subtitle="Guided by the community, for the community. This is just the beginning of our fantastic journey!">
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
        *Remember: this roadmap is flexible and will be shaped by our community. Your voice is crucial!
      </p>
    </Section>
  );
};

export default Roadmap;
