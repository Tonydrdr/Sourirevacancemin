export const metadata = { title: 'Villa Bonheur — Sourire & Vacances' };

export default function Page(){
  return (
    <main style={{fontFamily:'system-ui, -apple-system, Segoe UI, Roboto', padding:24, maxWidth:980, margin:'0 auto'}}>
      <h1 style={{fontSize:36, marginBottom:8}}>Villa Bonheur</h1>
      <p style={{opacity:.7, marginTop:0}}>Démo entre confrères — location entre chirurgiens-dentistes</p>

      <div style={{display:'grid', gap:12, gridTemplateColumns:'2fr 1fr'}}>
        <img src="/hero.jpg" alt="Villa bonheur" style={{width:'100%', borderRadius:16}}/>
        <div style={{display:'grid', gap:12}}>
          <img src="/p2.jpg" alt="Photo 2" style={{width:'100%', borderRadius:12}}/>
          <img src="/p3.jpg" alt="Photo 3" style={{width:'100%', borderRadius:12}}/>
        </div>
      </div>

      <section style={{marginTop:24, lineHeight:1.6}}>
        <h2>À propos</h2>
        <p>Maison lumineuse, 3 chambres, 2 sdb, à 10 min de la plage. Wi‑Fi fibre, clim, piscine.</p>
        <ul>
          <li>Capacité : 6 voyageurs</li>
          <li>Prix indicatif : 180 € / nuit</li>
          <li>Politique d’annulation : Flexible (démo)</li>
        </ul>
      </section>

      <a href="/pay/2b3c4d5e-6f70-4111-8444-1234abcdef56?t=pay_demo_123"
         style={{display:'inline-block', marginTop:20, padding:'12px 16px', borderRadius:12, background:'#111', color:'#fff', textDecoration:'none'}}>
        Réserver (démo)
      </a>
    </main>
  );
}
