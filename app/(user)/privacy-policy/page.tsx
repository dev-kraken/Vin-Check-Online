import { Hero, SearchBar } from "@/components";
import Image from "next/image";

export default function policy() {
  return (
    <main className="overflow-hidden">
      <div className="mt-16 padding-x padding-y max-width" id="discover">
        <div className="py-8 mx-auto border-dashed border-2 border-sky-500 rounded-lg mb-6 2xl:w-2/3 lg:w-4/6">
          <h1 className="font-bold mb-1 text-center 2xl:text-4xl lg:text-4xl sm:text-4xl">
            Research a Vehicle By VIN Number
            </h1>
          <div className="mt-3 mx-auto 2xl:w-3/5 lg:w-2/4 sm:w-2/3">
          <SearchBar/>
          </div>
        </div>
        <h5 className="font-bold">Introduction</h5>
        <p>
          Welcome to the VIN Check website. Our website is designed to provide
          basic vehicle information based on the VIN (Vehicle Identification
          Number) provided by users. We respect your privacy and are committed
          to protecting any information you provide while using our service.
        </p>

        <h5 className="font-bold mt-8">Information We Collect</h5>
        <p>
          We do not use cookies or any other tracking technologies on our
          website, and we do not collect, store, or process any personal
          information about our users. We only collect the VIN (Vehicle
          Identification Number) that you enter on our website for the sole
          purpose of generating vehicle information.
        </p>

        <h5 className="font-bold mt-8">How We Use Your Information</h5>
        <p>
          We use the VIN (Vehicle Identification Number) you provide solely for
          the purpose of generating basic vehicle information. We do not store
          this information, and we do not use it for any other purposes. We do
          not share this information with third parties.
        </p>

        <h5 className="font-bold mt-8">Security</h5>
        <p>
          We take reasonable steps to ensure the security of the VIN information
          you provide. However, please be aware that transmitting information
          over the internet is not entirely secure, and we cannot guarantee the
          security of information submitted through our website.
        </p>

        <h5 className="font-bold mt-8">Changes to this Privacy Policy</h5>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated "Effective Date." However, the
          fundamental principle of not collecting or storing personal
          information will not change.
        </p>
      </div>
    </main>
  );
}
