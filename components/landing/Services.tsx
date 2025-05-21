// import logo from "@/app/assets/acme-corp-logomark.svg";
// import Image from "next/image";

// export default function Services() {
//   return (
//     <div className="p-6 lg:p-16">
//       <div className="text-2xl font-bold text-center lg:text-4xl">
//         Discover The World From Above
//       </div>
//       <div className="p-4 text-sm text-center lg:text-lg">
//         Travelling is a unique way To Explore New Places, Learn About Different
//         Cultures, and Gain Unique Experiences
//       </div>

//       <ul className="flex flex-col p-6 space-y-10 text-center md:flex-row">
//         <li></li>
//         <li className="flex flex-col items-center justify-center space-y-4">
//           <Image
//             src={logo}
//             alt=""
//             className="p-2 bg-gray-200 rounded-full size-10"
//           />
//           <span className="font-bold">Various Destinations</span>
//           <span>
//             Travelling is a unique way To Explore New Places, Learn About
//             Different Cultures, and Gain Unique Experiences
//           </span>
//         </li>

//         <li className="flex flex-col items-center justify-center space-y-4">
//           <Image
//             src={logo}
//             alt=""
//             className="p-2 bg-gray-200 rounded-full size-10"
//           />
//           <span className="font-bold">Everything Included</span>
//           <span>
//             Travelling is a unique way To Explore New Places, Learn About
//             Different Cultures, and Gain Unique Experiences
//           </span>
//         </li>

//         <li className="flex flex-col items-center justify-center space-y-4">
//           <Image
//             src={logo}
//             alt=""
//             className="p-2 bg-gray-200 rounded-full size-10"
//           />
//           <span className="font-bold">Affordable Pricing</span>
//           <span>
//             Travelling is a unique way To Explore New Places, Learn About
//             Different Cultures, and Gain Unique Experiences
//           </span>
//         </li>
//       </ul>
//     </div>
//   );
// }

import logo from "@/app/assets/acme-corp-logomark.svg";
import Image from "next/image";
import beach from "@/app/assets/beach.jpg";

export default function Services() {
  const services = [
    {
      title: "Various Destinations",
      description:
        "Explore breathtaking locations across all continents with our curated selection of global destinations.",
      icon: logo,
      boxClass: "md:col-span-2", // Wider box
    },
    {
      title: "Everything Included",
      description:
        "All-inclusive packages covering flights, accommodation, tours, and meals for hassle-free travel.",
      icon: logo,
      boxClass: "", // Regular box
    },
    {
      title: "Affordable Pricing",
      description:
        "Premium experiences at competitive prices with flexible payment options for every budget.",
      icon: logo,
      boxClass: "", // Regular box
    },
    {
      title: "Expert Guides",
      description:
        "Knowledgeable local guides to enhance your experience with insider tips and historical context.",
      icon: logo,
      boxClass: "", // Regular box
    },
    {
      title: "24/7 Support",
      description:
        "Round-the-clock assistance for any travel needs or emergencies during your journey.",
      icon: logo,
      boxClass: "", // Taller box
    },
    {
      title: "Custom Itineraries",
      description:
        "Tailor-made travel plans designed to match your personal interests and preferences.",
      icon: logo,
      boxClass: "", // Regular box
    },
  ];

  return (
    <section className="px-6 pb-12 lg:px-16 lg:pb-28 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold lg:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-400">
          Discover The World From Above
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Travelling is a unique way to explore new places, learn about
          different cultures, and gain unforgettable experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(200px,auto)]">
        {/* Place the taller box first */}
        <div className="relative rounded-xl overflow-hidden md:col-span-1 md:row-span-2">
          <Image
            src={beach}
            alt="Travel destination"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {services.map((service, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center ${service.boxClass}`}>
            <div className="mb-4 p-3 bg-white rounded-full shadow-sm border border-gray-100">
              <Image
                src={service.icon}
                alt=""
                width={40}
                height={40}
                className="size-10"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
