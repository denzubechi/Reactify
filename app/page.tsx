import React from 'react';
import './globals.css'
import Hero from './components/hero/Hero';
import Footer from './components/footer/Footer';
import MasonryGallery from './components/gallery/gallery';
import CTA from './components/cta/cta';

export default function Home() {


	return (
		<>
			<Hero/>
			<MasonryGallery/>
			<CTA/>
			<Footer/>
		</>
	);
}
