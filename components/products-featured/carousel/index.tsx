import { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductsLoading from '../../products-content/list/loading';
import ProductItem from './../../product-item';

const apiURL = 'http://localhost:8000/api/products';

const ProductsCarousel = () => {
  const [data, setData] = useState<any[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiURL);
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

  if (error) {
    return <div>Error: {error}</div>;
  }

  let slidesPerView = 1.3;
  let centeredSlides = window.innerWidth <= 768;
  let spaceBetween = 30;

  if (window.innerWidth > 768) {
    slidesPerView = 3;
    spaceBetween = 35;
    centeredSlides = false;
  }

  if (window.innerWidth > 1024) {
    slidesPerView = 4;
    spaceBetween = 65;
    centeredSlides = false;
  }

  return (
    <div className="products-carousel">
      <Swiper
        spaceBetween={spaceBetween}
        loop={true}
        centeredSlides={centeredSlides}
        watchOverflow={true}
        slidesPerView={slidesPerView}
        className="swiper-wrapper"
      >
        {Array.isArray(data) ? (
          data.map((item) => (
            <SwiperSlide key={item.id} className="products-list">
              <ProductItem
                id={item.id}
                name={item.name}
                price={item.price}
                key={item.id}
              />
            </SwiperSlide>
          ))
        ) : (
          <div>Data is not an array</div>
        )}
      </Swiper>
    </div>
  );
};

export default ProductsCarousel;
