'use client';

import { useState } from 'react';
import AvatarCard from './components/AvatarCard';
import CreateAvatarModal from './components/CreateAvatarModal';

// Dummy data for avatars
const dummyAvatars = [
  {
    id: 1,
    name: "Alex AI",
    image: "https://reqres.in/img/faces/1-image.jpg"
  },
  {
    id: 2,
    name: "Sam Bot",
    image: "https://reqres.in/img/faces/2-image.jpg"
  },
  {
    id: 3,
    name: "Max Virtual",
    image: "https://reqres.in/img/faces/3-image.jpg"
  }
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = (id: number) => {
    console.log(`Editing avatar ${id}`);
  };

  return (
    <main className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Welcome to AI Avatar Dashboard</h1>
          <p className="mt-2 text-lg text-gray-600">Manage your AI avatars with ease</p>
        </div>

        {/* Avatar Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyAvatars.map((avatar) => (
            <AvatarCard
              key={avatar.id}
              name={avatar.name}
              image={avatar.image}
              onEdit={() => handleEdit(avatar.id)}
            />
          ))}
        </div>

        {/* Floating Action Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="fixed bottom-8 right-8 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>

        {/* Create Avatar Modal */}
        <CreateAvatarModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </main>
  );
} 