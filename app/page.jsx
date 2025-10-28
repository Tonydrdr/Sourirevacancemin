'use client';
import dynamic from 'next/dynamic';
import { useMemo, useState, useCallback } from 'react';

import { listings } from '../lib/listings';
import Lightbox from '../components/Lightbox';

// Carte chargée côté client uniquement
const Map = dynamic(() => import('../components/Map'), { ssr: false });

export default function Home() {
  const [lightbox, setLightbox] = useState({ open:false, images:[], index:0 });

  const openLightbox = useCallback((images, index=0) => {
    setLightbox({ open:true, images, index });
  }, []);
  const closeLightbox = useCallback(() => setLightbox(s => ({...s, open:false})), []);
  const next = useCallback(() => setLightbox(s => ({...s, index:(s.index+1)%s.images.length })), []);
  const prev = useCallback(() => setLightbox(s => ({...s, index:(s.index-1+s.images.length)%s.images.length })), []);

  const items = useMemo(() => listings, []);

  return (
    <main style={{display:'grid', gridTemplateColumns:'1.25fr 1fr', gap:20, padding:20}}>
      {/* Colonne annonces */}
      <div style={{display:'grid', gap:16, alignContent:'start'}}>
        <h1 style={{margin:'6px 0 0 2px'}}>Explorer</h1>

        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(260px, 1fr))', gap:16}}>
          {items.map(it => (
            <article key={it.id} style={{border:'1px solid #eee', borderRadius:16, overflow:'hidden', background:'#fff'}}>
              <div style={{position:'relative', aspectRatio:'4/3', cursor:'zoom-in'}} onClick={() => openLightbox(it.images, 0)}>
                <img src={it.images[0]} alt={it.title} style={{width:'100%', height:'100%', objectFit:'cover'}}/>
                <div style={{
                  position:'absolute', bottom:8, right:8, background:'rgba(0,0,0,.55)', color:'#fff',
                  padding:'4px 8px', borderRadius:12, fontSize:12
                }}>
                  {it.images.length} photos
                </div>
              </div>
              <div style={{padding:12}}>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', gap:8}}>
                  <a href={`/bien/${it.id}`} style={{fontWeight:600, color:'#111', textDecoration:'none'}}>{it.title}</a>
                  <span style={{opacity:.7}}>{it.city}, {it.country}</span>
                </div>
                <div style={{marginTop:6}}>
                  <b>{it.price} €</b> <span style={{opacity:.7}}>/ nuit</span>
                </div>
                <div style={{display:'flex', gap:8, marginTop:10}}>
                  {it.images.slice(1,4).map((src, i) => (
                    <img key={src} src={src} alt="" onClick={() => openLightbox(it.images, i+1)}
                         style={{width:64, height:64, objectFit:'cover', borderRadius:8, cursor:'zoom-in', border:'1px solid #eee'}}/>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Colonne carte */}

{/* Colonne carte */}
<aside style={{ position:'sticky', top:16, alignSelf:'start' }}>
  {/* Conteneur strict : dimension, arrondis, overflow masqué */}
  <div style={{
    position:'relative',
    width:'100%',
    height:'78vh',
    minHeight:480,
    borderRadius:12,
    overflow:'hidden',
    border:'1px solid #e5e7eb',
    background:'#f6f7f9'
  }}>
    <Map items={items} />
  </div>
</aside>

      <Lightbox
        open={lightbox.open}
        images={lightbox.images}
        index={lightbox.index}
        onClose={closeLightbox}
        onPrev={prev}
        onNext={next}
      />
    </main>
  );
}
