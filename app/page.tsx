import { CustomFilter, Hero, SearchBar, CarCard } from "@/components";
import { fetchCars } from "@/utils";

export default async function Home() {
  const allCars = await fetchCars({
    manufacturer: "",
    year: 2020,
    fuel: "",
    limit: 2,
    model: "",
  });

  // Log the response to check the data
  console.log("All cars data:", allCars);

  const isDataEmpty = !allCars || !Array.isArray(allCars) || allCars.length < 1;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__car-wrapper">
              {allCars?.map((car, index) => (
                <CarCard key={index} car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>Try adjusting your filters or try again later.</p>
          </div>
        )}
      </div>
    </main>
  );
}
