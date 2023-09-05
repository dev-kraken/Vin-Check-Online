"use client";
import React from "react";
import { BlogProps } from "@/types";

interface BlogPropsAll {
    blogs: BlogProps;
  }

function BlogCard({blogs} : BlogPropsAll) {
    const { title, postDate, views } = blogs;
  return (
    <>
      <article key={title} className="flex flex-col bg-gradient-to-r from-[#4C68D9] to-[#A96AB6]">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Te nulla oportere reprimique his dolorum"
        >
          <img alt="" className="object-cover w-full h-52" src="/pattern.png" />
        </a>
        <div className="flex flex-col flex-1 p-6">
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Te nulla oportere reprimique his dolorum"
          ></a>
          <a
            rel="noopener noreferrer"
            href="#"
            className="text-xs tracki uppercase hover:underline dark:text-violet-200"
          >
            Convenire
          </a>
          <h3 className="flex-1 py-2 text-lg font-semibold leadi text-white">
          {title}
          </h3>
          <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-200">
            <span>{postDate}</span>
            <span>{views} views</span>
          </div>
        </div>
      </article>
    </>
  );
}

export default BlogCard;
