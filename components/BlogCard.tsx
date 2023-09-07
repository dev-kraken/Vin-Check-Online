"use client";
import React from "react";
import urlFor from "@/lib/urlFor";
type Props = {
  posts: Post[];
}

function BlogCard({posts} : Props) {
  return (
    <>
    {posts.map(post => (
     <article key={post._id} className="flex flex-col bg-gradient-to-r from-[#4C68D9] to-[#A96AB6]">
        <a
          rel="noopener noreferrer"
          href={`/post/${post.slug.current}`}
          aria-label="Te nulla oportere reprimique his dolorum"
        >
          <img alt={post.author?.name} className="object-cover w-full h-52"
           src={urlFor(post.mainImage).url()} 
           />
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
            {post._rev}
          </a>
          <h3 className="flex-1 py-2 text-lg font-semibold leadi text-white">
          {post.title}
          </h3>
          <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-200">
            <span>{post._createdAt}</span>
            {/* <span>{views} views</span> */}
          </div>
        </div>
      </article>
    ))}
    </>
  );
}

export default BlogCard;
