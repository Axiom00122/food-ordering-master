'use client';
import MenuItem from "@/components/menu/MenuItem";
import MenuNavbar from '@/components/MenuNavbar';

const menuItems = [
  {
    id: 1,
    section: "Chicken Specialties",
    items: [
      {
        id: 101,
        name: "Butter Chicken",
        description: "Tandoori chicken in creamy tomato butter sauce",
        price: 14.50,
        image: "/images/menu/butter-chicken.jpg"
      },
      {
        id: 102,
        name: "Chicken Tikka Masala",
        description: "Grilled chicken chunks in spiced curry sauce",
        price: 15.00,
        image: "/images/menu/chicken-tikka-masala.jpg"
      },
      {
        id: 103,
        name: "Chicken Vindaloo",
        description: "Spicy Goan curry with potatoes",
        price: 14.75,
        image: "/images/menu/chicken-vindaloo.jpg"
      },
      {
        id: 104,
        name: "Chicken Korma",
        description: "Mild creamy curry with nuts and coconut",
        price: 14.50,
        image: "/images/menu/chicken-korma.jpg"
      },
      {
        id: 105,
        name: "Chicken Saag",
        description: "Chicken with spinach and spices",
        price: 14.25,
        image: "/images/menu/chicken-saag.jpg"
      },
      {
        id: 106,
        name: "Tandoori Chicken",
        description: "Marinated chicken cooked in clay oven",
        price: 13.75,
        image: "/images/menu/tandoori-chicken.jpg"
      }
    ]
  },
  {
    id: 2,
    section: "Lamb & Goat Specialties",
    items: [
      {
        id: 201,
        name: "Lamb Rogan Josh",
        description: "Aromatic Kashmiri lamb curry",
        price: 16.50,
        image: "/images/menu/lamb-rogan-josh.jpg"
      },
      {
        id: 202,
        name: "Goat Curry",
        description: "Traditional spicy goat curry",
        price: 17.00,
        image: "/images/menu/goat-curry.jpg"
      },
      {
        id: 203,
        name: "Lamb Biryani",
        description: "Fragrant rice with tender lamb pieces",
        price: 16.75,
        image: "/images/menu/lamb-biryani.jpg"
      },
      {
        id: 204,
        name: "Keema Matar",
        description: "Spiced minced lamb with peas",
        price: 15.50,
        image: "/images/menu/keema-matar.jpg"
      }
    ]
  },
  {
    id: 3,
    section: "Vegetarian Delights",
    items: [
      {
        id: 301,
        name: "Paneer Tikka Masala",
        description: "Grilled cottage cheese in creamy sauce",
        price: 13.50,
        image: "/images/menu/paneer-tikka.jpg"
      },
      {
        id: 302,
        name: "Chana Masala",
        description: "Spiced chickpea curry",
        price: 12.50,
        image: "/images/menu/chana-masala.jpg"
      },
      {
        id: 303,
        name: "Dal Makhani",
        description: "Creamy black lentils",
        price: 12.00,
        image: "/images/menu/dal-makhani.jpg"
      },
      {
        id: 304,
        name: "Aloo Gobi",
        description: "Potato and cauliflower curry",
        price: 12.25,
        image: "/images/menu/aloo-gobi.jpg"
      }
    ]
  },
  {
    id: 4,
    section: "Breads & Rice",
    items: [
      {
        id: 401,
        name: "Garlic Naan",
        description: "Leavened bread with garlic",
        price: 3.50,
        image: "/images/menu/garlic-naan.jpg"
      },
      {
        id: 402,
        name: "Basmati Rice",
        description: "Steamed fragrant rice",
        price: 4.00,
        image: "/images/menu/basmati-rice.jpg"
      },
      {
        id: 403,
        name: "Pulao Rice",
        description: "Seasoned rice with vegetables",
        price: 5.00,
        image: "/images/menu/pulao-rice.jpg"
      },
      {
        id: 404,
        name: "Roti",
        description: "Whole wheat flatbread",
        price: 2.50,
        image: "/images/menu/roti.jpg"
      }
    ]
  },
  {
    id: 5,
    section: "Beverages",
    items: [
      {
        id: 501,
        name: "Mango Lassi",
        description: "Sweet yogurt mango drink",
        price: 4.50,
        image: "/images/menu/mango-lassi.jpg"
      },
      {
        id: 502,
        name: "Masala Chai",
        description: "Spiced Indian tea",
        price: 3.00,
        image: "/images/menu/masala-chai.jpg"
      },
      {
        id: 503,
        name: "Sweet Lime Soda",
        description: "Refreshing lime drink",
        price: 3.50,
        image: "/images/menu/lime-soda.jpg"
      }
    ]
  }
];
export default function MenuPage() {
  return (
    <div className="bg-[#FAFAFA] pb-16">
            <main className="pt-28 pb-16"> {/* pt-28 matches navbar height */}
       <div className="max-w-6xl mx-auto px-4">
          {/* Menu Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-[#D4AF37] mb-2">
              AUTHENTIC INDIAN FLAVORS
            </h1>
            <h2 className="text-2xl font-semibold text-gray-800">
              Our Exquisite Menu
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-4"></div>
          </div>

          {/* Menu Sections */}
          {menuItems.map((section) => (
            <section 
              key={section.id} 
              className="mb-16 bg-white p-8 rounded-lg shadow-sm"
            >
              <div className="border-b border-[#D4AF37] pb-3 mb-6">
                <h2 className="text-2xl font-bold text-[#D4AF37]">
                  {section.section}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item) => (
                  <MenuItem key={item.id} {...item} />
                ))}
              </div>
            </section>
          ))}

          {/* Footer Note */}
          <div className="text-center mt-8">
            <p className="text-[#D4AF37] font-medium italic">
              * All dishes prepared with authentic Indian spices *
            </p>
            <p className="text-gray-600 mt-2">
              Ask your server about today's specials!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}