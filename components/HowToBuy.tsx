
import React from 'react';
import Section from './Section';
import Button from './Button';
import Card from './Card';
import { SOCIAL_LINKS } from '../constants';

const HowToBuy: React.FC = () => {
  return (
    <Section id="how-to-buy" title="How to Join the Casper Family?" subtitle="Getting Casper Coin is easier than scaring a child (just kidding, we're friendly!)." className="bg-sky-100">
      <div className="max-w-3xl mx-auto text-center">
        <Card className="mb-8 shadow-xl">
          <h3 className="text-2xl font-semibold text-casper-teal mb-4">Buy on Pump.fun!</h3>
          <p className="text-lg text-slate-700 mb-6">
            Casper Coin was launched fairly and transparently on the <strong className="text-sky-600">Pump.fun</strong> platform. It's the perfect place to grab your Caspers while they're still baby ghosts!
          </p>
          <img src="https://freeimage.host/i/gemini-generated-image-1f8cft1f8cft1f8c.FdYbeKQ" alt="Guide on how to buy Casper Coin on Pump.fun" className="rounded-lg mb-6 mx-auto shadow-md w-full max-w-md object-contain" />
          <p className="text-slate-600 mb-6">
            Pump.fun allows for simple and secure coin launches, with initial liquidity locked. Perfect for community projects like ours!
          </p>
          <Button href={SOCIAL_LINKS.PUMP_FUN} target="_blank" rel="noopener noreferrer" variant="primary" size="lg">
            Go to Pump.fun and Buy Casper
          </Button>
           <p className="mt-4 text-xs text-slate-500">
            (Make sure you have a Solana wallet like Phantom and SOL for transactions)
          </p>
        </Card>
        
        <div className="mt-12">
            <h4 className="text-xl font-semibold text-slate-700 mb-3">Why Pump.fun?</h4>
            <p className="text-slate-600">
                We chose Pump.fun for the initial launch of Casper Coin due to its simplicity and community focus. It allows projects like ours to gain traction organically and fairly. After reaching a certain volume, the coin can migrate to larger platforms like Raydium, with guaranteed liquidity.
            </p>
        </div>
      </div>
    </Section>
  );
};

export default HowToBuy;