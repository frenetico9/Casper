
import React from 'react';
import Section from './Section';
import Button from './Button';
import Card from './Card';
import { SOCIAL_LINKS } from '../constants';

const HowToBuy: React.FC = () => {
  return (
    <Section id="comprar" title="Como se Juntar à Família Casper?" subtitle="Adquirir Casper Coin é mais fácil que assustar uma criança (brincadeirinha, somos camaradas!)." className="bg-sky-100">
      <div className="max-w-3xl mx-auto text-center">
        <Card className="mb-8 shadow-xl">
          <h3 className="text-2xl font-semibold text-casper-teal mb-4">Compre na Pump.fun!</h3>
          <p className="text-lg text-slate-700 mb-6">
            Casper Coin foi lançado de forma justa e transparente na plataforma <strong className="text-sky-600">Pump.fun</strong>. É o lugar perfeito para pegar seus Caspers enquanto eles ainda são filhotes de fantasma!
          </p>
          <img src="https://picsum.photos/seed/pumpfun/600/300" alt="Pump.fun illustration" className="rounded-lg mb-6 mx-auto shadow-md" />
          <p className="text-slate-600 mb-6">
            Pump.fun permite lançamentos de moedas de forma simples e segura, com liquidez inicial bloqueada. Perfeito para projetos comunitários como o nosso!
          </p>
          <Button href={SOCIAL_LINKS.PUMP_FUN} target="_blank" rel="noopener noreferrer" variant="primary" size="lg">
            Ir para Pump.fun e Comprar Casper
          </Button>
           <p className="mt-4 text-xs text-slate-500">
            (Certifique-se de ter uma carteira Solana como Phantom e SOL para as transações)
          </p>
        </Card>
        
        <div className="mt-12">
            <h4 className="text-xl font-semibold text-slate-700 mb-3">Por que Pump.fun?</h4>
            <p className="text-slate-600">
                Escolhemos a Pump.fun para o lançamento inicial do Casper Coin por sua simplicidade e foco na comunidade. Ela permite que projetos como o nosso ganhem tração de forma orgânica e justa. Após atingir um certo volume, a moeda pode migrar para plataformas maiores como Raydium, com liquidez garantida.
            </p>
        </div>
      </div>
    </Section>
  );
};

export default HowToBuy;
