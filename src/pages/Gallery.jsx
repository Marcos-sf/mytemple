import PageLayout from "../components/PageLayout";
import InfoBlock from "../components/InfoBlock";

const galleryImages = [
    { src: "/images/gallery/pillar.jpg", desc: "Ancient Stone Pillars reflecting the Vijayanagara style architecture." },
    { src: "/images/gallery/steps.jpg", desc: "The stone steps leading up to the serene Durgamba Temple." },
    { src: "/images/gallery/landscape.jpg", desc: "Breathtaking panoramic view of the Western Ghats form the hill." },
    { src: "/images/gallery/pond.jpg", desc: "The sacred Pushkarini (Temple Pond) known for its holy waters." },
    { src: "/images/intro/v3.jpeg", desc: "Devotees gathering near the Dharma Dhwaja pillar." },
    { src: "/images/intro/v1.jpeg", desc: "Walkway amidst the lush green forest surroundings." },
    { src: "/images/intro/v2.jpeg", desc: "The peaceful ashram complex nestled in nature." },
    { src: "/images/intro/banner.jpg", desc: "Main entrance to the spiritual abode of Shri Sridhara Swami." },
];

export default function Gallery() {
    return (
        <PageLayout>

            <main className="bg-white text-black min-h-screen">
                {/* Banner */}
                <section className="bg-saffron text-white py-12 text-center">
                    <h1 className="text-4xl font-bold uppercase tracking-wider text-templePurple">Temple Gallery</h1>
                    <p className="opacity-90 mt-2 text-templePurple font-medium">Glimpses of the Divine Shri Kshetra</p>
                </section>

                {/* Gallery Grid */}
                <section className="max-w-7xl mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {galleryImages.map((img, index) => (
                            <div key={index} className="group cursor-pointer">
                                <div className="h-64 overflow-hidden rounded-lg shadow-lg border-2 border-transparent group-hover:border-templePurple transition-all duration-300">
                                    <img
                                        src={img.src}
                                        alt={img.desc}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="mt-3 text-center">
                                    <p className="text-sm font-medium text-gray-700 group-hover:text-templePurple transition-colors">
                                        {img.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </main>

            <InfoBlock />
        </PageLayout>
    );
}
