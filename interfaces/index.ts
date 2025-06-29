import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Key, ReactNode } from "react";

export interface PropertyProps {
  id: Key | null | undefined;
  imageUrl: string | StaticImport;
  location: ReactNode;
  title: string;
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}