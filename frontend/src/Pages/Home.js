import React from 'react';
import { useState } from 'react';
import Carousel from '../Components/carousel';
import Card from '../Components/card';
import Footer from '../Components/footer';
import democracy from '../Images/democracy.jpg';
import atomic from '../Images/atomic.jpg';
import jujutsu from '../Images/jujutsu.jpg';
import see from '../Images/see.jpg';
import CustomNavbar from '../Components/Navbar';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchQuery = (query) => {
    setSearchQuery(query);
  };
  const generateCards = () => {
    const cardData = [
      { imageUrl: democracy,          title: 'Democracy and race',    text: 'Embark on a literary journey with this captivating tale of adventure and discovery.' },
      { imageUrl: atomic,          title: 'Atomic habits',    text: 'Explore the complexities of love and relationships in this heartwarming novel.' },
      { imageUrl: jujutsu,         title: 'jujutsu kaisen',              text: 'Step into the historical past with this enchanting depiction of ancient times.' },
      { imageUrl: see,        title: 'see inside space',                 text: 'Dive into the world of wildlife and nature with this beautifully illustrated book.' },
     
      // Add more card data entries for each card
    ];

    const filteredCardData = cardData.filter(({ title }) =>
    title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return filteredCardData.map(({ imageUrl, title, text }, index) => (
    <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <Card imageUrl={imageUrl} title={title} text={text} />
    </div>
  ));
};

return (
  <div>
    <CustomNavbar/>
    <Carousel onSearchQuery={handleSearchQuery} />
    <div className="text-center bg-dark p-2 rounded shadow">
      <div className="text-white display-6 font-weight-bold" >
        Welcome to Library Management.
      </div>
    </div>
    <div className="container">
      <div className="row">
        {generateCards()}
      </div>
    </div>
    <Footer />
  </div>
);
}

export default Home;