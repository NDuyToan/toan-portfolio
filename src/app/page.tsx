import { Dot, MapPin } from "lucide-react";

export default function Home() {
  return (
    <main>
      <section>
        {/* hero */}
        <div className="w-[1280px] h-[600px] px-8 mx-auto flex items-center">
          <div>
            <h1 className="text-6xl font-bold">Hello, I’m NguyenDuyToan 👋</h1>
            <p className="text-xl mt-4">
              I’m a frontend developer with 5 years of experience, focused on
              building fast, accessible, and responsive web interfaces using
              React.js. I care deeply about crafting clean, maintainable code
              and delivering smooth user experiences. Whether it’s working on
              complex applications or polishing UI details, I enjoy turning
              ideas into intuitive, usable products. Coding still feels exciting
              to me every day—just like when I first started.
            </p>
            <p>
              <MapPin className="w-6 h-6 inline mr-3" />
              <span>DaNang, VietNam</span>
            </p>
            <p>
              <Dot className="text-emerald-500 w-6 h-6 inline mr-3" />
              Available for new projects
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
