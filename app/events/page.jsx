'use client';

import { useUser } from '@clerk/nextjs';
import { supabase } from '../../lib/supabaseClient';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import EventCard from '../../components/EventCard';

export default function EventsPage() {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const tierOrder = ['free', 'silver', 'gold', 'platinum'];
  const userTier = user?.publicMetadata?.tier || 'free';
  const userTierIndex = tierOrder.indexOf(userTier);


  useEffect(() => {
    if (isLoaded && !user) {
      router.push('/');
    }
  }, [user, isLoaded]);

  //  Fetch events
  useEffect(() => {
    async function fetchEvents() {
      if (!user) return;
      setLoading(true);

      const allowedTiers = tierOrder.slice(0, userTierIndex + 1);

      const { data, error } = await supabase
        .from('events')
        .select('*')
        .in('tier', allowedTiers)
        .order('event_date', { ascending: true });

      if (error) {
        console.error('Supabase error:', error);
      } else {
        console.log('Fetched events:', data);
        setEvents(data);
      }

      setLoading(false);
    }

    fetchEvents();
  }, [user]);

  if (!user || !isLoaded) return null;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Available Events ({userTier.toUpperCase()})</h2>
      {loading ? (
        <p className="text-center">Loading events...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard key={event.id} event={event} userTierIndex={userTierIndex} />
          ))}
        </div>
      )}
    </div>
  );
}
