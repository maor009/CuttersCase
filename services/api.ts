//API base and endpoint 

// services/api.ts
export const SALONS_ENDPOINT = "https://api.test.cutters.no/v2/salons";

import { Salon } from "../types/salon";

export const fetchSalons = async (): Promise<Salon[]> => {
  const response = await fetch(SALONS_ENDPOINT);
  if (!response.ok) throw new Error("Failed to fetch salons");
  const data = await response.json();
  return data.filter((salon: Salon) => salon.visibleInMap);
};