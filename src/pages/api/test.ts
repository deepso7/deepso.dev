import { NextRequest, NextResponse } from "next/server";

export const config = {
  runtime: "edge",
};

const serverUrls = {
  mumbai: {
    url: "https://mumbai.example.com",
    lat: "19.0748",
    long: "72.8856",
  },
  us: { url: "https://us.example.com", lat: "41.2591", long: "-95.8517" },
} as const;

export default (req: NextRequest) => {
  const geo = req.geo;

  if (!geo || !geo.latitude || !geo.longitude)
    return NextResponse.json({ url: serverUrls["mumbai"].url, default: true });

  const distances = Object.keys(serverUrls).map((key) => {
    const server = serverUrls[key as keyof typeof serverUrls];
    const distance = getDistanceFromLatLonInKm(
      Number(geo.latitude),
      Number(geo.longitude),
      Number(server.lat),
      Number(server.long)
    );
    return { key, distance };
  });

  const closestServer = distances.sort((a, b) => a.distance - b.distance)[0];

  return NextResponse.json({
    url: serverUrls[(closestServer?.key as keyof typeof serverUrls) || "mumbai"]
      .url,
    distances,
    default: false,
  });
};

const getDistanceFromLatLonInKm = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) => {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1); // deg2rad below
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
};

const deg2rad = (deg: number) => {
  return deg * (Math.PI / 180);
};
