import React, { useState, useEffect } from 'react';
import recipesData from '../data.json';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Load mock data into state when component mounts
    setRecipes(recipesData);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          🍳 Delicious Recipes
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          Explore easy-to-make recipes from around the world
        </p>
      </header>

      {/* Responsive grid */}
      <section className="grid gap-8
                          sm:grid-cols-2     /* ≥640px → 2 columns */
                          lg:grid-cols-3     /* ≥1024px → 3 columns */
                          xl:grid-cols-4">   {/* ≥1280px → 4 columns */}
        {recipes.map((recipe) => (
          <article
            key={recipe.id}
            className="
              bg-white rounded-xl shadow-md
              overflow-hidden transform transition
              duration-300 hover:shadow-2xl hover:scale-105
            "
          >
            {/* Image */}
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-56 object-cover"
            />

            {/* Text content */}
            <div className="p-5 flex flex-col h-full">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {recipe.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                {recipe.summary}
              </p>
              <button
                className="
                  mt-4 bg-green-500 text-white py-2 px-4
                  rounded-lg hover:bg-green-600
                  transition-colors duration-200
                "
              >
                View Recipe
              </button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default HomePage;
