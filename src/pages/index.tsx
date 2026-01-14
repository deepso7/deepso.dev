import { Link } from "waku";

import { Button } from "../components/ui/button";

export default async function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-12 pt-16">
      <h1 className="mx-auto text-2xl font-bold">Deepso.</h1>

      <div className="flex flex-col items-center justify-center space-y-4">
        <p className="text-sm font-light italic">
          Exploring new things at a constant pace.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center space-y-4">
        <h2 className="text-lg font-medium">writing.</h2>

        <div>
          <ul className="space-y-2">
            <li>
              <Button
                variant="link"
                render={
                  <Link
                    to="/writing/hi"
                    className="text-sm font-light italic underline"
                  >
                    hi
                  </Link>
                }
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: "static",
  } as const;
};
