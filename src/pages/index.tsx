import { Button } from "../components/ui/button";
import { GithubIcon } from "../components/ui/github";
import { LinkedinIcon } from "../components/ui/linkedin";
import { TwitterIcon } from "../components/ui/twitter";

export default async function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-12 pt-16">
      <h1 className="text-2xl font-bold mx-auto">Deepso.</h1>

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
              <a
                className="text-sm font-light italic underline"
                href="/writing/hi"
              >
                {" "}
                Hi.{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-between w-full space-x-4">
        <ul className="horizontal space-x-4">
          <li>
            <Button size="icon-lg" variant="secondary">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/deepso7"
              >
                <GithubIcon />
              </a>
            </Button>
          </li>
          <li>
            <Button size="icon-lg" variant="secondary">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/deepso7"
              >
                <TwitterIcon />
              </a>
            </Button>
          </li>
          <li>
            <Button size="icon-lg" variant="secondary">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/deepso7"
              >
                <LinkedinIcon />
              </a>
            </Button>
          </li>
        </ul>

        {/* <ModeToggle client:load /> */}
      </div>
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: "static",
  } as const;
};
