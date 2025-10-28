export const metadata = {
  title: 'Sourire & Vacances',
  description: 'Démo de location entre confrères',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body style={{margin:0, fontFamily:'system-ui, -apple-system, Segoe UI, Roboto'}}>
        {children}
      </body>
    </html>
  );
}
