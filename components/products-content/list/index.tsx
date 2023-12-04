// components/products-content/index.tsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductItem from '../../product-item';
import ProductsLoading from './loading';

const ProductsContent = () => {
  const [data, setData] = useState<any[] | null>(null); // Use 'any' if you don't have a specific type
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/products');
        setData(response.data.data);
      } catch (error) {
        setError('Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <ProductsLoading />;
  }

  return (
    <section className="products-list">
      {Array.isArray(data) ? (
        data.map((item) => (
          <ProductItem
            id={item.id}
            name={item.name}
            price={item.price}
            // color={item.color}
            // currentPrice={item.currentPrice}
            key={item.id}
            // images={item.images}
          />
        ))
      ) : (
        <div>Data is not an array</div>
      )}
    </section>
  );
};

export default ProductsContent;
