import Image from "next/image";
import beach1 from "@/app/assets/beach1.jpg";
import beach2 from "@/app/assets/beach2.jpg";
import beach3 from "@/app/assets/beach3.jpg";

export default function Motto() {
  return (
    <div className=" items-center justify-between hidden px-32 pb-24 lg:flex">
      <Image src={beach1} alt="" className="rounded-full size-40" />
      <p className="text-lg font-bold">Explore the Skies with Confidence</p>
      <Image src={beach2} alt="" className="rounded-full size-32" />
      <p className="text-sm">
        Travelling is a unique way To Explore New Places, Learn
        <br />
        About Different Cultures, and Gain Unique Experiences.
      </p>
      <Image src={beach3} alt="" className="rounded-full size-40" />
    </div>
  );
}

// import Image from "next/image";
// import beach1 from "@/app/assets/beach1.jpg";
// import beach2 from "@/app/assets/beach2.jpg";
// import beach3 from "@/app/assets/beach3.jpg";

// export default function Motto() {
//   return (
//     <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto hidden lg:flex items-center justify-between gap-8">
//         {/* First beach image */}
//         <div className="relative w-40 h-40 flex-shrink-0">
//           <Image
//             src={beach1}
//             alt="Beautiful beach destination"
//             className="rounded-full object-cover"
//             fill
//             sizes="(max-width: 768px) 100vw, 160px"
//             priority
//           />
//         </div>

//         {/* First motto text */}
//         <p className="text-xl md:text-2xl font-bold text-gray-800 text-center max-w-xs">
//           Explore the Skies with Confidence
//         </p>

//         {/* Second beach image */}
//         <div className="relative w-32 h-32 flex-shrink-0">
//           <Image
//             src={beach2}
//             alt="Scenic beach view"
//             className="rounded-full object-cover"
//             fill
//             sizes="(max-width: 768px) 100vw, 128px"
//           />
//         </div>

//         {/* Detailed description */}
//         <p className="text-base md:text-lg text-gray-600 text-center max-w-md leading-relaxed">
//           Travelling is a unique way to explore new places, learn about
//           different cultures, and gain unique experiences.
//         </p>

//         {/* Third beach image */}
//         <div className="relative w-40 h-40 flex-shrink-0">
//           <Image
//             src={beach3}
//             alt="Tropical beach paradise"
//             className="rounded-full object-cover"
//             fill
//             sizes="(max-width: 768px) 100vw, 160px"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
