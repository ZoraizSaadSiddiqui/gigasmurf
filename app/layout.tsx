import type { Metadata } from 'next';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import BootstrapClient from './BootstrapClient';
import { siteContent } from '@/content/site-content';

export const metadata: Metadata = {
  ...siteContent.metadata,
  keywords: [...siteContent.metadata.keywords],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
