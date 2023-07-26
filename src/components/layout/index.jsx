import React from 'react';
import Hero from '../hero';
import Features from '../features';
import Portfolio from '../portfolio';
import Resume from '../resume';

export default function Layout() {
  return (
    <div>
      <Hero />
      <Features />
      <Portfolio />
      <Resume />
    </div>
  );
}
