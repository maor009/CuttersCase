//API

//Calling the api's endpoint to fetch data
export const SALONS_ENDPOINT = "https://api.test.cutters.no/v2/salons";

import { Salon } from "../types/salon";

export const fetchSalons = async (): Promise<Salon[]> => {
  const response = await fetch(SALONS_ENDPOINT);
  if (!response.ok) throw new Error("Failed to fetch salons");
  const data = await response.json();
  return data.filter((salon: Salon) => salon.visibleInMap);
};