
import { useMemo, useState } from "react";
import { Search, UtensilsCrossed, SlidersHorizontal, X } from "lucide-react";
import RestaurantCard from "./components/ResturentCard";
import Footer from "./components/Footer";

const restaurants = [
  {
    id: 1,
    name: "Burger House",
    category: "Fast Food",
    rating: 4.8,
    price: 550,
    location: "Sawari, Buner",
    deliveryTime: "20–30 min",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Pizza Point",
    category: "Fast Food",
    rating: 4.5,
    price: 1200,
    location: "Mingora, Swat",
    deliveryTime: "30–40 min",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Buner Kitchen",
    category: "Traditional",
    rating: 4.9,
    price: 400,
    location: "Daggar, Buner",
    deliveryTime: "15–25 min",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    name: "Peshawar Chapli",
    category: "Traditional",
    rating: 4.7,
    price: 350,
    location: "Peshawar",
    deliveryTime: "20–30 min",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    name: "Sweet Corner",
    category: "Desserts",
    rating: 4.6,
    price: 300,
    location: "Sawari, Buner",
    deliveryTime: "15–20 min",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    name: "Crispy Chicken",
    category: "Fast Food",
    rating: 4.3,
    price: 650,
    location: "Mingora, Swat",
    deliveryTime: "25–35 min",
    image:
      "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 7,
    name: "Burger House",
    category: "Fast Food",
    rating: 4.8,
    price: 550,
    location: "Sawari, Buner",
    deliveryTime: "20–30 min",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 8,
    name: "Crispy Chicken",
    category: "Fast Food",
    rating: 4.3,
    price: 650,
    location: "Mingora, Swat",
    deliveryTime: "25–35 min",
    image:
      "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&auto=format&fit=crop&q=80",
  },
    {
    id: 9,
    name: "Sweet Corner",
    category: "Desserts",
    rating: 4.6,
    price: 300,
    location: "Sawari, Buner",
    deliveryTime: "15–20 min",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop&q=80",
  },
];

const categories = [
  "All",
  "Fast Food",
  "Traditional",
  "Desserts",
];

export default function App() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sortByRating, setSortByRating] = useState(false);

  const filteredRestaurants = useMemo(() => {
    let result = restaurants.filter((restaurant) => {
      const matchesCategory =
        category === "All" ||
        restaurant.category === category;

      const matchesSearch =
        restaurant.name
          .toLowerCase()
          .includes(search.trim().toLowerCase()) ||
        restaurant.location
          .toLowerCase()
          .includes(search.trim().toLowerCase());

      return matchesCategory && matchesSearch;
    });

    if (sortByRating) {
      result = [...result].sort(
        (a, b) => b.rating - a.rating
      );
    }

    return result;
  }, [category, search, sortByRating]);

  function clearFilters() {
    setCategory("All");
    setSearch("");
    setSortByRating(false);
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-emerald-800 text-white">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-5 py-5 sm:px-8">
          <div className="rounded-xl bg-white/15 p-3">
            <UtensilsCrossed size={28} />
          </div>

          <div>
            <h1 className="text-2xl font-extrabold sm:text-3xl">
              FoodFinder
            </h1>
            <p className="mt-1 text-sm text-emerald-100">
              Find your next favorite restaurant
            </p>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        {/* Intro */}
        <section className="mb-8">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
            Explore restaurants
          </p>

          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Delicious food, your way.
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-slate-500">
            Search restaurants, select your favorite category,
            and discover great places to eat.
          </p>
        </section>

        {/* Search */}
        <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
          <label
            htmlFor="restaurant-search"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Search by restaurant or location
          </label>

          <div className="relative">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              id="restaurant-search"
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="e.g. Burger House or Buner..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-12 pr-12 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-slate-500 hover:bg-slate-200"
              >
                <X size={17} />
              </button>
            )}
          </div>

          {/* Categories */}
          <div className="mt-5 flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                type="button"
                key={item}
                onClick={() => setCategory(item)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  category === item
                    ? "bg-emerald-700 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-800"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Sorting */}
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
            <p className="text-sm text-slate-500">
              Use the filters to find a restaurant.
            </p>

            <button
              type="button"
              onClick={() => setSortByRating((current) => !current)}
              className={`flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold transition ${
                sortByRating
                  ? "border-emerald-700 bg-emerald-50 text-emerald-800"
                  : "border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              <SlidersHorizontal size={17} />
              {sortByRating ? "Top rated first ✓" : "Sort by rating"}
            </button>
          </div>
        </section>

        {/* Results */}
        <section className="mt-9">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                {category === "All" ? "All Restaurants" : category}  
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                {filteredRestaurants.length} restaurant
                {filteredRestaurants.length !== 1 ? "s" : ""} found
              </p>
            </div>

            {(category !== "All" || search || sortByRating) && (
              <button
                type="button"
                onClick={clearFilters}
                className="text-sm font-semibold text-emerald-700 hover:underline"
              >
                Clear all filters
              </button>
            )}
          </div>

          {filteredRestaurants.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredRestaurants.map((restaurant) => (
                <RestaurantCard
                  key={restaurant.id}
                  restaurant={restaurant}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-16 text-center">
              <Search
                size={38}
                className="mx-auto text-slate-300"
              />

              <h3 className="mt-4 text-lg font-bold text-slate-800">
                No restaurants found
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Try another name or choose a different category.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="mt-5 rounded-xl bg-emerald-700 px-5 py-3 font-semibold text-white hover:bg-emerald-800"
              >
                Reset filters
              </button>
            </div>
          )}
        </section>
      </div>

      <Footer />
    </main>
  );
}
