
import React from 'react';
import { APP_NAME, SOCIAL_LINKS } from '../constants';
import CasperFriendlyGhostLogo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-slate-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8 items-center">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2 mb-2">
              <CasperFriendlyGhostLogo size={40} />
              <span className="font-brand text-2xl text-white">{APP_NAME}</span>
            </div>
            <p className="text-sm text-slate-400 text-center md:text-left">O fantasminha camarada do blockchain.</p>
          </div>
          
          <div>
            <h5 className="text-lg font-semibold text-white mb-3 text-center md:text-left">Links Rápidos</h5>
            <ul className="space-y-2 text-center md:text-left">
              <li><a href="#sobre" className="hover:text-casper-teal transition-colors">Sobre</a></li>
              <li><a href="#roadmap" className="hover:text-casper-teal transition-colors">Roadmap</a></li>
              <li><a href="#comprar" className="hover:text-casper-teal transition-colors">Como Comprar</a></li>
              <li><a href={SOCIAL_LINKS.PUMP_FUN} target="_blank" rel="noopener noreferrer" className="hover:text-casper-teal transition-colors">Pump.fun</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-semibold text-white mb-3 text-center md:text-left">Conecte-se</h5>
             <div className="flex justify-center md:justify-start space-x-4">
                <a href={SOCIAL_LINKS.TELEGRAM} target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="text-slate-400 hover:text-sky-400 transition-colors">
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M9.78 18.65l.28-4.23.02-.25c-.04-.03-.09-.05-.14-.05s-.09.02-.14.05L5.14 16.1c-.1.09-.01.25.12.28l4.52 1.27zm2.93.24l1.04-4.94c.04-.16-.1-.3-.25-.24l-6.32 2.43c-.16.06-.16.3 0 .36l4.48 1.71 1.05 4.94c.04.16.25.16.3 0zM21.36 3.22a.75.75 0 00-1.02-.64L2.74 9.04c-.16.06-.16.3 0 .37l5.44 1.96 1.96 5.44c.06.16.3.16.37 0l6.46-16.6c.04-.12-.02-.24-.1-.31z"/></svg>
                </a>
                <a href={SOCIAL_LINKS.TWITTER} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-slate-400 hover:text-blue-400 transition-colors">
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
             </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700 pt-8 text-center">
          <p className="text-sm text-slate-400">
            &copy; {currentYear} {APP_NAME}. Todos os direitos (assombrados) reservados.
          </p>
          <p className="text-xs text-slate-500 mt-2">
            Lembre-se: Criptomoedas são investimentos de alto risco. Invista com responsabilidade e apenas o que você pode perder. Casper Coin é uma memecoin criada para diversão e comunidade.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
