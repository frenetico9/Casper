
import React from 'react';
import Section from './Section';
import Card from './Card';
import CasperFriendlyGhostLogo from './Logo'; // Re-using for thematic consistency

const About: React.FC = () => {
  return (
    <Section id="sobre" title="Quem é o Casper Coin?" subtitle="Mais que uma memecoin, uma aventura fantasmagórica!">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center">
          <CasperFriendlyGhostLogo size={200} className="opacity-80" />
        </div>
        <div className="space-y-6">
          <p className="text-lg text-slate-600 leading-relaxed">
            <strong>Casper Coin</strong> nasceu da união de duas ideias incríveis: a tecnologia revolucionária da <strong>Kaspa</strong> e o carisma atemporal do <strong>Casper, o Fantasminha Camarada</strong>. Não somos apenas mais uma moeda digital; somos uma comunidade vibrante, pronta para se divertir e construir algo especial no universo das criptomoedas.
          </p>
          <Card className="bg-teal-50">
            <h4 className="text-lg font-semibold text-casper-teal mb-2">Nossa Inspiração:</h4>
            <p>Assim como o fantasminha Casper adora fazer amigos, nossa memecoin busca criar laços, promover a união e, claro, trazer um pouco de leveza e diversão para o volátil mercado cripto. A robustez da Kaspa nos inspira a sonhar alto, mas com os pés (ou seriam... correntes?) no chão.</p>
          </Card>
          <Card className="bg-sky-50">
            <h4 className="text-lg font-semibold text-sky-600 mb-2">Comunidade em Primeiro Lugar:</h4>
            <p>Acreditamos que a verdadeira força de uma memecoin reside em sua comunidade. Aqui no Casper Coin, você não é apenas um investidor, é parte da família fantasma! Suas ideias, sugestões e entusiasmo são o que nos impulsiona.</p>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default About;
