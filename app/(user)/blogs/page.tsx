import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import urlFor from "@/lib/urlFor";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";
import DateAgo from "@/components/DateAgo";

export const revalidate = 30;
const query = groq`
  *[_type=='post']{
    ...,
    author->,
    categories[]->
  }|order(_createdAt desc)
`;
type Props = {
    map(arg0: (post: any) => any): import("react").ReactNode;
    posts: Post[];
};
const Blogs = async () => {
    const posts: Props = await client.fetch(query);
    return (
        <main className="overflow-hidden w-full">
            <section className="bg-white mt-10">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-md text-center lg:mb-16 mb-8">
                        <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900">Our Blog</h2>
                        <p className="font-light text-gray-500 sm:text-xl">
                            Welcome to Vin Check Online, your go-to destination for insightful and engaging content on a wide range of topics. Our mission is to inform, inspire, and entertain our readers through well-researched articles, thought-provoking essays, and helpful guides.
                        </p>
                    </div>
                    <div className="grid gap-8 lg:grid-cols-2">
                        {posts.map((post) => (
                            <article key={post._id} className="p-6 bg-gradient-to-r from-[#4C68D9] to-[#A96AB6] backdrop-blur-xl rounded-lg border border-gray-200 shadow-md">
                                <div className="flex justify-between items-center mb-5 text-gray-200">
                                    <span className="bg-primary-100 text-primary-800 text-xs font-medium rounded">
                                        <span className='bg-blue-100 text-blue-800 px-2.5 inline-flex items-center  py-0.5 rounded'>
                                            <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                                            {post.categories?.map((category: { _id: Key | null | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }) => (
                                                category.title
                                            ))}
                                        </span>
                                    </span>
                                    <span className="text-sm"><DateAgo date={post._createdAt} /></span>
                                </div>
                                <h2 className="mb-2 text-2xl font-bold tracking-tight text-white"><a href={`/post/${post.slug.current}`}>{post.title}</a></h2>
                                <p className="mb-5 font-light text-gray-300">
                                    {post.description}...
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center space-x-4">
                                        <img className="w-7 h-7 rounded-full bg-white" src={urlFor(post.author.image).url()} alt={post.author.name} />
                                        <span className="font-medium text-gray-200">
                                            {post.author.name}
                                        </span>
                                    </div>
                                    <a href={`/post/${post.slug.current}`} className="inline-flex items-center font-medium text-slate-800 hover:underline">
                                        Read more
                                        <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Blogs;