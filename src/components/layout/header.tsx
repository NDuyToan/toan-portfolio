import { Sun } from "lucide-react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="w-[1280px] h-[68px] mx-auto flex items-center justify-end px-8 ">
      <nav>
        <ul className="flex items-center gap-8 h-6 ">
          <li>About</li>
          <li>Work</li>
          <li>Testimonials</li>
          <li className="border-r border-gray-100 pr-6">Contact</li>
          <li>
            <Sun />
          </li>
          <li>
            <Button>Download CV</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
