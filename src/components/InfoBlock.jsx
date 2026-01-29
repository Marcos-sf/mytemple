export default function InfoBlock() {
  return (
    <section className="w-full bg-templeDark text-white py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Text Block */}
        <div className="space-y-6 text-opacity-80 text-sm leading-relaxed">
          <div>
            <h2 className="text-3xl font-bold text-saffron mb-2 uppercase tracking-wide">Request a Call Back</h2>
            <p className="text-white/80">
              Have questions or want to know more about the Seva opportunities?
              Leave your details, and our volunteers will reach out to you shortly.
            </p>
          </div>


        </div>

        {/* Right Contact/Form Block */}
        <div className="bg-white/5 p-6 rounded-lg border border-white/10">
          <h3 className="text-xl font-bold text-saffron mb-4 uppercase">Contact Us</h3>
          <form className="space-y-3">
            <input type="text" placeholder="Name" className="w-full bg-white/10 border border-white/20 p-2 text-white placeholder-white/50 focus:outline-none focus:border-saffron" />
            <input type="email" placeholder="Email" className="w-full bg-white/10 border border-white/20 p-2 text-white placeholder-white/50 focus:outline-none focus:border-saffron" />
            <textarea placeholder="Message" rows="3" className="w-full bg-white/10 border border-white/20 p-2 text-white placeholder-white/50 focus:outline-none focus:border-saffron"></textarea>
            <button className="w-full bg-saffron hover:bg-orange-600 text-white font-bold py-2 uppercase tracking-wide transition-colors">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
