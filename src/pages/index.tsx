import { Link } from "waku";

import { allWritings } from "../../.content-collections/generated";
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

        <ul className="flex flex-col items-center justify-center space-y-2">
          {allWritings.map((w) => (
            <li key={w.slug}>
              <Button
                variant="link"
                render={
                  <Link
                    to={`/writing/${w.slug}`}
                    className="text-sm font-light italic underline"
                  >
                    {w.title}
                  </Link>
                }
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: "static",
  } as const;
};
