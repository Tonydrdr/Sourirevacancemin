export const dynamic = 'force-dynamic';

function money(n){ return new Intl.NumberFormat('fr-FR', {style:'currency', currency:'EUR'}).format(n); }

export default function Page({ params, searchParams }){
  const total = 1260; // € démo
  const pct = 7, min = 3, cap = 29;
  const fee = Math.max(Math.min(total * pct/100, cap), min);
  return (
    <main style={{fontFamily:'system-ui, -apple-system, Segoe UI, Roboto', padding:24, maxWidth:720, margin:'0 auto'}}>
      <h1 style={{fontSize:28}}>Paiement — réservation démo</h1>
      <p>ID réservation : <code>{params.id}</code></p>
      <div style={{border:'1px solid #e5e5e5', borderRadius:12, padding:16, marginTop:12}}>
        <p>Montant du séjour : <b>{money(total)}</b></p>
        <p style={{opacity:.8}}>Frais de plateforme : <b>{pct}%</b> (min {money(min)} — plafonné à {money(cap)})</p>
        <p>Total estimé : <b>{money(total + fee)}</b></p>
      </div>
      <p style={{marginTop:16, opacity:.7}}>Démo : le bouton de paiement est inactif sur cette version minimale.</p>
      <a href="/bien/villa-bonheur" style={{display:'inline-block', marginTop:10}}>← Retour à l’annonce</a>
    </main>
  );
}
