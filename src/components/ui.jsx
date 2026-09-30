import {useState} from 'react';import {motion} from 'framer-motion';
export const Reveal=({children,delay=0,className=''})=><motion.div className={className} initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-60px'}} transition={{duration:.7,delay}}>{children}</motion.div>;
export const Img=({src,alt,className=''})=>{const [bad,setBad]=useState(false);
return bad?<div role="img" aria-label={alt} className={`bg-gradient-to-br from-blush to-cream ${className}`}/>:<img src={src} alt={alt} loading="lazy" onError={()=>setBad(true)} className={className}/>;};
export const Heading=({script,title,center=true})=><Reveal className={center?'text-center':''}>
<p className="font-script text-4xl text-rose">{script}</p><h2 className="font-serif text-3xl md:text-4xl">{title}</h2>
<div className={`mt-3 flex items-center gap-2 ${center?'justify-center':''}`}><span className="h-px w-16 bg-gold"/><span className="text-rose">♥</span><span className="h-px w-16 bg-gold"/></div></Reveal>;
