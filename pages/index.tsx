// pages/index.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import { PROPERTYLISTINGSAMPLE, FILTER_OPTIONS, HERO_IMAGE } from '../constants';
import Pill from '../components/Pill';
import { PropertyProps } from '../interfaces';

const Home = () => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold">Find your favorite place here!</h1>
          <p className="text-lg md:text-xl mt-2">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* FILTER SECTION */}
      <section className="p-6 flex flex-wrap gap-3 justify-center bg-gray-50">
        {FILTER_OPTIONS.map((filter) => (
          <Pill
            key={filter}
            label={filter}
            selected={selectedFilter === filter}
            onClick={() => setSelectedFilter(filter === selectedFilter ? null : filter)}
          />
        ))}
      </section>

      {/* LISTING SECTION */}
      <section className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROPERTYLISTINGSAMPLE.map((property: PropertyProps) => (
          <div
            key={property.id}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300"
          >
            <Image
              src={property.imageUrl}
              alt={property.title}
              width={400}
              height={250}
              className="object-cover w-full h-48"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{property.title}</h2>
              <p className="text-gray-600">{property.location}</p>
              <p className="mt-2 text-blue-600 font-bold">${property.price}/night</p>
              <p className="text-sm text-gray-500 mt-1">Rating: ⭐️ 4.8</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
