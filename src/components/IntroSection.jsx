export default function IntroSection() {
  return (
    <section className="w-full bg-templePurple py-8 text-white text-center md:text-left">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

        {/* Text Content - Spans 2 columns */}
        <div className="md:col-span-1 space-y-6">
          <div>
            <h2 className="text-4xl font-bold mb-2 text-saffron">A Spiritual Heaven in the Sahyadris</h2>
            <h3 className="text-xl font-light opacity-90">The Divine Abode of Shri Sridhara Swami Maharaj</h3>
          </div>

          <div className="text-sm opacity-90 leading-relaxed space-y-4 text-justify">
            <p>
              Shri Kshetra Varadahalli (Varadapura) is a significant pilgrimage center nestled in the picturesque Western Ghats near Sagar, Karnataka. Steeped in ancient history, it is believed to be the sacred ground where Maharshi Ved Vyasa meditated and established the Durgamba Temple.
            </p>
            <p>
              The place gained modern prominence through the presence of the revered saint, **Shri Sridhara Swami Maharaj**, who established his ashram here in 1954. Attracted by the serenity and spiritual vibrations, Swamiji chose this location for his solitary sadhana and spent his final years here.
            </p>
          </div>

          <button className="bg-white text-templePurple hover:bg-gray-200 px-8 py-2 rounded-sm font-bold uppercase tracking-wide transition-colors mt-4">
            Learn More
          </button>
        </div>

        {/* Image - Spans 1 column */}
        {/* Image - Spans 1 column */}
        <div className="md:col-span-2 h-full min-h-[300px]">
          <img
            src="/images/intro/banner.jpg"
            alt="Shri Kshetra Varadahalli Ashram"
            className="w-full h-full object-cover rounded-lg shadow-2xl border-4 border-white/20"
          />
        </div>

      </div>
    </section>
  );
}
