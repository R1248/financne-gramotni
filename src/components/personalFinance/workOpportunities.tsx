import { type FC } from "react";
import { TiArrowBack } from "react-icons/ti";
import { cities } from "~/cities";

type WorkOpportunitiesProps = {
  setRouter: (router: string) => void;
};

const WorkOpportunities: FC<WorkOpportunitiesProps> = ({ setRouter }) => {
  return (
    <div className="relative flex h-auto flex-grow overflow-hidden rounded-2xl bg-white">
      <button
        className="absolute right-7 top-7 z-10 rounded border border-solid border-black p-1"
        onClick={() => setRouter("home")}
      >
        <TiArrowBack className="text-4xl" />
      </button>
      {findCitiesWithinDistance(cities, "Praha", 100).map((city, i) => (
        <div key={i} className="flex h-12 w-full flex-row">
          <p className="ml-2 text-2xl">{city}</p>
        </div>
      ))}
    </div>
  );
};

type City = string;

interface Route {
  city: City;
  distance: number;
}

const findCitiesWithinDistance = (
  graph: Record<City, Route[]>,
  start: City,
  maxDistance: number,
) => {
  const pq: [City, number][] = []; // [city, distance]
  const distances: Record<City, number> = {}; // Distance from start to each city
  const reachableCities: City[] = [];

  // Initialize all distances to infinity except for the start city
  for (const city in graph) {
    distances[city] = Infinity;
  }
  distances[start] = 0;
  pq.push([start, 0]);

  while (pq.length > 0) {
    // Sort the priority queue by distance and extract the city with the smallest distance
    pq.sort((a, b) => a[1] - b[1]);
    const [currentCity, currentDistance] = pq.shift()!;

    // If the current distance exceeds the max distance, stop processing further
    if (currentDistance > maxDistance) {
      continue;
    }

    // Add current city to the list of reachable cities
    reachableCities.push(currentCity);

    // Explore all neighboring cities
    for (const route of graph[currentCity]!) {
      const distance = currentDistance + route.distance;

      // If a shorter path to the neighbor is found
      if (distance < distances[route.city]!) {
        distances[route.city] = distance;
        pq.push([route.city, distance]); // Add the neighbor to the priority queue
      }
    }
  }

  return reachableCities;
};

export default WorkOpportunities;
