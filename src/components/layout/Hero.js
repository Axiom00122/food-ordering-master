export default function Hero() {
  return (
    <section className="hero animate-fade p-4">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Everything is better<br />
          with a <span className="text-primary">Pizza</span>
        </h1>
        <p className="my-6 text-gray-600 text-lg">
          Pizza is the missing piece that makes every day complete
        </p>
        <div className="flex gap-4">
         <button className="btn-primary bg-primary text-white px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300">
  ORDER NOW
</button>
          <button className="btn border border-gray-300 hover:bg-gray-50">
            Learn more
          </button>
        </div>
      </div>
      <div className="relative w-full h-64 md:h-[500px]">
        <img 
          src="/pizza.png" 
full
          className="object-contain animate-fadeIn"
          alt="Pizza"
priority

        />
      </div>
    </section>
  );
}