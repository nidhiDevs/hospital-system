import React from "react";
import background from "../img/background.jpg";
import doctor from "../img/doctor.jpeg";
const HeroSection = () => {
    const items = ['HIV', 'Fever', 'Anti PVR','CT Scane', 'HIV', 'Fever', 'Anti PVR','CT Scane'];
  return (
    <div>
      <div
        className="h-full md:h-[80vh]"
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className=" container md:mx-auto md:flex justify-between h-full ">
          <div className="w-full md:w-1/2 flex justify-center items-center ">
            <div className=" text-start">
              <h1 className="text-2xl py-2 md:text-4xl font-[raleway]">
                We are happy to help you
              </h1>
              <p className="font-system text-gray-600 ">
                To set a background image in a React application, you can use
                the inline style attribute or create a CSS file and import it
                into your React component. Here's an example of how you can set
                a background image using inline styles
              </p>
              <button className="bg-theme1 text-sm rounded-[20px] md:text-sm leading-none font-medium px-6 py-2 mt-5">
                Book An Appointment
              </button>
            </div>
          </div>
          <div className="md:w-1/2"></div>
        </div>
      </div>
      {/* check up facility start here */}

      <div>
        <div className="md:flex justify-between h-[80vh] p-5">
          <div className="w-full md:w-1/2 h-full">
            <img className="h-full w-full" src={doctor} alt="doctor" />
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center">
          <div>
            <div className="py-6 text-start">
              <h1 className="text-2xl md:text-4xl font-serif ">
                We are happy to help you
              </h1>
              <p className="font-system text-gray-600 py-4">
                To set a background image in a React application, you can use
                the inline style attribute or create a CSS file and import it
                into your React component. Here's an example of how you can set
                a background image using inline styles
              </p>
            </div>
              <div className="bg-theme1 p-2 md:p-6 rounded-sm">
                <h2 className="text-start font-system font-bold text-2xl">Infection we test for?</h2>        
                <ul className="grid grid-cols-4  text-start py-6">
                    {items.map((item, index) => {
                      return <li key={index} className="font-bold text-sm">&bull; {item}</li>})}
                </ul>
               <div className="flex justify-start">
               <button className="bg-black text-white text-sm rounded-[20px] md:text-sm leading-none font-medium px-6 py-2">
                Book An Appointment
              </button>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
