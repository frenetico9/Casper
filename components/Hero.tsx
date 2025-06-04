import React from 'react';
import CasperFriendlyGhostLogo from './Logo';
import Button from './Button';
import Section from './Section'; // Added import for Section
import { APP_NAME, SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  return (
    <Section className="bg-gradient-to-br from-sky-100 via-teal-50 to-emerald-100 min-h-[calc(100vh-80px)] flex items-center justify-center" id="inicio">
      <div className="text-center">
        <div className="flex justify-center mb-8 animate-bounce-slow">
          <CasperFriendlyGhostLogo size={160} />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="font-brand gradient-text">{APP_NAME}</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-700 mb-10 max-w-2xl mx-auto">
          O fantasminha mais camarada do universo cripto! <br className="hidden md:block" /> Junte-se à nossa comunidade e vamos assombrar o mercado juntos!
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4">
          <Button href={SOCIAL_LINKS.PUMP_FUN} target="_blank" rel="noopener noreferrer" size="lg" variant="primary">
            Comprar na Pump.fun
          </Button>
          <Button href="#sobre" size="lg" variant="ghost">
            Saber Mais
          </Button>
        </div>
      </div>
      {/* Removed <style jsx global> block as animations are now in tailwind.config */}
    </Section>
  );
};

export default Hero;
