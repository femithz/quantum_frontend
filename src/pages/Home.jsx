import HeroSection from "../components/hero/Hero"
import Items from "../components/items/Items"
import ItemModal from "../components/items/itemModal/itemModal";
import  { useState, useEffect } from 'react';
import axios from 'axios'
function Home() {
  const [items, setITEMs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await axios.get('http://localhost:3000/api/v1/items');
              setITEMs(response.data.data);
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };
      fetchData();
  }, []);

  const handleItemAdded = (newItem) => {
      setITEMs([...items, newItem]);
  };
  return (
    <>
        <HeroSection onAddNewItem={() => setIsModalOpen(true)} />
        <Items items={items} />
        <ItemModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onItemAdded={handleItemAdded}
            />
    </>
  )
}

export default Home