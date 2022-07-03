import React, { useEffect } from "react";
import { useState } from "react";

export default function ReposList({ props: userInfo }) {
  const {
    avatarUrl,
    name,
    login,
    company,
    location,
    repositories,
    followers,
    following,
  } = userInfo;

  return (
    <section className="w-[640px] min-w-[640px] mx-auto flex items-center bg-gray-black text-white rounded-2xl">
      <div className="m-14 flex-">
        <img
          src={avatarUrl}
          alt="GitHub user profile photo"
          className="w-48 rounded-full"
        />
      </div>
      <div className="flex flex-col gap-2">
        <span>
          <p className="text-xs">Username/Login:</p>
          <p>{name ? name : login}</p>
        </span>
        <span>
          <p className="text-xs">Company:</p>
          <p>{company ? company : "Not informed"}</p>
        </span>
        <span>
          <p className="text-xs">Location:</p>
          <p>{location ? location : "Not informed"}</p>
        </span>

        <div className="flex flex-wrap gap-11">
          <span>
            <p className="text-xs">Public Repos:</p>
            <p>{repositories ? repositories.totalCount : "0"}</p>
          </span>
          <span>
            <p className="text-xs">Followers:</p>
            <p>{followers ? followers.totalCount : "0"}</p>
          </span>
          <span>
            <p className="text-xs">Following:</p>
            <p>{following ? following.totalCount : "0"}</p>
          </span>
        </div>
      </div>
    </section>
  );
}
