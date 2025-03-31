import AddDestination from "@/components/destinations/AddDestination";

export default function newDestination() {
  return (
    <div className="p-10 flex flex-col items-center ">
      <div className="font-semibold text-2xl">
        Add a new travel destination.
      </div>
      <div className="w-2/5">
        <AddDestination />
      </div>
    </div>
  );
}
