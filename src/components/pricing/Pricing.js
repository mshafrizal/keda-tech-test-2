export default function Pricing() {
  return (
    <section id="pricing" className="flex flex-col px-5 container mx-auto relative mb-20">
      <h1 className="text-5xl text-center my-20 font-bold">Choose your plan to suit your needs</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col items-start justify-between mb-10">
          <div>
            <h3 className="text-md font-bold mb-7">Basic</h3>
            <div>
              <ul>
                <li className="mb-3 px-3 border-l-orange-400 border-2 border-transparent ">
                  Record inbound stocks
                </li>
                <li className="mb-3 px-3 border-l-orange-400 border-2 border-transparent ">
                  Record outbound stocks
                </li>
                <li className="mb-3 px-3 border-l-orange-400 border-2 border-transparent ">
                  Calculate profit
                </li>
              </ul>
            </div>
          </div>
          <button className="bg-sky-500 text-white py-2 rounded-md hover:bg-sky-400 w-full">
            Contact Us
          </button>
        </div>
        <div className="flex flex-col items-start justify-between mb-10">
          <div>
            <div className="mb-7 flex items-center">
              <h3 className="text-md font-bold mr-3">Business</h3>
              <span className="px-3 py-1 bg-sky-500 rounded-md text-white font-bold">Popular</span>
            </div>
            <div>
              <ul>
                <li className="mb-3 px-3 border-l-sky-500 border-2 border-transparent ">
                  Record inbound and outbound stocks
                </li>
                <li className="mb-3 px-3 border-l-sky-500 border-2 border-transparent ">
                  Calculate profit
                </li>
                <li className="mb-3 px-3 border-l-sky-500 border-2 border-transparent ">
                  Sales analysis using chart
                </li>
                <li className="mb-3 px-3 border-l-sky-500 border-2 border-transparent ">
                  24/7 support
                </li>
              </ul>
            </div>
          </div>
          <button className="bg-sky-500 text-white py-2 rounded-md hover:bg-sky-400 w-full">
            Contact Us
          </button>
        </div>
        <div className="flex flex-col items-start justify-between mb-10">
          <div>
            <h3 className="text-md font-bold mb-7">Entrepreneur</h3>
            <div>
              <ul>
                <li className="mb-3 px-3 border-l-rose-400 border-2 border-transparent ">
                  Record inbound and outbound stocks
                </li>
                <li className="mb-3 px-3 border-l-rose-400 border-2 border-transparent ">
                  Calculate profit
                </li>
                <li className="mb-3 px-3 border-l-rose-400 border-2 border-transparent ">
                  Sales analysis using chart
                </li>
                <li className="mb-3 px-3 border-l-rose-400 border-2 border-transparent ">
                  24/7 support
                </li>
                <li className="mb-3 px-3 border-l-rose-400 border-2 border-transparent ">
                  Export data to Excel
                </li>
                <li className="mb-3 px-3 border-l-rose-400 border-2 border-transparent ">
                  AI Sales Forecasting
                </li>
              </ul>
            </div>
          </div>
          <button className="bg-sky-400 text-white py-2 rounded-md hover:bg-sky-400 w-full">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
