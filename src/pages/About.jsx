import PageLayout from "../components/PageLayout";
import InfoBlock from "../components/InfoBlock";

export default function About() {
    return (
        <PageLayout>

            <main className="bg-white text-black">
                {/* Banner / Title */}
                <section className="bg-templePurple text-white py-12 text-center">
                    <h1 className="text-4xl font-bold uppercase tracking-wider text-saffron">About Us</h1>
                    <p className="opacity-80 mt-2">Discover the divinity and history of Shri Kshetra Varadahalli</p>
                </section>

                {/* Introduction */}
                <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="h-[400px] rounded-lg overflow-hidden shadow-xl border-4 border-templePurple/20">
                        <img src="/images/intro/v2.jpeg" alt="Varadahalli Landscape" className="w-full h-full object-cover" />
                    </div>
                    <div className="space-y-6 text-justify leading-relaxed text-gray-800">
                        <h2 className="text-3xl font-bold text-templePurple">A Sacred Place of Penance</h2>
                        <p>
                            Shri Kshetra Varadahalli, also known as Varadapura, is situated in the lush green Sahyadri mountain ranges near Sagar, Karnataka.
                            This holy place has a history dating back to ancient times and is believed to be the abode where <strong>Maharshi Ved Vyasa</strong> performed penance.
                        </p>
                        <p>
                            The Durgamba Temple here was established by Ved Vyasa himself. The serene atmosphere, the holy ponds (Pushkarinis), and the rich spiritual vibrations make it a unique destination for seekers of truth and peace.
                        </p>
                    </div>
                </section>

                {/* Puja Timings */}
                <section className="bg-gray-100 py-16 text-center">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-templePurple mb-8 uppercase">Puja Timings</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Morning */}
                            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-saffron">
                                <h3 className="text-xl font-bold mb-4 text-saffron">Morning Seva</h3>
                                <ul className="space-y-2 opacity-80">
                                    <li className="flex justify-between"><span>Pada Pooja</span> <span>8:30 AM & 10:30 AM</span></li>
                                    <li className="flex justify-between"><span>Maha Mangalarathi</span> <span>12:00 PM</span></li>
                                    <li className="flex justify-between"><span>Prasada Viniyoga</span> <span>12:30 PM</span></li>
                                </ul>
                            </div>

                            {/* Evening */}
                            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-templePurple">
                                <h3 className="text-xl font-bold mb-4 text-templePurple">Evening Seva</h3>
                                <ul className="space-y-2 opacity-80">
                                    <li className="flex justify-between"><span>Lalitha Sahasranama</span> <span>5:30 PM</span></li>
                                    <li className="flex justify-between"><span>Maha Mangalarathi</span> <span>7:30 PM</span></li>
                                    <li className="flex justify-between"><span>Temple Closes</span> <span>8:30 PM</span></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </section>

                {/* History */}
                <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 space-y-6 text-justify leading-relaxed text-gray-800">
                        <h2 className="text-3xl font-bold text-templePurple">The Legacy of Shri Sridhara Swami</h2>
                        <p>
                            The kshetra witnessed a spiritual renaissance with the arrival of the great saint, <strong>Bhagawan Shri Sridhara Swami Maharaj</strong>.
                            Swamiji, a devotee of Lord Rama and Samarth Ramdas, traveled across India propagating the Sanatana Dharma.
                        </p>
                        <p>
                            In 1954, he chose Varadahalli for his solitude and spiritual practice. He established the Ashram, installed the <strong>Dharma Dhwaja</strong> (Flag of Righteousness), and blessed the land with his intense Tapas. His Samadhi Mandir at the hill top is a powerhouse of spiritual energy, attracting thousands of devotees.
                        </p>
                    </div>
                    <div className="order-1 md:order-2 h-[400px] rounded-lg overflow-hidden shadow-xl border-4 border-saffron/20">
                        <img src="/images/intro/v3.jpeg" alt="Shri Sridhara Swami Pillar" className="w-full h-full object-cover" />
                    </div>
                </section>

                {/* How To Reach */}
                <section className="bg-templePurple text-white py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-saffron mb-10 text-center uppercase">How To Reach</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                            <div className="text-center space-y-4">
                                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto text-3xl">🚌</div>
                                <h3 className="text-xl font-bold">By Road</h3>
                                <p className="opacity-80 text-sm">
                                    Regular buses are available from Sagar (6km) and Shimoga (72km). Direct buses also operate from Bangalore to Sagar.
                                </p>
                            </div>

                            <div className="text-center space-y-4">
                                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto text-3xl">🚂</div>
                                <h3 className="text-xl font-bold">By Train</h3>
                                <p className="opacity-80 text-sm">
                                    The nearest railway station is <strong>Sagar Jambagaru (SRF)</strong>, which is well connected to Bangalore and Shimoga.
                                </p>
                            </div>

                            <div className="text-center space-y-4">
                                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto text-3xl">✈️</div>
                                <h3 className="text-xl font-bold">By Air</h3>
                                <p className="opacity-80 text-sm">
                                    Nearest airports are <strong>Shivamogga Airport (RQY)</strong> (~80km) and Mangalore International Airport (~180km).
                                </p>
                            </div>

                        </div>




                    </div>
                </section>

            </main>

            <InfoBlock />
        </PageLayout>
    );
}
