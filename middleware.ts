import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: [
    '/((?!_next|.*\\..*).*)', // Protects all routes except static files
  ],
};
