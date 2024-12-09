import { FaFacebook, FaGithub, FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa6";
import Navbar from "./components/Navbar";
import Projek from "./components/cardProjek";
import Link from "next/link";

const Home = () => {
  const Textgradient = `font-semibold bg-gradient-to-r from-warna1 to-warna2 bg-clip-text text-transparent`;

  return (
    <div className="text-gray-700 font-sans bg-white">
      <header className="fixed w-full z-20">
        <Navbar Textgradient={Textgradient} />
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="w-full h-screen flex flex-col-reverse lg:flex-row lg:space-x-20 justify-center items-center p-8 lg:p-16"
      >
        <div id="title" className="space-y-5 lg:w-5/6">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-center lg:text-left">
            Welcome To My{" "}
            <span className={`${Textgradient} border border-dashed`}>Portofolio</span> Website{" "}
            <span className={`${Textgradient} border border-dashed`}>Resta</span> Nugroho
          </h1>
          <p className="font-jakarta text-sm lg:text-base text-center lg:text-left">
            Halo Guys Saya Resta Nugroho Seorang Pelajar SMA | Fullstack Developer | Graphic Designer | Founder Yhoiki
            Team | Owner Community NWR | Motivation: Bermimpilah setinggi langit dan jangan lupa bangun untuk
            mewujudkan, hiduplah untuk mencapai mimpi.
          </p>
          <div id="kontak" className="flex flex-wrap gap-4 justify-center lg:justify-start items-center">
            <button className="bg-gradient-to-r from-warna1 to-warna2 rounded-full px-6 py-2 text-sm lg:text-base text-white">
              Contact Me
            </button>
            <FaWhatsapp className="text-3xl sm:text-4xl bg-gray-300 rounded-full p-2" />
            <FaInstagram className="text-3xl sm:text-4xl bg-gray-300 rounded-full p-2" />
            <FaFacebook className="text-3xl sm:text-4xl bg-gray-300 rounded-full p-2" />
            <FaGithub className="text-3xl sm:text-4xl bg-gray-300 rounded-full p-2" />
          </div>
          <div id="copyright" className="text-center lg:text-left">
            <p className="text-sm text-gray-400">&copy; Copyright Resta Nugroho 2024. All Rights Reversed.</p>
          </div>
          <div id="skill" className="flex flex-wrap gap-4 justify-center lg:justify-start max-sm:pb-20">
            {[
              { src: "https://i.ibb.co.com/sQsGjSy/images.png", label: "React Js" },
              { src: "https://i.ibb.co.com/SwbFN0q/images-1.png", label: "Tailwind CSS" },
              { src: "https://i.ibb.co.com/ct1v7NR/nextjs-icon-2048x1234-pqycciiu.png", label: "Next Js" },
              { src: "https://i.ibb.co.com/Cv9wznd/Laravel-svg.png", label: "PHP Laravel" },
              { src: "https://i.ibb.co.com/z82n4gN/Figma-logo-svg.png", label: "Figma" },
            ].map((skill, index) => (
              <div
                key={index}
                id="card"
                className="flex items-center px-3 sm:px-4 py-2 shadow-xl border border-gray-300 rounded-xl space-x-3 sm:space-x-4"
              >
                <img src={skill.src} className="w-6 sm:w-8" alt={skill.label} />
                <h1 className="text-sm sm:text-base">{skill.label}</h1>
              </div>
            ))}
          </div>
        </div>
        <div id="img" className="relative w-full lg:w-auto flex justify-center lg:justify-end max-sm:mt-96 mb-10">
          <img
            src="https://i.ibb.co.com/JFJW6GQ/resta.png"
            className="w-56 max-sm:w-32 sm:w-72 mt-10"
            alt="Resta Nugroho"
          />
          <div className="absolute top-1/2 right-4 lg:right-10">
            <h1 className="py-2 px-4 bg-gray-500/40 rounded-full shadow-xl backdrop-blur text-white text-xs sm:text-sm">
              Resta Nugroho
            </h1>
          </div>
        </div>
      </section>

      {/* Section Kedua */}
      <section id="kedua" className="w-full min-h-screen flex flex-col justify-center items-center p-8 lg:p-16 max-sm:pt-40">
        <div id="title" className="text-center space-y-5">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold">
            Hello Guys{" "}
            <span className={`${Textgradient} border border-dashed`}>My Name</span> Is{" "}
            <span className={`${Textgradient} border border-dashed`}>Resta</span> Nugroho
          </h1>
          <p className="text-sm lg:text-base">
            Halo Guys Saya Resta Nugroho Seorang Pelajar SMA Lebih Tepatnya Madrasah Miftahul Huda Tayu | Fullstack
            Developer | Graphic Designer | Founder Yhoiki Team | Owner Community NWR | Motivation : Bermimpilah setinggi
            langit dan jangan lupa bangun untuk mewujudkan, hiduplah untuk mencapai mimpi.
          </p>
        </div>
      </section>

      {/* Section Ketiga */}
      <section id="ketiga" className="w-full h-auto pb-16">
        <div className="w-full flex justify-center">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold p-10">
            My <span className={`${Textgradient} border border-dashed`}>Project</span>
          </h1>
        </div>
        <div className="w-full h-auto flex flex-wrap justify-center gap-6 sm:gap-8">
          <Projek />
          <Projek />
        </div>
      </section>

      {/* Section Keempat */}
      <section id="keempat" className="w-full h-auto pb-16">
        <div className="w-full flex justify-center">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold p-10">
            My <span className={`${Textgradient} border border-dashed`}>Certificate</span>
          </h1>
        </div>
        <div className="w-full h-auto flex flex-wrap justify-center gap-6 sm:gap-8">
          <Projek />
          <Projek />
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-300 rounded-t-2xl p-10 sm:p-14 space-y-4">
        <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <img src="https://i.ibb.co.com/GW6QGLX/restaicon.png" className="w-8 sm:w-10" alt="Logo" />
              <h1 className="text-lg sm:text-xl font-bold">
                Resta <span className={`${Textgradient}`}>Nugroho</span>
              </h1>
            </Link>
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-8">
            <a href="#" className="text-base sm:text-xl flex space-x-2 items-center">
              <FaWhatsapp />
              <p className="text-xs sm:text-sm">+62 813-2860-8503</p>
            </a>
            <a href="#" className="text-base sm:text-xl flex space-x-2 items-center">
              <FaInstagram />
              <p className="text-xs sm:text-sm">restadev_</p>
            </a>
            <a href="#" className="text-base sm:text-xl flex space-x-2 items-center">
              <FaFacebook />
              <p className="text-xs sm:text-sm">resta dev</p>
            </a>
            <a href="#" className="text-base sm:text-xl flex space-x-2 items-center">
              <FaGithub />
              <p className="text-xs sm:text-sm">restadev</p>
            </a>
            <a href="#" className="text-base sm:text-xl flex space-x-2 items-center">
              <FaLinkedin />
              <p className="text-xs sm:text-sm">Resta Nugroho</p>
            </a>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between">
          <p>Contact me if you need services.</p>
          <p className="text-xs sm:text-sm text-gray-400">&copy; Copyright Resta Nugroho 2024. All Right Reversed.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
