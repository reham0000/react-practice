import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Line } from "react-icons/ri";
import { GiCrossMark } from "react-icons/gi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/profile", name: "Profile" },
  ];

  return (
    <nav className="text-black p-6 bg-yellow-200 ">
      <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {
            open ? <GiCrossMark></GiCrossMark> : <RiMenu2Line className=""></RiMenu2Line>
        }
        
      </div>
      <ul className={`md:flex bg-yellow-600 duration-1000 ${open ? 'top-16' : '-top-60'} absolute md:static p-5 shadow-lg rounded-xl `}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
