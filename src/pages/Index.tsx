
import { motion } from "framer-motion";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";

const products = [
  {
    id: 1,
    name: "T-shirt basique",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?fit=crop&w=800&h=1000",
  },
  {
    id: 2,
    name: "Veste en jean",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?fit=crop&w=800&h=1000",
  },
  {
    id: 3,
    name: "Pantalon chino",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?fit=crop&w=800&h=1000",
  },
  {
    id: 4,
    name: "Pull en laine",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?fit=crop&w=800&h=1000",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-secondary">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="h-screen relative flex items-center justify-center bg-secondary">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 px-4"
          >
            <h1 className="text-4xl md:text-6xl font-light">Nouvelle Collection</h1>
            <p className="text-gray-600 max-w-md mx-auto">
              Découvrez notre sélection de vêtements tendance pour cette saison
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors">
              Découvrir
            </button>
          </motion.div>
        </section>

        {/* Products Grid */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-2xl font-light mb-8">Produits Populaires</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {products.map((product) => (
              <ProductCard 
                key={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-light mb-8">Nos Catégories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="aspect-[4/5] relative overflow-hidden bg-gray-100 cursor-pointer group"
              >
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  alt="Femmes"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors flex items-center justify-center">
                  <h3 className="text-white text-2xl font-light">Femmes</h3>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="aspect-[4/5] relative overflow-hidden bg-gray-100 cursor-pointer group"
              >
                <img
                  src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b"
                  alt="Hommes"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors flex items-center justify-center">
                  <h3 className="text-white text-2xl font-light">Hommes</h3>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="aspect-[4/5] relative overflow-hidden bg-gray-100 cursor-pointer group"
              >
                <img
                  src="https://images.unsplash.com/photo-1527576539890-dfa815648363"
                  alt="Accessoires"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors flex items-center justify-center">
                  <h3 className="text-white text-2xl font-light">Accessoires</h3>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
