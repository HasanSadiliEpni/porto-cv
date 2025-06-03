export default function Contact() {
  return (
    <section id="contact" className="py-12 px-4 text-center bg-black text-white">
      <h2 className="text-3xl font-bold mb-6">Lets Connect</h2>
      <p className="text-gray-300 mb-4">Tertarik bekerja sama atau ingin tahu lebih lanjut? Kirimkan pesan ke:</p>
      <p className="text-xl font-semibold break-words">youremail@example.com</p>

      <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
        <a href="https://linkedin.com/in/yourname" className="underline hover:text-blue-400 transition">LinkedIn</a>
        <a href="https://github.com/yourusername" className="underline hover:text-blue-400 transition">GitHub</a>
        <a href="/CV.pdf" className="underline hover:text-blue-400 transition">Download CV</a>
      </div>
    </section>
  );
}
