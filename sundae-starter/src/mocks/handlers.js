import { http, HttpResponse } from "msw";

let orderNumber = null;

export const handlers = [
  http.get("http://localhost:3030/scoops", () => {
    return HttpResponse.json([
      { name: "Chocolate", imagePath: "images/chocolate.png" },
      { name: "Vanilla", imagePath: "images/vanilla.png" },
    ]);
  }),
  http.get("http://localhost:3030/toppings", () => {
    return HttpResponse.json([
      { name: "Cherries", imagePath: "images/cherries.png" },
      { name: "M&Ms", imagePath: "images/m-and-ms.png" },
      { name: "Hot fudge", imagePath: "images/hot-fudge.png" },
    ]);
  }),
  http.post("http://localhost:3030/order", () => {
    orderNumber = Math.floor(Math.random() * 1000000);
    return HttpResponse.json({ orderNumber });
  }),
  http.get("http://localhost:3030/order", () => {
    return HttpResponse.json({ orderNumber });
  }),
];
