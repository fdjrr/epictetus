"use client";

import Link from "next/link";
import { useState } from "react";
import Container from "@/components/Container";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const [search, setSearch] = useState(false);

  const dropdownList = [
    { text: "Internet", link: "/posts" },
    { text: "Books", link: "/posts" },
    { text: "Open Source", link: "/posts" },
  ];

  return (
    <nav className="py-10">
      <Container>
        <div className="flex items-center">
          <div className="w-3/12 lg:hidden">
            <button
              onClick={() => {
                setSideBar(!sideBar);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </button>
          </div>
          <div className="lg:w-2/12 w-6/12">
            <Link
              href="/"
              className="flex items-center justify-center lg:justify-start"
            >
              <div className="w-10 h-10 bg-gray-500 rounded flex items-center justify-center mr-3 shadow-2xl">
                E
              </div>
              Epictetus
            </Link>
          </div>
          <div className="w-3/12 lg:hidden text-right">
            <button onClick={() => setSearch(!search)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                fill="currentColor"
                className="inline-block bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>
          </div>

          <div
            className={`lg:w-7/12 w-full bg-gradient-to-b from-gray-600 lg:bg-none to-gray-900 fixed lg:static top-0 h-full lg:h-auto p-10 lg:p-0 transition-all ${
              sideBar ? "left-0" : "-left-full"
            }`}
          >
            <button
              className="absolute top-10 right-10 lg:hidden"
              onClick={() => setSideBar(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            </button>
            <ul className="lg:space-x-10 flex lg:items-center flex-col lg:flex-row space-y-5 lg:space-y-0">
              <li>
                <Link href="/posts">UI Design</Link>
              </li>
              <li>
                <Link href="/posts">Front End</Link>
              </li>
              <li>
                <Link href="/posts">Backend End</Link>
              </li>
              <li className="relative">
                <Link
                  href="#"
                  className="cursor-pointer flex items-center"
                  onClick={() => setDropdown(!dropdown)}
                >
                  Lainnya
                  <svg
                    className="ml-2 bi bi-caret-down-fill"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                  </svg>
                </Link>
                {dropdown && (
                  <ul className="absolute w-[200px] bg-gray-800 rounded shadow-2xl mt-4">
                    {dropdownList.map(({ text, link }) => (
                      <li
                        key={text}
                        className="border-b border-white/5 last:border-0"
                      >
                        <Link
                          href={link}
                          className="flex py-3 px-6 hover:bg-gray-700/60"
                        >
                          {text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </div>
          <div
            className={`lg:w-3/12 absolute lg:static w-full left-0 px-10 lg:px-0 transition-all ${
              search ? "top-10" : "-top-40"
            }`}
          >
            <button
              className="absolute top-3 right-14 lg:hidden"
              onClick={() => setSearch(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            </button>
            <input
              type="text"
              className="bg-gray-700 py-3 px-6 w-full lg:rounded-full rounded-lg icon-search pl-12"
              placeholder="Search"
            />
          </div>
        </div>
      </Container>
    </nav>
  );
}
