import type { NextPage } from "next";
import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import cn from "classnames";

import Container from "../components/Container";

const people = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
];

const Home: NextPage = () => {
  const [selected, setSelected] = useState<{ id: number; name: string } | null>(
    null
  );
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? people
      : people.filter(person =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <Container>
      <h1 className="font-rotterin text-4xl text-[#F6F6F6]">Blog</h1>
      <p className="mt-2 text-[#D1D2D3]">
        In my blog, I’ve written about topics such as Web development, Web3,
        DevOps and much more.
      </p>

      <div className="py-8">
        <Combobox value={selected} onChange={setSelected}>
          <div className="relative">
            <div className="relative w-full cursor-default overflow-hidden rounded-lg text-left">
              <div className="absolute inset-y-0 flex items-center pl-2">
                <SearchIcon aria-hidden="true" />
              </div>
              <Combobox.Input
                className="h-11 w-full border-none bg-[#18181C] py-2 pl-10 pr-10 text-sm text-[#929497]"
                displayValue={(person: any) => person?.name}
                onChange={event => setQuery(event.target.value)}
                placeholder="Search"
              />
              <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Combobox.Button>
            </div>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery("")}
            >
              <Combobox.Options className="absolute mt-2 max-h-60 w-full overflow-auto rounded-md bg-[#18181C] py-1 text-base ring-2 ring-[#23262F] focus:outline-none">
                {filteredPeople.length === 0 && query !== "" ? (
                  <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                    Nothing found.
                  </div>
                ) : (
                  filteredPeople.map(person => (
                    <Combobox.Option
                      key={person.id}
                      className={({ active }) =>
                        cn(
                          "relative cursor-default select-none py-2 pl-4 pr-4 text-[#F6F6F6]",
                          active && "bg-[#1C1E24]"
                        )
                      }
                      value={person}
                    >
                      {({ selected, active }) => (
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {person.name}
                        </span>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>
      </div>
    </Container>
  );
};

const SearchIcon: React.FC<JSX.IntrinsicElements["svg"]> = props => (
  <svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.001 17.5L14.376 13.875M16.3343 9.16667C16.3343 12.8486 13.3495 15.8333 9.66764 15.8333C5.98574 15.8333 3.00098 12.8486 3.00098 9.16667C3.00098 5.48477 5.98574 2.5 9.66764 2.5C13.3495 2.5 16.3343 5.48477 16.3343 9.16667Z"
      stroke="#929497"
      stroke-width="1.66667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const ChevronUpDownIcon: React.FC<JSX.IntrinsicElements["svg"]> = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path
      fill-rule="evenodd"
      d="M11.47 4.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 01-1.06 1.06L12 6.31 8.78 9.53a.75.75 0 01-1.06-1.06l3.75-3.75zm-3.75 9.75a.75.75 0 011.06 0L12 17.69l3.22-3.22a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 010-1.06z"
      clip-rule="evenodd"
    />
  </svg>
);

export default Home;
