import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

const EXTERNAL_DATA_URL = "https://www.vincheckonline.com/post";
const query = groq`
  *[_type=='post']{
    slug,
  }|order(_createdAt desc)
`;

function generateSiteMap(posts: any) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://vincheckonline.com</loc>
     </url>
     <url>
       <loc>https://www.vincheckonline.com/vin-decode</loc>
     </url>
     <url>
       <loc>https://www.vincheckonline.com/blogs</loc>
     </url>
     ${posts
      .map(({ slug }:any) => {
        return `
      <url>
          <loc>${`${EXTERNAL_DATA_URL}/${slug.current}`}</loc>
      </url>
    `;
      })
      .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: any) {
  const posts = await client.fetch(query);

  const sitemap = generateSiteMap(posts);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
