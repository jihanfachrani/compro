import Image from "next/image";
import DataImage from "@/public/data";
import HeroInfo from "@/components/HeroInfo";
import Link from "next/link";

// React Server Component
import * as motion from "motion/react-client"

export default function Home() {
  return (
  <>
    {/* title */}
    <motion.div className="py-20" initial={{ opacity: 0, y: 50, scale: 0.8 }} animate={{ opacity: 1, y: 0, scale: 1 }}>
      <h1 className="sm:text-6xl/tight text-5xl/tight sm:text-center text-left">Tingkatkan Gaya Hidup Anda <br /> Bersama Kami</h1>
    </motion.div>
    {/* title */}

    {/* Hero Image */}
    <div className="max-w-5xl mx-auto relative">
      <motion.div initial={{ opacity: 0, y: 50}} animate={{ opacity: 1, y: 0}} transition={{ delay: 0.5}}>
        <Image src={DataImage.Hero} alt="Hero Image" priority/>
      </motion.div>
      <HeroInfo />
    </div>
    {/* Hero Image */}


    {/* Layanan */}
    <div className="grid lg:grid-cols-3 mt-32 gap-10 md:grid-cols-2 grid-cols-1" id="layanan">
      <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} className="shadow-2xl p-7 rounded-2xl">
        <i className="ri-money-dollar-circle-fill ri-3x text-slate-700"></i>
        <p className="font-semibold text-2xl/normal mb-2">Memberikan Harga Terbaik</p>
        <p className="text-base/loose">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus quas nam laudantium accusamus error? Necessitatibus.</p>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{opacity: 1, y: 0}} transition={{delay: 0.3}} viewport={{once: true}} className="shadow-2xl p-7 rounded-2xl">
        <i className="ri-service-fill ri-3x text-slate-700"></i>
        <p className="font-semibold text-2xl/normal mb-2">Pemeriksaan Secara Berkala</p>
        <p className="text-base/loose">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus quas nam laudantium accusamus error? Necessitatibus.</p>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{opacity: 1, y: 0}} transition={{delay: 0.6}} viewport={{once: true}} className="shadow-2xl p-7 rounded-2xl">
        <i className="ri-star-s-fill ri-3x text-slate-700"></i>
        <p className="font-semibold text-2xl/normal mb-2">Fokus pada Website, Mobile & IOT</p>
        <p className="text-base/loose">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus quas nam laudantium accusamus error? Necessitatibus.</p>
      </motion.div>
    </div>
    {/* Layanan */}


    {/* Proyek */}
    <div className="mt-32" id="proyek">
      <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} className="text-4xl/normal text-center font-semibold">
        Proyek Kami
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{opacity: 1, y: 0}} transition={{delay: 0.2}} viewport={{once: true}} className="text-base/loose text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, repellendus!
      </motion.p>

      <div className="mt-20 grid lg:grid-cols-3 gap-10 md:grid-cols-2 grid-cols-1">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} className="shadow-2xl p-4 rounded-2xl">
          <Image src={DataImage.Proyek1} alt="Proyek Image" className="rounded-tl-2xl rounded-tr-2xl "/>
          <h1 className="mt-6 mb-3 text-2xl font-semibold">Proyek Pertama</h1>
          <p className="text-base/loose">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit iure qui porro velit commodi voluptatem!</p>
          <div className="mt-6 mb-3">
            <Link href={"#"} className="bg-slate-700 text-white text-center p-3 rounded-xl hover:bg-slate-600 cursor-pointer">Lihat Website</Link>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{opacity: 1, y: 0}} transition={{delay: 0.3}} viewport={{once: true}}  className="shadow-2xl p-4 rounded-2xl">
          <Image src={DataImage.Proyek2} alt="Proyek Image" className="rounded-tl-2xl rounded-tr-2xl "/>
          <h1 className="mt-6 mb-3 text-2xl font-semibold">Proyek Kedua</h1>
          <p className="text-base/loose">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit iure qui porro velit commodi voluptatem!</p>
          <div className="mt-6 mb-3">
            <Link href={"#"} className="bg-slate-700 text-white text-center p-3 rounded-xl hover:bg-slate-600 cursor-pointer">Lihat Website</Link>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{opacity: 1, y: 0}} transition={{delay: 0.6}} viewport={{once: true}}  className="shadow-2xl p-4 rounded-2xl">
          <Image src={DataImage.Proyek3} alt="Proyek Image" className="rounded-tl-2xl rounded-tr-2xl "/>
          <h1 className="mt-6 mb-3 text-2xl font-semibold">Proyek Ketiga</h1>
          <p className="text-base/loose">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit iure qui porro velit commodi voluptatem!</p>
          <div className="mt-6 mb-3">
            <Link href={"#"} className="bg-slate-700 text-white text-center p-3 rounded-xl hover:bg-slate-600 cursor-pointer">Lihat Website</Link>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} className="shadow-2xl p-4 rounded-2xl">
          <Image src={DataImage.Proyek4} alt="Proyek Image" className="rounded-tl-2xl rounded-tr-2xl"/>
          <h1 className="mt-6 mb-3 text-2xl font-semibold">Proyek Keempat</h1>
          <p className="text-base/loose">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit iure qui porro velit commodi voluptatem!</p>
          <div className="mt-6 mb-3">
            <Link href={"#"} className="bg-slate-700 text-white text-center p-3 rounded-xl hover:bg-slate-600 cursor-pointer">Lihat Website</Link>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{opacity: 1, y: 0}} transition={{delay: 0.3}} viewport={{once: true}} className="shadow-2xl p-4 rounded-2xl">
          <Image src={DataImage.Proyek5} alt="Proyek Image" className="rounded-tl-2xl rounded-tr-2xl"/>
          <h1 className="mt-6 mb-3 text-2xl font-semibold">Proyek Kelima</h1>
          <p className="text-base/loose">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit iure qui porro velit commodi voluptatem!</p>
          <div className="mt-6 mb-3">
            <Link href={"#"} className="bg-slate-700 text-white text-center p-3 rounded-xl hover:bg-slate-600 cursor-pointer">Lihat Website</Link>
          </div>
        </motion.div>
      </div>
    </div>
    {/* Proyek */}


    {/* Kontak */}
    <div className="mt-32 flex items-center justify-between md:flex-row flex-col md:gap-0 gap-4" id="kontak">
      <h2 className="text-3xl font-bold">Hanji.</h2>
      <div className="flex gap-10">
        <Link href={"#beranda"}>Beranda</Link>
        <Link href={"#layanan"}>Layanan</Link>
        <Link href={"#proyek"}>Proyek</Link>
      </div>
      <div className="flex gap-4">
        <Link href={""}>
          <i className="ri-youtube-fill ri-2x"></i>
        </Link>
        <Link href={""}>
          <i className="ri-instagram-fill ri-2x"></i>
        </Link>
        <Link href={""}>
          <i className="ri-threads-fill ri-2x"></i>
        </Link>
        <Link href={""}>
          <i className="ri-reddit-fill ri-2x"></i>
        </Link>
      </div>
    </div>
    {/* Kontak */}
  </>  
  );
}
