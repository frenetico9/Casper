
import React from 'react';
import Section from './Section';
import Button from './Button';
import { SOCIAL_LINKS } from '../constants';
import { UsersIcon } from '../constants'; // Re-using for consistency

// Placeholder icons for social media, ideally use actual brand icons
const TelegramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className || "w-6 h-6"}><path d="M9.78 18.65l.28-4.23.02-.25c-.04-.03-.09-.05-.14-.05s-.09.02-.14.05L5.14 16.1c-.1.09-.01.25.12.28l4.52 1.27zm2.93.24l1.04-4.94c.04-.16-.1-.3-.25-.24l-6.32 2.43c-.16.06-.16.3 0 .36l4.48 1.71 1.05 4.94c.04.16.25.16.3 0zM21.36 3.22a.75.75 0 00-1.02-.64L2.74 9.04c-.16.06-.16.3 0 .37l5.44 1.96 1.96 5.44c.06.16.3.16.37 0l6.46-16.6c.04-.12-.02-.24-.1-.31z"/></svg>
);
const TwitterIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className || "w-6 h-6"}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);


const Community: React.FC = () => {
  return (
    <Section id="comunidade" title="Junte-se à Nossa Assombração Amigável!" subtitle="A comunidade Casper te espera de braços (ou tentáculos?) abertos!">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <UsersIcon className="w-20 h-20 text-casper-teal mx-auto mb-4" />
          <p className="text-lg text-slate-600">
            O coração de Casper Coin bate forte graças à nossa comunidade. Participe das discussões, compartilhe suas ideias para memes fantasmagóricos, e ajude a moldar o futuro do nosso fantasminha camarada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <a href={SOCIAL_LINKS.TELEGRAM} target="_blank" rel="noopener noreferrer" className="block group">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-sky-300/50 hover:border-sky-500 border-2 border-transparent transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center space-x-4">
                <TelegramIcon className="w-12 h-12 text-sky-500" />
                <div>
                  <h4 className="text-xl font-semibold text-sky-600">Telegram</h4>
                  <p className="text-slate-500">Nosso quartel-general fantasma! Notícias, bate-papo e muita zoeira.</p>
                </div>
              </div>
            </div>
          </a>
          <a href={SOCIAL_LINKS.TWITTER} target="_blank" rel="noopener noreferrer" className="block group">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-blue-300/50 hover:border-blue-500 border-2 border-transparent transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center space-x-4">
                <TwitterIcon className="w-12 h-12 text-blue-500" />
                <div>
                  <h4 className="text-xl font-semibold text-blue-600">Twitter / X</h4>
                  <p className="text-slate-500">Fique por dentro das últimas novidades e memes espectrais em 280 caracteres.</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="text-center mt-12">
            <Button href={SOCIAL_LINKS.PUMP_FUN} target="_blank" rel="noopener noreferrer" variant="primary" size="lg">
                Veja Casper na Pump.fun
            </Button>
        </div>
      </div>
    </Section>
  );
};

export default Community;
