"use client";
import React from "react";
import urlFor from "@/lib/urlFor";
import Image from "next/image";
import Link from "next/link";
type Props = {
  posts: Post[];
};

function BlogCard({ posts }: Props) {
  return (
    <>
      {posts.map((post) => (
        <article
          key={post._id}
          className="flex flex-col bg-gradient-to-r from-[#4C68D9] to-[#A96AB6] backdrop-blur-xl rounded-md"
        >
          <Link
            rel="noopener noreferrer"
            href={`/post/${post.slug.current}`}
            aria-label="vin check online"
          >
            <Image
              alt={post.author?.name}
              className="object-cover w-full h-52"
              src={urlFor(post.mainImage).url()}
              width={630}
              height={330}
            />

            <div className="flex flex-col flex-1 p-6">
              <h3 className="flex-1 py-2 text-lg font-semibold leadi text-white">
                {post.title}
              </h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-200">
                <span className="font-bold">
                  {new Date(post._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <span>12k views</span>
              </div>
            </div>
          </Link>
        </article>
      ))}
    </>
  );
}

export default BlogCard;
