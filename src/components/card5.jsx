import React from 'react'
import { Rating } from 'flowbite-react';

import { Card, Dropdown } from 'flowbite-react';
// import Image from 'next/image';

const card5 = () => {
  return (
    <>
    <Card className="max-w-xl">
      {/* <div className="flex justify-end px-4 pt-4">
        <Dropdown inline label="">
          <Dropdown.Item>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Edit
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Export Data
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Delete
            </a>
          </Dropdown.Item>
        </Dropdown>
      </div> */}
      <div className="flex flex-col items-center pb-10 pl-5 pr-5 pt-5 border-solid border-spacing-0">
        <img
          alt="Bonnie image"
          height="125"
          src="/image/pic-1.png"
          width="125"
          className="mb-3 rounded-full shadow-lg"
        />
        <br />
        <span className="text-2xl text-gray-500 dark:text-gray-400">
        <p>Amazing food. PERIOD. Service is always perfect, food is always on
            point, and the staff is very friendly and accommodating.“</p>
        </span>
        <br />
        <h5 className="mb-1 text-3xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
        <span className="text-2xl text-gray-500 dark:text-gray-400">Visual Designer</span>
        {/* <div className="mt-4 flex space-x-3 lg:mt-6">
          <a
            href="#"
            className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            Add friend
          </a>
          <a
            href="#"
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Message
          </a>
        </div> */}
         <Rating size="md">
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star  />
      <Rating.Star filled={false} />
      <p className="ml-2 text-2xl font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p>
    </Rating>
      </div>
    </Card>
    </>
  )
}

export default card5
