import React from "react";
import "./Footer.css";


const Footer = () => {
  return (
   <div className=" bg-slate-900  absolute bottom-0">
     <div className="container p-9 grid gap-3 sm:grid-cols-1 md:grid-cols-6">
      <div className="col-span-2">
        <h3 className="text-3xl font-bold text-white">BoLesk</h3>
        <p className="w-9/12 text-slate-400">
        
          <small>
            Hiring is the most important thing you do. If you're hiring remotely
            or onside, we would love to help you find the right human for your
            team.
          </small>{" "}
        </p>
        <div className="flex gap-2">
        <img className="image" src="https://www.facebook.com/images/fb_icon_325x325.png" alt="" />
        <img className="image" src="https://play-lh.googleusercontent.com/wIf3HtczQDjHzHuu7vezhqNs0zXAG85F7VmP7nhsTxO3OHegrVXlqIh_DWBYi86FTIGk" alt="" />
        <img className="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1025px-Instagram-Icon.png" alt="" />
        </div>
      </div>
      <div>
        <h4 className="font-bold text-xl text-white">Company</h4>
        <ul className="text-slate-400">
          <li>About Us</li>
          <li>Work</li>
          <li>Latest News</li>
          <li>Careers</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-xl text-white">Product</h4>
        <ul className="text-slate-400">
          <li>Prototype</li>
          <li>Plans & Pricing</li>
          <li>Customers</li>
          <li>Integrations</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-xl text-white">Support</h4>
        <ul className="text-slate-400">
          <li>Help Desk</li>
          <li>Sales</li>
          <li>Become a Partner</li>
          <li>Developers</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-xl text-white">Contact</h4>
        <ul className="text-slate-400">
          <li>524 Broadway , NYC</li>
          <li>+1 777 - 978 - 5570</li>
        </ul>
      </div>
    </div>
    <hr className="m-5 " />
   </div>
  );
};

export default Footer;
