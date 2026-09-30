import {Reveal,Heading} from './ui';
const W=[['01','Professional Experts'],['02','Premium Products'],['03','Hygienic Environment'],['04','Personalized Care']];
export default function WhyChooseUs(){return <section className="bg-blush/40 py-16"><div className="mx-auto max-w-7xl px-4"><Heading script="Why" title="Choose Us"/>
<div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{W.map(([n,t],i)=><Reveal key={n} delay={i*.1}><div className="card p-8 text-center hover:-translate-y-1"><span className="font-serif text-4xl text-gold">{n}</span><h3 className="mt-3 font-serif text-xl">{t}</h3></div></Reveal>)}</div></div></section>;}
