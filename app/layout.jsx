export const metadata = {
  title: 'Sourire & Vacances',
  description: 'Démo de location entre confrères',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        {/* CSS Leaflet pour la carte */}
<link
  rel="stylesheet"
  href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
  integrity="sha256-o9N1j7kGStb6Q2lJkGgGZ4Z1T1FQ0xS2JbZg9QxX0LE="
  crossOrigin=""
/>
      </head>
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto' }}>
        {children}
      </body>
    </html>
  );
}
