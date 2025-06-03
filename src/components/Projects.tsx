export default function Projects() {
  return (
    <section id="projects" className="py-12 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <div className="bg-white shadow-md p-6 rounded-xl transition hover:shadow-lg">
          <h3 className="text-xl font-semibold">Tourify – Community-Based Tourism App</h3>
          <p className="mt-2 text-gray-600">Marketplace untuk layanan pariwisata lokal. Dibuat dengan Next.js dan Firebase.</p>
          <a href="#" className="text-blue-600 mt-4 inline-block">Lihat Project →</a>
        </div>
        <div className="bg-white shadow-md p-6 rounded-xl transition hover:shadow-lg">
          <h3 className="text-xl font-semibold">Smart Inventory Dashboard</h3>
          <p className="mt-2 text-gray-600">Sistem manajemen persediaan UMKM. Menggunakan React, Chart.js, dan Express.js.</p>
          <a href="#" className="text-blue-600 mt-4 inline-block">Lihat Project →</a>
        </div>
      </div>
    </section>
  );
}
