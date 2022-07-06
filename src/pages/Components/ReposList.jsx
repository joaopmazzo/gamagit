import React from "react";

import Moment from "moment";

export default function ReposList({ props: repositoriesInfos }) {
  function dateFormated(date) {
    return Moment(date).format("Do MMM YY");
  }

  return (
    <ul className="flex flex-col w-[640px] mx-auto my-12">
      {repositoriesInfos.map((repositories, index) => {
        if (repositories.name !== repositoriesInfos.at(-1)) {
          return (
            <li
              className="bg-gray-black hover:bg-opacity-90 first:rounded-t-2xl last:rounded-b-2xl"
              key={index}
            >
              <a>
                <div className="px-3">
                  <h2 className="py-2 font-bold">{repositories.name}</h2>
                  <hr />
                  <div className="flex py-2 text-sm">
                    <p className="w-44">
                      Created at: {dateFormated(repositories.createdAt)}
                    </p>
                    <span>|</span>
                    <p className="ml-[17px]">
                      Updated at: {dateFormated(repositories.updatedAt)}
                    </p>
                  </div>
                </div>
              </a>
              <hr className="bg-purple h-[2px] border-none" />
            </li>
          );
        } else {
          return (
            <li
              className="bg-gray-black hover:bg-opacity-90 first:rounded-t-2xl last:rounded-b-2xl"
              key={index}
            >
              <div className="px-3">
                <h2 className="py-2 font-bold">{repositories.name}</h2>
                <hr />
                <div className="flex py-2 text-sm">
                  <p className="w-44">
                    Created ata: {dateFormated(repositories.createdAt)}
                  </p>
                  <span>|</span>
                  <p className="ml-[17px]">
                    Updated at: {dateFormated(repositories.updatedAt)}
                  </p>
                </div>
              </div>
            </li>
          );
        }
      })}
    </ul>
  );
}
