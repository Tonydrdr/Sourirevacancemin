'use client';
export default function GlobalError({ error, reset }) {
  return (
    <html><body style={{padding:24}}>
      <h1>Oups, une erreur</h1>
      <pre style={{whiteSpace:'pre-wrap'}}>{String(error)}</pre>
      <button onClick={() => reset()} style={{marginTop:12}}>Réessayer</button>
    </body></html>
  );
}
