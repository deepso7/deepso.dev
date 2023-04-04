import { geolocation } from '@vercel/edge';

export const config = {
  runtime: 'edge',
};

export default function (request: Request) {
  const { city } = geolocation(request);
  // You can also get the city using dot notation on the function
  // const city = geolocation(request).city;
  return new Response(`<h1>Your location is ${city}</h1>`, {
    headers: { 'content-type': 'text/html' },
  });
}
