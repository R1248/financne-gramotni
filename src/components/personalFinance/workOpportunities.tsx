import { useContext, type FC } from "react";
import { TiArrowBack } from "react-icons/ti";
import seedrandom from "seedrandom";
import { cities } from "~/cities";
import { CharacterContext } from "~/contexts/charactersContext";
import { companies } from "~/laborMarket";

type WorkOpportunitiesProps = {
  setRouter: (router: string) => void;
};

type JobOpportunity = {
  position: string;
  salary: number;
  education: string;
  city: string;
  company: string;
};

const WorkOpportunities: FC<WorkOpportunitiesProps> = ({ setRouter }) => {
  const character = useContext(CharacterContext);
  const seed = `${character.id}-${character.age}`;
  const rng = seedrandom(seed);
  const reachableCities = findCitiesWithinDistance(
    cities,
    character.residence,
    60,
  );
  function findJobOpportunitiesInCities(selectedCities: string[]) {
    const availableJobs: JobOpportunity[] = [];

    companies.map((company) => {
      company.jobOpportunities.forEach((job) => {
        job.cities.map(
          (city) =>
            selectedCities.includes(city) &&
            rng() < 0.05 &&
            availableJobs.push({
              position: job.position,
              salary: job.salary,
              education: job.education,
              company: company.name,
              city, // Each object has a single city now
            }),
        );
      });
    });

    return availableJobs;
  }
  const workOpportunitiesInCites =
    findJobOpportunitiesInCities(reachableCities);
  return (
    <div className="relative flex h-auto flex-grow flex-col overflow-hidden rounded-2xl bg-white p-20">
      <button
        className="absolute right-7 top-7 z-10 rounded border border-solid border-black p-1"
        onClick={() => setRouter("home")}
      >
        <TiArrowBack className="text-4xl" />
      </button>
      <div className="h-96 w-auto overflow-scroll">
        {workOpportunitiesInCites.map((job, index) => (
          <div
            key={index}
            className="flex flex-row border-b border-solid border-gray-300 p-4"
          >
            <h2 className="text-xl font-bold">{job.position}</h2>
            <p className="text-lg">Salary: {job.salary}</p>
            <p className="text-lg">Company: {job.company}</p>
            <p className="text-lg">City: {job.city}</p>
          </div>
        ))}
      </div>
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
