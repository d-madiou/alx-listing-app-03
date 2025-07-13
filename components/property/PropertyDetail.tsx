// components/property/PropertyDetail.tsx
import { PropertyProps } from "@/interfaces";
import Image from "next/image";

interface PropertyDetailProps {
  property: PropertyProps;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Image Section */}
        <div className="w-full h-[400px] relative">
          <Image
            src={property.imageUrl}
            alt={property.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow"
          />
        </div>

        {/* Property Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
          <p className="text-gray-600 mb-1">{property.location}</p>
          <p className="text-blue-600 text-xl font-semibold mb-4">
            ${property.price} / night
          </p>

          <div className="mb-4">
            <h2 className="text-lg font-semibold">Offers:</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Beds: {property.offers?.bed}</li>
              <li>Showers: {property.offers?.shower}</li>
              <li>Occupants: {property.offers?.occupants}</li>
            </ul>
          </div>

          <p className="text-yellow-500 font-medium">Rating: ⭐ {property.rating}</p>

          {property.discount && (
            <p className="mt-2 text-red-500 font-bold">
              Discount: {property.discount}%
            </p>
          )}
        </div>
      </div>

      {/* Categories */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {property.category?.map((cat: string, index: number) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
