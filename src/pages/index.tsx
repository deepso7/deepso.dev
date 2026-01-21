import { Link } from "waku";

import { allWritings } from "../../.content-collections/generated";

export default async function HomePage() {
  return (
    <div className="flex flex-col space-y-12 pt-16">
      <h1 className="text-2xl font-bold">Deepso.</h1>

      <div className="flex flex-col space-y-4">
        <p className="text-sm font-light italic">
          Exploring new things at a constant pace.
        </p>
      </div>

      <div className="flex flex-col space-y-4">
        <h2 className="text-lg font-medium">writing.</h2>

        <ul className="flex flex-col space-y-2">
          {allWritings.map((w) => (
            <li key={w.slug}>
              <Link
                to={`/writing/${w.slug}`}
                className="text-sm font-light italic underline hover:text-primary"
              >
                {w.title}
              </Link>
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
