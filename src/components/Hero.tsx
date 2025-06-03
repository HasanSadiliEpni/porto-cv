import Image from "next/image";
import SplitText from "@/components/SplitText/SplitText";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-24 bg-white">
      {/* Foto profil */}
      <div className="w-32 h-32 md:w-40 md:h-40 relative mb-6">
        <Image
          src="/profile.jpg"
          alt="Foto Profil"
          layout="fill"
          objectFit="cover"
          className="rounded-full border-4 border-gray-900 shadow-lg"
        />
      </div>

      {/* Animasi teks */}
      <SplitText
        text="Halo, saya Hasan Sadili Epni"
        className="text-3xl md:text-5xl font-bold mb-4"
        delay={100}
      />

      <p className="text-lg md:text-xl max-w-2xl text-gray-600">
        Saya seorang Full-Stack Developer yang membangun pengalaman web yang luar biasa dan berdampak.
      </p>
    </section>
  );
}
