import React from "react";
import "./Banner.css"
const Banner = () => {
  return (
    <div className="container md:flex items-center h-full p-8 bg-slate-200">
      <div>
        <p className="text-7xl md:w-9/12 font-semibold leading-snug">
          One Step Closer To Your <span className="text-violet-600">Dream Job</span>{" "}
        </p>
        <p className="md:w-3/6 my-3 text-xl">
          
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
        </p>
        <button className="common-btn ">Get Started</button>
      </div>
      <img className="banner-img" src="https://scontent.fdac149-1.fna.fbcdn.net/v/t1.15752-9/338940197_3071466153147747_3665619584376701712_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeF8zf8JV7iMI6nYbG29Ljuyq_i_L7aaRWyr-L8vtppFbNRkeMwF0p1HN2KiAPw5vDm3U7uu2MrZ4QuOsANv2ioU&_nc_ohc=49pe_rmhBjgAX9_lrK5&_nc_oc=AQm6QnMOiDU8YoVAQyFLFmaQGHirZdPnk4a8VHdE-hX53TGlFpZ0yeouiOobfmlnqyc&_nc_ht=scontent.fdac149-1.fna&oh=03_AdQwl-brae5JKlTyjFx1rEHYlogRowP-hGJD_kNNxrrRpw&oe=645BE50E" alt="" />
    </div>
  );
};

export default Banner;
