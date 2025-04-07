import React from 'react';
import MainLayout from '../components/layout/MainLayout';

const badges = [
  {
    id: 1,
    icon: '🌟',
    name: 'Event registerd',
    description: 'You made your first registeration!',
  },
  {
    id: 2,
    icon: '🔥',
    name: '5 Bookings Streak',
    description: 'Booked 5 slots without a break.',
  },
  {
    id: 3,
    icon: '📚',
    name: 'Library Lover',
    description: 'Booked a study room 3 times.',
  },
  {
    id: 4,
    icon: '🦉',
    name: 'Night Owl',
    description: 'study till 12PM .',
  },
];

export default function BadgesPage() {
  return (
    <MainLayout>
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">🎖️ Your Achievements</h1>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg border border-gray-200 transition"
            >
              <div className="text-5xl mb-4">{badge.icon}</div>
              <h2 className="text-xl font-semibold text-gray-700">{badge.name}</h2>
              <p className="text-sm text-gray-500 mt-1">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
