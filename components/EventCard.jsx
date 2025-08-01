export default function EventCard({ event, userTierIndex }) {
  const tierColors = {
    free: 'bg-gray-200 text-black',
    silver: 'bg-slate-500 text-white',
    gold: 'bg-yellow-500 text-white',
    platinum: 'bg-purple-700 text-white',
  };

  const tierIndex = ['free', 'silver', 'gold', 'platinum'].indexOf(event.tier);
  const locked = tierIndex > userTierIndex;

  return (
    <div className="border rounded-lg shadow-md overflow-hidden bg-white">
      <img
        src={event.image_url || '/placeholder.png'}
        alt={event.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{event.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{event.description}</p>
        <p className="text-sm text-gray-500 mb-2">{new Date(event.event_date).toLocaleDateString()}</p>
        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${tierColors[event.tier]}`}>
          {event.tier.toUpperCase()}
        </span>

        {locked && (
          <p className="mt-2 text-sm text-red-600 font-medium">Upgrade to access this event 🚫</p>
        )}
      </div>
    </div>
  );
}