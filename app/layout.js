import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';

export const metadata = {
  title: 'Tier-Based Event Showcase',
  description: 'Psypher AI Screening Assignment',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <main className="p-4">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
