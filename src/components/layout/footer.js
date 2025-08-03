export default function Footer() {
  return (
    <footer className="border-t p-8 text-center text-gray-500 bg-white mt-16">
      <div className="max-w-4xl mx-auto">
        &copy; {new Date().getFullYear()} India Gate - Pizzería y Restaurante. All rights reserved.
        <div className="mt-4">
          <p>Barcelona: Carrer Example 123 | Viladecans: Avinguda Sample 456</p>
        </div>
      </div>
    </footer>
  );
}