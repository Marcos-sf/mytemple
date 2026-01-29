import PageLayout from "../components/PageLayout";
import InfoBlock from "../components/InfoBlock";

export default function Contact() {
    return (
        <PageLayout>

            <main className="bg-white text-black min-h-screen">

                {/* Banner */}
                <section className="bg-saffron text-white py-12 text-center">
                    <h1 className="text-4xl font-bold uppercase tracking-wider text-templePurple">Contact Us</h1>
                    <p className="opacity-90 mt-2 text-templePurple font-medium">Get in touch with Shri Kshetra Varadahalli</p>
                </section>

                {/* Address & Image Section */}
                <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                    {/* Left: Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-templePurple mb-4 uppercase">Address</h2>
                            <div className="space-y-2 text-gray-700 leading-relaxed font-medium">
                                <p>Shri Durgamba Temple & Shri Sridhara Swami Ashram</p>
                                <p>Varadapura, Sagar Taluk,</p>
                                <p>Shimoga District, Karnataka - 577401</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-templePurple mb-2 uppercase">Phone Number</h3>
                            <p className="text-saffron font-bold text-xl">+91 94800 00000</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-templePurple mb-2 uppercase">Email ID</h3>
                            <p className="text-gray-700">info@varadahalli.org</p>
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="h-[300px] md:h-[400px] bg-templePurple/10 rounded-lg overflow-hidden shadow-lg border-2 border-templePurple/20">
                        <img src="/images/intro/v3.jpeg" alt="Temple Premises" className="w-full h-full object-cover" />
                    </div>
                </section>

                {/* FAQs */}
                <section className="bg-gray-100 py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-templePurple mb-10 text-center uppercase">FAQs</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* FAQ 1 */}
                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-saffron">
                                <h3 className="font-bold text-lg mb-2">What are the temple timings?</h3>
                                <p className="text-sm opacity-80">The temple is open from 6:00 AM to 8:30 PM. The main Maha Mangalarathi is at 12:00 PM.</p>
                            </div>
                            {/* FAQ 2 */}
                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-saffron">
                                <h3 className="font-bold text-lg mb-2">Is accommodation available?</h3>
                                <p className="text-sm opacity-80">Yes, simple accommodation is available at the Ashram for devotees. Please contact the office upon arrival.</p>
                            </div>
                            {/* FAQ 3 */}
                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-saffron">
                                <h3 className="font-bold text-lg mb-2">Is there parking available?</h3>
                                <p className="text-sm opacity-80">Yes, there is ample parking space available near the temple entrance for vehicles.</p>
                            </div>
                            {/* FAQ 4 */}
                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-saffron">
                                <h3 className="font-bold text-lg mb-2">Are specific sevas available?</h3>
                                <p className="text-sm opacity-80">Yes, various sevas like Kumkumarchana, Rudrabhisheka, and Satyanarayana Poole are performed. Inquire at the office.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Temple Importance & Map */}
                <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Importance Text */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-templePurple">Temple Importance</h2>
                        <p className="text-justify leading-relaxed text-gray-700">
                            Shri Kshetra Varadahalli is generally considered very important for spiritual seekers. It is a place of peace, penance, and power.
                            Devotees believe that praying to Durgamba Devi here fulfills their wishes, hence the name 'Varadahalli' (Village of Boons).
                        </p>
                        <p className="text-justify leading-relaxed text-gray-700">
                            The presence of the Dharma Dhwaja and Swamiji's Samadhi adds to the sanctity, making it a must-visit pilgrimage center.
                        </p>
                    </div>

                    {/* Map */}
                    <div className="h-[300px] w-full rounded-lg overflow-hidden shadow-xl border-4 border-white">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61906.86336236049!2d74.94744271530881!3d14.12557080889403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbb8a6706582655%3A0x2c2deb05858586c7!2sVaradapura%2C%20Karnataka%20577401!5e0!3m2!1sen!2sin!4v1769678376479!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </section>

            </main>

            <InfoBlock />
        </PageLayout>
    );
}
