//Data for salons

export interface Salon {
    id: number;
    name: string;
    address: string;
    postalCode: string;
    postalPlace: string;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    location: {
      key: string;
      name: string;
    };
    country: string;
    visibleInMap: boolean;
  }