
import React from 'react';
import Section from './Section';
import Card from './Card';
import CasperFriendlyGhostLogo from './Logo'; // Re-using for thematic consistency

const About: React.FC = () => {
  return (
    <Section id="about" title="Who is Casper Coin?" subtitle="More than a memecoin, a ghostly adventure!">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center">
          <CasperFriendlyGhostLogo size={200} className="opacity-80" />
        </div>
        <div className="space-y-6">
          <p className="text-lg text-slate-600 leading-relaxed">
            <strong>Casper Coin</strong> was born from the union of two incredible ideas: the revolutionary technology of <strong>Kaspa</strong> and the timeless charm of <strong>Casper the Friendly Ghost</strong>. We're not just another digital coin; we are a vibrant community, ready to have fun and build something special in the crypto universe.
          </p>
          <Card className="bg-teal-50">
            <h4 className="text-lg font-semibold text-casper-teal mb-2">Our Inspiration:</h4>
            <p>Just like Casper the Friendly Ghost loves making friends, our memecoin aims to create bonds, promote unity, and, of course, bring a bit of lightheartedness and fun to the volatile crypto market. Kaspa's robustness inspires us to dream big, but with our feet (or should we say... chains?) on the ground.</p>
          </Card>
          <Card className="bg-sky-50">
            <h4 className="text-lg font-semibold text-sky-600 mb-2">Community First:</h4>
            <p>We believe the true strength of a memecoin lies in its community. Here at Casper Coin, you're not just an investor; you're part of the ghost family! Your ideas, suggestions, and enthusiasm are what drive us.</p>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default About;
