# Tier-Based Event Showcase

This is a Next.js project built as part of the Psypher AI screening assignment. It showcases events based on user subscription tiers (Free, Silver, Gold, Platinum), with secure authentication, tier-based access control, and dynamic event rendering.

---

##  Tech Stack

-  Next.js 14 (App Router)
-  Clerk.dev for authentication
-  Supabase for database
-  Tailwind CSS for UI

---

## Features

-  Auth-protected routing with Clerk
-  Tier-based event visibility (Free, Silver, Gold, Platinum)
-  Sorted event list with date and image support
-  Supabase integration for live data

## Setup Instructions 

```inside git bash
git clone https://github.com/your-username/Tier-Based-Event.git
cd Tier-Based-Event

npm install

**Create a .env.local file in the root and add the following:
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

npm run dev

## Sample Supabase  Data
{
  "title": "React Basics Workshop",
  "description": "An introductory workshop on React.",
  "event_date": "2025-08-05",
  "tier": "free",
  "image": "https://placehold.co/600x400"
}

