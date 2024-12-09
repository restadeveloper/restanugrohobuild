import { FaFacebook, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import Navbar from "./components/Navbar";
import Projek from "./components/cardProjek";
import { FaLinkedin } from "react-icons/fa";
import Link  from "next/link";

const Home = () => {
  const Textgradient: string = `font-semibold bg-gradient-to-r from-warna1 to-warna2 bg-clip-text text-transparent`;
  return (
    <div className="text-gray-700 font-sans bg-white">
      <header className="fixed w-full z-20">
        <Navbar Textgradient={Textgradient}/>
      </header>
      <section id="hero" className="w-full h-screen flex space-x-20 justify-center items-center p-16">
        <div id="title" className="space-y-5 mt-20 w-5/6">
        <h1 className="text-5xl font-bold">Welcome To My <span className={`${Textgradient} border border-dashed`}>Portofolio</span> Website <span className={`${Textgradient} border border-dashed`}>Resta</span> Nugroho</h1>
        <p className="font-jakarta">Halo Guys Saya Resta Nugroho Seorang Pelajar SMA | Fullstack Developer | Graphic Designer | Founder Yhoiki Team | Owner Community NWR | Motivation : &quotBermimpilah setinggi langit dan jangan lupa bangun untuk mewujudkan, hiduplah untuk mencapai mimpi.&quot</p>
        <div id="kontak" className="flex space-x-2 items-center">
        <button className="bg-gradient-to-r from-warna1 to-warna2 rounded-full px-8 py-2 text-white">contact me</button>
        <FaWhatsapp className="text-4xl bg-gray-300 rounded-full p-2"/>
        <FaInstagram className="text-4xl bg-gray-300 rounded-full p-2"/>
        <FaFacebook className="text-4xl bg-gray-300 rounded-full p-2"/>
        <FaGithub className="text-4xl bg-gray-300 rounded-full p-2"/>
        </div>
        <div id="copyright">
          <p className="text-sm text-gray-400">&copy; Copyright Resta Nugroho 2024. All Rights Reversed.</p>
        </div>
        <div id="skill" className="flex space-x-5">
          <div id="card" className="flex items-center px-4 p-2 shadow-xl border border-gray-300 rounded-xl">
            <img src="https://i.ibb.co.com/sQsGjSy/images.png" className="w-8 mr-4"/>
            <h1>React Js</h1>
          </div>
          <div id="card" className="flex items-center px-4 p-2 shadow-xl border border-gray-300 rounded-xl">
            <img src="https://i.ibb.co.com/SwbFN0q/images-1.png" className="w-8 mr-4"/>
            <h1>Tailwind Css</h1>
          </div>
          <div id="card" className="flex items-center px-4 p-2 shadow-xl border border-gray-300 rounded-xl">
            <img src="https://i.ibb.co.com/ct1v7NR/nextjs-icon-2048x1234-pqycciiu.png" className="w-8 mr-4"/>
            <h1>Next Js</h1>
          </div>
          <div id="card" className="flex items-center px-4 p-2 shadow-xl border border-gray-300 rounded-xl">
            <img src="https://i.ibb.co.com/Cv9wznd/Laravel-svg.png" className="w-8 mr-4"/>
            <h1>PHP Laravel</h1>
          </div>
          <div id="card" className="flex items-center px-4 p-2 shadow-xl border border-gray-300 rounded-xl">
            <img src="https://i.ibb.co.com/z82n4gN/Figma-logo-svg.png" className="w-5 mr-4"/>
            <h1>Figma</h1>
          </div>
        </div>
        </div>
        <div id="img">
          <img src="https://i.ibb.co.com/JFJW6GQ/resta.png" className="w-72 mt-20" />
          <div className="absolute top-1/2 right-10">
          <h1 className="py-2 px-4 bg-gray-500/40 rounded-full shadow-xl backdrop-blur text-white">Resta Nugroho</h1>
          </div>
        </div>
      </section>
      <section id="kedua" className="w-full h-screen flex flex-col justify-center items-center p-16">
        <div id="title" className="text-center space-y-5">
        <h1 className="text-5xl font-bold">Hello Guys <span className={`${Textgradient} border border-dashed`}>My Name</span> Is <span className={`${Textgradient} border border-dashed`}>Resta</span> Nugroho</h1>
        <p>Halo Guys Saya Resta Nugroho Seorang Pelajar SMA Lebih Tepatnya Madrasah Miftahul Huda Tayu | Fullstack Developer | Graphic Designer | Founder Yhoiki Team | Owner Community NWR | Motivation : &quotBermimpilah setinggi langit dan jangan lupa bangun untuk mewujudkan, hiduplah untuk mencapai mimpi.&quot</p>
        </div>
      </section>
      <section id="ketiga" className="w-full h-auto pb-16">
        <div className="w-full flex justify-center"><h1 className="text-5xl font-bold p-10">My <span className={`${Textgradient} border border-dashed`}>Project</span></h1></div>
        <div className="w-full h-auto flex justify-center space-x-14">
          <Projek/>
          <Projek/>
        </div>
      </section>
      <section id="keempat" className="w-full h-auto pb-16">
        <div className="w-full flex justify-center"><h1 className="text-5xl font-bold p-10">My <span className={`${Textgradient} border border-dashed`}>Sertificate</span></h1></div>
        <div className="w-full h-auto flex justify-center space-x-14">
          <Projek/>
          <Projek/>
        </div>
      </section>
      <footer className="w-full bg-gray-300 rounded-t-2xl p-14 space-y-4">
        <div className=" flex justify-between">
        <div className="space-y-4">
          <Link href="/" className="flex items-center space-x-3">
            <img src="https://i.ibb.co.com/GW6QGLX/restaicon.png" className="w-10" />
            <h1 className="text-xl font-bold">Resta <span className="font-semibold bg-gradient-to-r from-warna1 to-warna2 bg-clip-text text-transparent">Nugroho</span></h1>
          </Link>
          
        </div>
        <div className="flex space-x-10">
          <a href="#" className="text-xl flex space-x-2"><FaWhatsapp/><p className="text-sm"> +62 813-2860-8503</p></a>
          <a href="#" className="text-xl flex space-x-2"><FaInstagram/><p className="text-sm"> restadev_</p></a>
          <a href="#" className="text-xl flex space-x-2"><FaFacebook/><p className="text-sm"> resta dev </p></a>
          <a href="#" className="text-xl flex space-x-2"><FaGithub/><p className="text-sm"> restadev</p></a>
          <a href="#" className="text-xl flex space-x-2"><FaLinkedin/><p className="text-sm"> Resta Nugroho</p></a>
        </div>
        </div>
        <div className=" flex justify-between">
          <p>contact me if you need services.</p>
          <p className="text-sm text-gray-400">&copy; Copyright Resta Nugroho 2024. All Right Reversed.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home
