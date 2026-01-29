import PageLayout from "../components/PageLayout";
import InfoBlock from "../components/InfoBlock";

export default function Donate() {
    return (
        <PageLayout>
            <main className="bg-white text-black min-h-screen">
                {/* Banner */}
                <section className="bg-saffron text-white py-12 text-center">
                    <h1 className="text-4xl font-bold uppercase tracking-wider text-templePurple">Donate / Seva</h1>
                    <p className="opacity-90 mt-2 text-templePurple font-medium">Contribute to the divine cause of Dharma</p>
                </section>

                {/* Content */}
                <section className="max-w-4xl mx-auto px-6 py-16">

                    <div className="space-y-6 text-center mb-16">
                        <h2 className="text-3xl font-bold text-templePurple uppercase">Your Contribution Matters</h2>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            Shri Kshetra Varadahalli runs entirely on the generous contributions of devotees.
                            Your donations help us in sustaining the daily <strong>Annadana (Free Meals)</strong>,
                            maintenance of the <strong>Goshala (Cow Shelter)</strong>, Veda Pathashala, and general development of the Kshetra.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                        {/* Bank Details */}
                        <div className="bg-gray-50 p-8 rounded-lg shadow-md border-t-4 border-templePurple">
                            <h3 className="text-2xl font-bold text-templePurple mb-6 border-b pb-2">Bank Transfer Details</h3>
                            <div className="space-y-4 text-gray-800">
                                <div>
                                    <p className="text-sm text-gray-500 uppercase font-bold">Account Name</p>
                                    <p className="text-lg font-bold">Shri Durgamba Temple Trust</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 uppercase font-bold">Bank Name</p>
                                    <p className="text-lg">State Bank of India</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 uppercase font-bold">Account Number</p>
                                    <p className="text-xl font-mono tracking-wider font-bold text-saffron">1234 5678 9012</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 uppercase font-bold">IFSC Code</p>
                                    <p className="text-lg font-mono">SBIN0001234</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 uppercase font-bold">Branch</p>
                                    <p className="text-lg">Sagar Town</p>
                                </div>
                            </div>
                        </div>

                        {/* QR Code / Checks */}
                        <div className="space-y-8">
                            <div className="bg-gray-50 p-8 rounded-lg shadow-md border-t-4 border-saffron">
                                <h3 className="text-2xl font-bold text-saffron mb-4 text-center">Scan to Donate</h3>
                                <div className="flex flex-col items-center gap-4">
                                    <div className="w-48 h-48 bg-white border-2 border-gray-200 flex items-center justify-center rounded-lg">
                                        <p className="text-gray-400 font-bold">QR Code Placeholder</p>
                                    </div>
                                    <p className="text-sm text-center text-gray-500">Scan using GPay, PhonePe, or Paytm</p>
                                </div>
                            </div>

                            <div className="text-center">
                                <p className="text-gray-600 italic">
                                    *Donations are eligible for tax exemption under 80G. Please contact the office for receipts.
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
