import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="max-w-[1600px] w-full mx-auto py-2 bg-white z-50 flex justify-around items-center">
      <div>
        <img src={logo} alt="Internee.pk" className="object-contain"/>
      </div>

      <nav className="flex items-center justify-center gap-6">
        <Link to="" className="capitalize text-neutral-500 text-lg">Home</Link>
        <Link to="" className="capitalize text-neutral-500 text-lg">About</Link>
        <Link to="" className="capitalize text-neutral-500 text-lg">Internships</Link>
        <Link to="" className="capitalize text-neutral-500 text-lg">Contact</Link>
        <Link to="" className="capitalize text-neutral-500 text-lg">LMS</Link>
        <Link to="" className="capitalize text-neutral-500 text-lg">Job Portal</Link>
      </nav>

      <button className="bg-secondary text-white rounded-full py-3 px-7">
        Internee Portal
      </button>
    </header>
  )
}
