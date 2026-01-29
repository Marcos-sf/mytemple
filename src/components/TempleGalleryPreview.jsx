export default function TempleGalleryPreview() {
  return (
    <section className="w-full bg-white text-black py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-8">
          <div className="inline-block bg-templePurple text-white px-12 py-1 rounded-sm">
            <h2 className="text-xl font-bold uppercase tracking-widest">Sample Images</h2>
          </div>
        </div>

        {/* Gallery Grid - Mimicking the layout in the image */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-[500px]">

          {/* Large Left Block - Pillar */}
          <div className="md:col-span-2 md:row-span-2 bg-templePurple/10 rounded-sm relative overflow-hidden group h-[300px] md:h-full">
            <img src="/images/gallery/pillar.jpg" alt="Temple Pillar" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>

          {/* Right Top Two */}
          <div className="bg-templePurple/10 rounded-sm h-[200px] md:h-auto relative overflow-hidden group">
            <img src="/images/gallery/steps.jpg" alt="Temple Steps" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
          <div className="bg-templePurple/10 rounded-sm h-[200px] md:h-auto relative overflow-hidden group">
            <img src="/images/gallery/landscape.jpg" alt="Temple Landscape" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>

          {/* Right Bottom Large - Pond */}
          <div className="md:col-span-2 bg-templePurple/10 rounded-sm h-[200px] md:h-auto relative overflow-hidden group">
            <img src="/images/gallery/pond.jpg" alt="Temple Pond" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>

        </div>
      </div>
    </section>
  );
}
