"use client";

import Link from "next/link";
import { useState } from "react"

const Navbar = ({ Textgradient }: {Textgradient: string}) => {
    const [SubOn, SetSubOn] = useState<string>("home");
    const gantiSub = (e: string) => {
        SetSubOn(e)
    }
    return(
        <>
            <div id="pembukusutama" className="w-full shadow-xl text-gray-700">
                <div className="flex items-center justify-between py-4 px-8 bg-white/50 backdrop-blur-xl">
                    <Link href="/" className="flex items-center space-x-3">
                    <img src="https://i.ibb.co.com/GW6QGLX/restaicon.png" className="w-10" />
                    <h1 className="text-xl font-bold">Resta <span className="font-semibold bg-gradient-to-r from-warna1 to-warna2 bg-clip-text text-transparent">Nugroho</span></h1>
                    </Link>
                    <div id="sub" className="flex list-none space-x-10">
                        <li><Link href="/" onClick={() => gantiSub("home")} className={`${SubOn === "home" && Textgradient}`}>Home</Link></li>
                        <li><a href="/About" onClick={() => gantiSub("About")} className={`${SubOn === "About" && Textgradient}`}>About</a></li>
                        <li><a href="#" onClick={() => gantiSub("Project")} className={`${SubOn === "Project" && Textgradient}`}>Project</a></li>
                        <li><a href="#" onClick={() => gantiSub("Certificate")} className={`${SubOn === "Certificate" && Textgradient}`}>Certificate</a></li>
                    </div>
                    <div>
                    <input type="search" name="search" id="search" placeholder="Cari di Website ini" className="bg-gray-200 rounded-l-full focus:outline-none pl-6 pr-16 py-2" />
                    <button className="bg-gradient-to-r from-warna1 to-warna2 rounded-r-full px-4 py-2 text-white">Search</button>
                    </div>
                    <div id="contact">
                        <button className="bg-gradient-to-r from-warna1 to-warna2 rounded-full px-4 py-2 text-white">contact me</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar