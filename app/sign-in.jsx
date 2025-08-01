import { ClerkProvider } from '@clerk/nextjs';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
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
          <header className="p-4 flex justify-between items-center bg-gray-100 shadow-sm">
            <h1 className="text-xl font-semibold">🎫 Tier Events</h1>
            <div className="flex gap-3">
              <SignedOut>
                <SignInButton />
                <SignUpButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </header>
          <main className="p-4">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
