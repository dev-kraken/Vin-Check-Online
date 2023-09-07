import { Hero } from "@/components";
import BlogCard from "@/components/BlogCard";
import Image from "next/image";
import { PrismaClient } from "@prisma/client";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

const prisma = new PrismaClient();

const query = groq`
  *[_type=='post']{
    ...,
    author->,
    categories[]->
  }|order(_createdAt desc)
`;

export default async function Home(PreviewData: any) {
  const posts = await client.fetch(query);
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="car-card__btn-container"></div>
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h2 className="text-4xl font-extrabold">
            Free VIN Check in Easy Steps
          </h2>
          <p>
            We offers free access to vehicle information collated from trusted
            sources. Look up vehicle records by VIN, any model or make, across
            50 states in a minute or less:
          </p>
        </div>
        <section>
          <div className="home__cars-wrapper">
            <div className="car-card group">
              <div className="car-card__content">
                <h2 className="car-card__content-title">Look for the VIN</h2>
              </div>

              <p className="flex mt-6 text-[32px] leading-[38px] font-extrabold">
                <span className="self-start text-[14px] leading-[17px] font-semibold">
                  Step 1
                </span>
              </p>

              <div className="relative w-full h-40 my-3 object-contain">
                <Image
                  src="/vin-car-look.svg"
                  alt="car model"
                  fill
                  priority
                  className="object-contain"
                />
              </div>

              <div className="relative flex w-full mt-2">
                <div className="w-full justify-between text-black-600">
                  <p className="car-card__icon-text">
                    It is typically found on the driver’s side dashboard where
                    the dashboard meets the windshield.
                  </p>
                </div>
              </div>
            </div>

            <div className="car-card group">
              <div className="car-card__content">
                <h2 className="car-card__content-title">
                  Start the VIN Search
                </h2>
              </div>

              <p className="flex mt-6 text-[32px] leading-[38px] font-extrabold">
                <span className="self-start text-[14px] leading-[17px] font-semibold">
                  Step 2
                </span>
              </p>

              <div className="relative w-full h-40 my-3 object-contain">
                <Image
                  src="/check-is-vin.svg"
                  alt="car model"
                  fill
                  priority
                  className="object-contain"
                />
              </div>

              <div className="relative flex w-full mt-2">
                <div className="w-full justify-between text-black-600">
                  <p className="car-card__icon-text">
                    Enter the VIN into the search box. Hit Continue to launch
                    the database search.
                  </p>
                </div>
              </div>
            </div>

            <div className="car-card group">
              <div className="car-card__content">
                <h2 className="car-card__content-title">Get VIN Report</h2>
              </div>

              <p className="flex mt-6 text-[32px] leading-[38px] font-extrabold">
                <span className="self-start text-[14px] leading-[17px] font-semibold">
                  Step 3
                </span>
              </p>

              <div className="relative w-full h-40 my-3 object-contain">
                <Image
                  src="/get-vin-report.svg"
                  alt="car model"
                  fill
                  priority
                  className="object-contain"
                />
              </div>

              <div className="relative flex w-full mt-2">
                <div className="w-full justify-between text-black-600">
                  <p className="car-card__icon-text">
                    Browse the report and get whay you looking for.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="home__text-container mt-16">
          <h2 className="text-4xl font-extrabold">
            How to Decode the Vehicle Identification Number
          </h2>
          <div className="grid grid-cols-3 gap-4 mt-7">
            <div className="col-span-3 lg:col-span-1 sm:col-span-1">
              <p className="text-justify">
                1. Locate the Vehicle Identification Number (VIN). The VIN is
                typically located on the driver's side dashboard, near the
                windshield, or on the driver's side door jamb.
              </p>
              <p className="text-justify">
                2. Determine the country of origin. The first three digits of
                the VIN indicate where the vehicle was manufactured. For
                example, a VIN beginning with 1HG indicates that the vehicle was
                manufactured in the United States.
              </p>
              <p className="text-justify">
                3. Identify the manufacturer and model year. The fourth through
                eighth digits of a VIN indicate information about the
                manufacturer and model year of a vehicle. For example, a VIN
                beginning with 1HGCR2F83EA indicates that it is a Honda CR-V
                from 2014.
              </p>
              <p className="text-justify">
                4. Determine other features of the vehicle. The ninth digit of a
                VIN is known as a check digit and is used to verify that all
                other digits are correct and valid. The tenth through
                seventeenth digits indicate additional information about
                features such as engine size, body style, transmission type, and
                more.
              </p>
            </div>
            <div className="col-span-3 items-center flex sm:col-span-2">
              <div className="relative w-full h-40 my-3 object-contain sm:h-72">
                <Image src="/vin-decoder.avif" alt="car model" fill priority />
              </div>
            </div>
          </div>
        </div>

        <section className="py-6 sm:py-12">
          <div className="container mx-auto space-y-8">
            <h2 className="text-4xl font-extrabold">Blogs</h2>
            <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            <BlogCard posts={posts} />
          </div>
          </div>
          
        </section>

        <div className="home__text-container mt-12">
          <h2 className="text-4xl font-extrabold">
            World Manufacturer Identifier (WMI): Country of Origin Character
            Codes
          </h2>
          <div className="w-full">
            <p className="text-lg leading-8	mt-4">
              The World Manufacturer Identifier (WMI) is a three-character
              alphanumeric code that identifies the country of origin of a
              vehicle. The first character of the WMI is a letter that
              represents the country in which the vehicle was manufactured. The
              second and third characters are numbers that identify the specific
              manufacturer within that country.
              <br />
              <br />
              For example, a WMI of "1HG" indicates that the vehicle was
              manufactured in the United States by Honda. A WMI of "WVW"
              indicates that the vehicle was manufactured in Germany by
              Volkswagen.
            </p>
            <table className="border-collapse w-full border border-[#BFDCE5] bg-white text-sm shadow-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="w-1/4 border border-[#BFDCE5] font-semibold p-4 text-[#3E54AC] text-left">
                    WMI
                  </th>
                  <th className="w-1/4 border border-[#BFDCE5] font-semibold p-4 text-[#3E54AC] text-left">
                    Region
                  </th>
                  <th className="w-3/4 border border-[#BFDCE5] font-semibold p-4 text-[#3E54AC] text-left">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[#BFDCE5] p-4 text-slate-800 ">
                    A-H
                  </td>
                  <td className="border border-[#BFDCE5] p-4 text-slate-800 ">
                    Africa
                  </td>
                  <td className="border border-[#BFDCE5] p-4 text-slate-800 ">
                    AA-AH = South Africa
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#BFDCE5] p-4 text-slate-800 ">
                    J-R
                  </td>
                  <td className="border border-[#BFDCE5] p-4 text-slate-800 ">
                    Asia
                  </td>
                  <td className="border border-[#BFDCE5] p-4 text-slate-800 leading-6">
                    J = Japan <br />
                    KL-KR = South Korea <br />
                    L = China <br />
                    MA-ME = India <br />
                    MF-MK = Indonesia <br />
                    ML-MR = Thailand <br />
                    MS = Myanmar <br />
                    PA-PE = Philippines <br />
                    PL-PR = Malaysia <br />
                    RF-RG = Taiwan
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#BFDCE5] p-4 text-slate-800 ">
                    S-Z
                  </td>
                  <td className="border border-[#BFDCE5] p-4 text-slate-800 ">
                    Europe
                  </td>
                  <td className="border border-[#BFDCE5] p-4 text-slate-800 leading-6">
                    SA-SM = United Kingdom <br />
                    SN-ST, W = Germany <br />
                    SU-SZ = Poland <br />
                    TA-TH = Switzerland <br />
                    TJ-TP = Czech Republic <br />
                    TR-TV = Hungary <br />
                    TW = Portugal <br />
                    VA-VE = Austria <br />
                    VF-VR = France <br />
                    VS-VW = Spain <br />
                    VX-V2 = Yugoslavia <br />
                    XL-XM = The Netherlands <br />
                    XS-XW = USSR <br />
                    X3-X0 = Russia <br />
                    YA-YE = Belgium <br />
                    YF-YK = Finland <br />
                    YS-YW = Sweden <br />
                    ZA-ZR = Italy
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#BFDCE5] p-4 text-slate-800 ">
                    1-5
                  </td>
                  <td className="border border-[#BFDCE5] p-4 text-slate-800 ">
                    North America
                  </td>
                  <td className="border border-[#BFDCE5] p-4 text-slate-800 leading-6">
                    1, 4, 5 = United States <br />
                    2 = Canada <br />3 = Mexico
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#BFDCE5] p-4 text-slate-800 ">
                    6-7
                  </td>
                  <td className="border border-[#BFDCE5] p-4 text-slate-800 ">
                    Oceania
                  </td>
                  <td className="border border-[#BFDCE5] p-4 text-slate-800 leading-6">
                    6A-6W = Australia <br />
                    7A-7E = New Zealand
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#BFDCE5] p-4 text-slate-800 ">
                    8-0
                  </td>
                  <td className="border border-[#BFDCE5] p-4 text-slate-800 ">
                    South America
                  </td>
                  <td className="border border-[#BFDCE5] p-4 text-slate-800 leading-6">
                    8A-8E = Argentina <br />
                    8F-8J = Chile <br />
                    8X-82 = Venezuela <br />
                    9A-9E, 93-99 = Brazil <br />
                    9F-9J = Colombia
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
