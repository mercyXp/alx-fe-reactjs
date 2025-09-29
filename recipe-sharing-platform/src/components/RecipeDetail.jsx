import { useParams, Link } from 'react-router-dom';
import recipes from '../data/data.json';

export default function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id.toString() === id);

  if (!recipe) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold text-red-500">Recipe not found!</h1>
        <Link to="/" className="text-blue-600 underline mt-4 block">Go Back</Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Link to="/" className="text-blue-600 underline mb-4 inline-block">← Back to Home</Link>

      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-xl mb-6 shadow"
      />

      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <p className="text-gray-700 mb-6">{recipe.description}</p>

      {/* Ingredients */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul className="list-disc list-inside space-y-2 bg-gray-50 p-4 rounded-xl">
          {recipe.ingredients.map((item, idx) => (
            <li key={idx} className="text-gray-800">{item}</li>
          ))}
        </ul>
      </section>

      {/* Instructions */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Cooking Instructions</h2>
        <ol className="list-decimal list-inside space-y-3 bg-gray-50 p-4 rounded-xl">
          {recipe.instructions.map((step, idx) => (
            <li key={idx} className="text-gray-800">{step}</li>
          ))}
        </ol>
      </section>
    </div>
  );
}
