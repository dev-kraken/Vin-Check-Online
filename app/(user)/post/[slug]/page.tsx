import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'
import React from 'react'
import Image from 'next/image'
import urlFor from '@/lib/urlFor'
import { PortableText } from '@portabletext/react'
import { RichTextComponents } from '@/components/RichTextComponents'
type Props = {
    params: {
        slug: string
    }
}
export const revalidate = 30;
async function Post({ params: { slug } }: Props) {
    const query = groq`
    *[_type=='post' && slug.current == $slug][0]{
        ...,
        author->,
        categories[]->
    }
    `;
    const post: Post = await client.fetch(query, { slug });
    return <main className="overflow-hidden w-full">
        <div className="mt-20 lg:padding-x padding-y mx-auto max-w-screen-md">
            <article className='px-10 pb-20'>
                <section className='space-y-2 mb-10'>
                    <div className='relative min-h-56 flex flex-col md:flex-row justify-between'>
                        <div className='absolute top-0 w-full h-full opacity-20 blur-md p-10'>
                            <Image className='object-cover object-center mx-auto rounded-sm'
                                src={urlFor(post.mainImage).url()}
                                alt={post.author.name}
                                fill
                            />
                        </div>
                        <section className='p-5 rounded-sm bg-gradient-to-r from-[#4C68D9] to-[#A96AB6] w-full'>
                            <div className='flex flex-col md:flex-row justify-between gap-y-5'>
                                <div>
                                    <h1 className='text-4xl font-extrabold text-white'>
                                        {post.title}
                                    </h1>
                                    <p className='text-white'>
                                        {new Date(post._createdAt).toLocaleDateString("en-US", {
                                            day: 'numeric',
                                            month: "long",
                                            year: "numeric",
                                        })}
                                    </p>
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <Image 
                                    className='rounded-full bg-white'
                                    src={urlFor(post.author.image).url()}
                                    alt={post.author.name}
                                    height={40}
                                    width={40}
                                    />
                                    <div>
                                        <h3 className='text-lg font-bold text-white'>{post.author.name}</h3>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h2 className='italic pt-10'>{post.description}</h2>
                                <div className='flex items-center justify-end mt-auto space-x-2'>
                                    {post.categories?.map((category) => (
                                        <span className='bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded' key={category._id}>
                                            {category.title}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </div>
                </section>

                <PortableText value={post.body} components={RichTextComponents}/>
            </article>
        </div></main>
}

export default Post