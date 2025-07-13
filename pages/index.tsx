// pages/index.tsx
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Pill from '../components/Pill';
import { FILTER_OPTIONS, HERO_IMAGE } from '../constants';
import { PropertyProps } from '../interfaces';

const Home = () => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('https://your-api.com/api/properties');
        if (!response.ok) {
          throw new Error('Failed to fetch properties');
        }
        const data = await response.json();
        setProperties(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // Optional: Filter properties based on selected filter (e.g., category)
  const filteredProperties = selectedFilter
    ? properties.filter((p) => p.title.includes(selectedFilter))
    : properties;

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
        {loading && <p>Loading properties...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading &&
          !error &&
          filteredProperties.map((property: PropertyProps) => (
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
                <p className="text-sm text-gray-500 mt-1">Rating: ⭐️ {property.rating}</p>
              </div>
            </div>
          ))}
      </section>
    </div>
  );
};

export default Home;
