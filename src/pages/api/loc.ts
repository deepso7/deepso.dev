import { geolocation } from "@vercel/edge";

export const config = {
  runtime: "edge", // this is a pre-requisite
  regions: ["iad1"], // only execute this function on iad1
};

export default function (request: Request) {
  const geo = geolocation(request);
  // You can also get the city using dot notation on the function
  // const city = geolocation(request).city;
  return new Response(JSON.stringify(geo), {
    headers: { "content-type": "application/json" },
  });
}
