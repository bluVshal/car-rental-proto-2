export const cars = [
  {
    name: "BMW 4 Series Convertible",
    type: "Luxury",
    price: "$118/day",
    img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1400&q=80",
    seats: 4,
    fuel: "Petrol",
    speed: "250 km/h",
    tag: "Premium Choice",
  },
  {
    name: "Mercedes-Benz GLC",
    type: "SUV",
    price: "$96/day",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1400&q=80",
    seats: 5,
    fuel: "Hybrid",
    speed: "230 km/h",
    tag: "Family Comfort",
  },
  {
    name: "Audi A5 Sportback",
    type: "Executive",
    price: "$82/day",
    img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1400&q=80",
    seats: 5,
    fuel: "Petrol",
    speed: "240 km/h",
    tag: "Business Ready",
  },
  {
    name: "Range Rover Velar",
    type: "Premium SUV",
    price: "$145/day",
    img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1400&q=80",
    seats: 5,
    fuel: "Diesel",
    speed: "217 km/h",
    tag: "Island Explorer",
  },
  {
    name: "Porsche 911 Carrera",
    type: "Sports",
    price: "$260/day",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80",
    seats: 2,
    fuel: "Petrol",
    speed: "293 km/h",
    tag: "Weekend Icon",
  },
  {
    name: "Toyota Corolla Hybrid",
    type: "Economy",
    price: "$48/day",
    img: "https://images.unsplash.com/photo-1623869675781-80aa31012a5a?auto=format&fit=crop&w=1400&q=80",
    seats: 5,
    fuel: "Hybrid",
    speed: "180 km/h",
    tag: "Best Value",
  },
];

export const pages = ["Home", "Fleet", "Booking", "Details", "Services", "About", "FAQ", "Contact", "Login"];

export const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};
