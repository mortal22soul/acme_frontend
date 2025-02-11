import beach1 from "../assets/beach1.jpg";

export default function Reviews() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="p-6 text-4xl font-bold text-center md:py-20">
        Loved by Thousands of Travellers
      </div>

      <div className="flex flex-col items-center justify-center px-6 space-y-4 md:space-x-8 cards md:flex-row">
        <div>
          <div className="review">
            <div className="py-4 space-x-2 md:p-5">
              <span className="text-blue-500 fa fa-star"></span>
              <span className="text-blue-500 fa fa-star"></span>
              <span className="text-blue-500 fa fa-star"></span>
              <span className="text-blue-500 fa fa-star"></span>
              <span className="text-blue-500 fa fa-star"></span>
            </div>
            <p className="mb-5 font-normal text-gray-700 md:px-5 ">
              &quot;I just returned from the most amazing trip to Italy. I had
              the best time of my life. Thank you so much for making this trip
              so memorable. I will definitely be recommending your services to
              my friends and family. Thank you once again. I will be in touch
              soon. I am so grateful for your services.&quot;
            </p>
          </div>
          <div className="relative flex items-center h-32 p-5 -mt-10 bg-gray-200 -z-10 rounded-3xl">
            <ul className="flex">
              <li>
                <img src={beach1} alt="" className="rounded-full size-12" />
              </li>
              <li>John Doe</li>
            </ul>
          </div>
        </div>

        <div>
          <div className="review">
            <div className="py-4 space-x-2 md:p-5">
              <span className="text-blue-500 fa fa-star"></span>
              <span className="text-blue-500 fa fa-star"></span>
              <span className="text-blue-500 fa fa-star"></span>
              <span className="text-blue-500 fa fa-star"></span>
              <span className="text-blue-500 fa fa-star"></span>
            </div>
            <p className="mb-5 font-normal text-gray-700 md:px-5 ">
              &quot;I just returned from the most amazing trip to the Grand
              Canyon. I had the best time of my life. Thank you so much for
              making this trip so memorable. I will definitely be recommending
              your services to my friends and family. Thank you once again. I
              will be in touch soon. I am so grateful for your services.&quot;
            </p>
          </div>
          <div className="relative flex items-center h-32 p-5 -mt-10 bg-blue-500 -z-10 rounded-3xl">
            <ul className="flex">
              <li>
                <img src={beach1} alt="" className="rounded-full size-12" />
              </li>
              <li>John Doe</li>
            </ul>
          </div>
        </div>

        <div>
          <div className="review">
            <div className="py-4 space-x-2 md:p-5">
              <span className="text-blue-500 fa fa-star"></span>
              <span className="text-blue-500 fa fa-star"></span>
              <span className="text-blue-500 fa fa-star"></span>
              <span className="text-blue-500 fa fa-star"></span>
              <span className="text-blue-500 fa fa-star"></span>
            </div>
            <p className="mb-5 font-normal text-gray-700 md:px-5 ">
              &quot;I just returned from the most amazing trip to the Taj Mahal.
              I had the best time of my life. Thank you so much for making this
              trip so memorable. I will definitely be recommending your services
              to my friends and family. Thank you once again. I will be in touch
              soon. I am so grateful for your services.&quot;
            </p>
          </div>
          <div className="relative flex items-center h-32 p-5 -mt-10 bg-gray-200 -z-10 rounded-3xl">
            <ul className="flex">
              <li>
                <img src={beach1} alt="" className="rounded-full size-12" />
              </li>
              <li>John Doe</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
