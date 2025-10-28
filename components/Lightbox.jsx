'use client';
import { useEffect } from 'react';

export default function Lightbox({ open, images, index, onClose, onPrev, onNext }) {
  if (!open) return null;

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, onPrev, onNext]);

  return (
    <div
      onClick={onClose}
      style={{
        position:'fixed', inset:0, background:'rgba(0,0,0,.85)',
        display:'flex', alignItems:'center', justifyContent:'center', zIndex:1000
      }}
    >
      <img
        src={images[index]}
        alt=""
        style={{maxWidth:'90vw', maxHeight:'90vh', borderRadius:12, boxShadow:'0 10px 40px rgba(0,0,0,.5)'}}
        onClick={(e)=>e.stopPropagation()}
      />
      {/* Controls */}
      <button onClick={(e)=>{e.stopPropagation(); onPrev();}}
              style={btn(-1)} aria-label="Précédente">‹</button>
      <button onClick={(e)=>{e.stopPropagation(); onNext();}}
              style={btn(1)} aria-label="Suivante">›</button>
      <button onClick={(e)=>{e.stopPropagation(); onClose();}}
              style={closeBtn} aria-label="Fermer">✕</button>
    </div>
  );
}

const btn = (side) => ({
  position:'fixed', top:'50%', transform:'translateY(-50%)',
  [side < 0 ? 'left':'right']: 24,
  width:48, height:48, borderRadius:24, border:'none',
  background:'rgba(255,255,255,.15)', color:'#fff', fontSize:28, cursor:'pointer'
});

const closeBtn = {
  position:'fixed', top:16, right:16, width:40, height:40, borderRadius:20,
  border:'none', background:'rgba(255,255,255,.15)', color:'#fff', fontSize:20, cursor:'pointer'
};
