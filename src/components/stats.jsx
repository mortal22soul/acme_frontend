export default function Stats() {
  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-6 md:space-x-8 md:flex-row md:space-y-0">
      <div className="stats-bg">
        <div className="stats">10+</div>
        <div className="font-semibold">Years of Experience</div>
      </div>
      <div className="stats-bg">
        <div className="stats">12k</div>
        <div className="font-semibold">Happy Clients</div>
      </div>
      <div className="stats-bg">
        <div className="stats">4.8</div>
        <div className="font-semibold">Overall Rating</div>
      </div>
    </div>
  );
}
