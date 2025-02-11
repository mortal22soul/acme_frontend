import beach1 from "../assets/beach1.jpg";
import beach2 from "../assets/beach2.jpg";
import beach3 from "../assets/beach3.jpg";

export default function Motto() {
  return (
    <div className="items-center justify-between hidden px-32 py-24  lg:flex">
      <img src={beach1} alt="" className="rounded-full size-40" />
      <p className="text-lg font-bold">Explore the Skies with Confidence</p>
      <img src={beach2} alt="" className="rounded-full size-32" />
      <p className="text-sm">
        Travelling is a unique way To Explore New Places, Learn
        <br />
        About Different Cultures, and Gain Unique Experiences.
      </p>
      <img src={beach3} alt="" className="rounded-full size-40" />
    </div>
  );
}
