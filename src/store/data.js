export const orders = [
  {
    orderId: "@1",
    items: [
      { name: "Cheezy Burger", quantity: 2, price: "$30" },
      { name: "Sandwitch", quantity: 1, price: "$40" },
      { name: "Yummy Pizza", quantity: 2, price: "$30" },
    ],
    pickup_Address: "The pick up address",
    delivery_Address: "The delivery address",
    status:
      "PREPARING || TRANSIT || DECLINED || DRIVER_PENDING || ACCEPTED || COMPLETED",
  },
  {
    orderId: "@2",
    items: [
      { name: "Cheezy Burger", quantity: 2, price: "$30" },
      { name: "Sandwitch", quantity: 1, price: "$40" },
      { name: "Yummy Pizza", quantity: 2, price: "$30" },
    ],
    pickup_Address: "The pick up address",
    delivery_Address: "The delivery address",
    status:
      "PREPARING || TRANSIT || DECLINED || DRIVER_PENDING || ACCEPTED || COMPLETED",
  },
];

export const restuarants = [
  {
    id: "#1",
    name: "Mama Iyaba",
    location: [3.454333, 4.345333],
    cusines: ["#1", "#2", "#3"],
    address: "The Restuarant Address",
    rating: "*****",
  },
  {
    id: "#2",
    name: "Humbmart",
    location: [3.354333, 3.345333],
    cusines: ["#1", "#2", "#3"],
    address: "The Restuarant Address",
    rating: "****",
  },
  {
    id: "#3",
    name: "Chicken Republic",
    location: [3.954333, 3.345333],
    cusines: ["#1", "#2", "#3"],
    address: "The Restuarant Address",
    rating: "**",
  },
  {
    id: "#4",
    name: "Tantalizer",
    location: [3.054333, 3.235333],
    cusines: ["#1", "#2", "#3"],
    address: "The Restuarant Address",
    rating: "**",
  },
];

export const categories = [
  {
    id: "#2",
    name: "Ramen",
    description: "The Description",
    goodFor: "Breakfast",
    image: require("../assets/second.jpg"),
  },
  {
    id: "#3",
    name: "Burger",
    description: "The Description",
    goodFor: "Wifi",
    image: require("../assets/third.jpg"),
  },
  {
    id: "#1",
    name: "Sushi",
    description: "The Description",
    goodFor: "Lunch",
    image: require("../assets/first.jpg"),
  },
  {
    id: "#4",
    name: "Chinese",
    description: "The Description",
    goodFor: "Out-Door Sitting",
    image: require("../assets/fourth.jpg"),
  },
  {
    id: "#5",
    name: "Ramen",
    description: "The Description",
    goodFor: "Breakfast",
    image: require("../assets/fifth.jpg"),
  },
  {
    id: "#6",
    name: "Burger",
    description: "The Description",
    goodFor: "Wi-fi",
    image: require("../assets/sixth.jpg"),
  },
];

export const foods = [
  {
    id: "$#1",
    name: "Shawama",
    category: "Burger",
    price: 40,
    restuarant: "Gamine",
    rating: "****",
    image: require("../assets/fifth.jpg"),
    ingredients: ["Egg", "Tomato", "Onion", "Carrot"],
    goodFor: ["Breakfast", "Wifi", "Out Door Sitting", "Lunch"],
  },
  {
    id: "$#2",
    name: "Egwusi & Amala",
    category: "Swallow",
    price: 50,
    restuarant: "Mama Iyabo",
    rating: "****",
    image: require("../assets/fourth.jpg"),
    ingredients: ["Egwusi", "Meat", "Onion", "Pepper"],
    goodFor: ["Breakfast", "Free Wifi", "Lunch", "Dinner"],
  },
  {
    id: "$#3",
    name: "Fried Rice",
    category: "BreakFast",
    price: 20,
    restuarant: "Bouche",
    rating: "****",
    image: require("../assets/third.jpg"),
    ingredients: ["Rice", "Tomato", "Onion", "Carrot"],
    goodFor: ["Breakfast", "Wifi", "Out Door Sitting", "Lunch"],
  },
  {
    id: "$#4",
    name: "Jellof Rice",
    category: "Lunch",
    price: 90,
    restuarant: "Chicken Republic",
    rating: "***",
    image: require("../assets/first.jpg"),
    ingredients: ["Rice", "Tomato", "Onion", "Carrot", "Chicken"],
    goodFor: ["Breakfast", "Wifi", "Out Door Sitting", "Lunch"],
  },
  {
    id: "$#5",
    name: "Pizza",
    category: "Lunch",
    price: 30,
    restuarant: "Humbmart",
    rating: "****",
    image: require("../assets/second.jpg"),
    ingredients: ["Egg", "Floor", "Tomato", "Onion", "Carrot"],
    goodFor: ["Breakfast", "Wifi", "Out Door Sitting", "Lunch"],
  },
];
