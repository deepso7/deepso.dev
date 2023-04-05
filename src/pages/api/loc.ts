import { NextRequest, NextResponse } from "next/server";

export const config = {
  runtime: "edge", // this is a pre-requisite
};

export default (req: NextRequest) => {
  return NextResponse.json({
    geo: req.geo,
  });
};
