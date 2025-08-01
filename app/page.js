'use client';

import { SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center px-4">
      <h1 className="text-4xl font-bold mb-4 text-indigo-700">🎉 Welcome to Tier-Based Event Showcase</h1>
      <p className="text-gray-600 text-lg max-w-xl mb-8">
        Unlock access to exclusive events tailored to your membership tier.
        Sign in to explore events curated just for you.
      </p>

      <SignedOut>
        <div className="flex gap-4">
          <SignInButton aftersigninurl="/events" mode="modal" >
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton aftersigninurl="/events" mode="modal" >
            <button className="border border-indigo-600 text-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-50 transition">
              Sign Up
            </button>
          </SignUpButton>
        </div>
      </SignedOut>

      <SignedIn> 
        <p className="text-green-700 mt-6">
          You are already signed in. Go to{' '}
          <a href="/events" className="underline text-indigo-600 hover:text-indigo-800">
            your events dashboard →
          </a>
        </p>
      </SignedIn>
    </div>
  );
}
