import React from 'react';

interface AvatarCardProps {
  name: string;
  image: string;
  onEdit: () => void;
}

export default function AvatarCard({ name, image, onEdit }: AvatarCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
      <div className="aspect-square relative">
        <img
          src={image}
          alt={`${name}'s avatar`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <button
          onClick={onEdit}
          className="mt-2 w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors"
        >
          Edit
        </button>
      </div>
    </div>
  );
} 