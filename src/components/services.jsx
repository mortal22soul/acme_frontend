import play from "../assets/acme-corp-logomark.svg";

export default function Services() {
  return (
    <div className="p-6 lg:p-16">
      <div className="text-2xl font-bold text-center lg:text-4xl">
        Discover The World From Above
      </div>
      <div className="p-4 text-sm text-center lg:text-lg">
        Travelling is a unique way To Explore New Places, Learn About Different
        Cultures, and Gain Unique Experiences
      </div>

      <ul className="flex flex-col p-6 space-y-10 text-center md:flex-row">
        <li></li>
        <li className="flex flex-col items-center justify-center space-y-4">
          <img
            src={play}
            alt=""
            className="p-2 bg-gray-200 rounded-full size-10"
          />
          <span className="font-bold">Various Destinations</span>
          <span>
            Travelling is a unique way To Explore New Places, Learn About
            Different Cultures, and Gain Unique Experiences
          </span>
        </li>

        <li className="flex flex-col items-center justify-center space-y-4">
          <img
            src={play}
            alt=""
            className="p-2 bg-gray-200 rounded-full size-10"
          />
          <span className="font-bold">Everything Included</span>
          <span>
            Travelling is a unique way To Explore New Places, Learn About
            Different Cultures, and Gain Unique Experiences
          </span>
        </li>

        <li className="flex flex-col items-center justify-center space-y-4">
          <img
            src={play}
            alt=""
            className="p-2 bg-gray-200 rounded-full size-10"
          />
          <span className="font-bold">Affordable Pricing</span>
          <span>
            Travelling is a unique way To Explore New Places, Learn About
            Different Cultures, and Gain Unique Experiences
          </span>
        </li>
      </ul>
    </div>
  );
}
