
import { MapPin, Star, Clock } from "lucide-react";

export default function RestaurantCard({ restaurant }) {
  return (
    <article className="restaurant-card overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="image-wrapper relative h-48">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="food-image h-full w-full object-cover"
          loading="lazy"
        />

        <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-800 shadow">
          {restaurant.category}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-lg font-bold text-slate-900">
            {restaurant.name}
          </h2>

          <span className="flex shrink-0 items-center gap-1 rounded-lg bg-amber-50 px-2 py-1 text-sm font-semibold text-amber-700">
            <Star size={15} fill="currentColor" />
            {restaurant.rating}
          </span>
        </div>

        <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-500">
          <MapPin size={15} />
          {restaurant.location}
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
          <span className="flex items-center gap-1.5 text-sm text-slate-500">
            <Clock size={16} />
            {restaurant.deliveryTime}
          </span>

          <span className="text-lg font-extrabold text-emerald-700">
            Rs. {restaurant.price}
          </span>
        </div>
      </div>
    </article>
  );
}
