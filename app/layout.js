import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import BootstrapClient from './BootstrapClient';

export const metadata = {
  title: 'Gigasmurf - Premium Gaming Marketplace',
  description: 'Buy, sell, and boost gaming accounts securely. The ultimate marketplace for gamers.',
  keywords: ['gaming marketplace', 'game accounts', 'rank boosting', 'valorant', 'fortnite', 'league of legends'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
