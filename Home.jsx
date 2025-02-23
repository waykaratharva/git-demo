import React from 'react';
import "./Home.css"
const Home = () => {
  return (
    <div>
      {/* Hero Image Section */}
      <div className="hero-image" style={{ position: 'relative'}}>
        {/* <img src="" className="img-fluid w-100" alt="Delicious Recipe"  /> */}
        <div className="hero-text" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
      <h1 style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', fontSize: '3rem', padding: '10px', borderRadius: '5px' }}>Welcome To Luxury Recipes House</h1>

          <p>Expreince some delicious Recipes here and Be your's!</p>
        </div>
      </div>

      {/* Recipe Cards Section */}
      <div className="row row-cols-1 row-cols-md-2 g-4 m-2">
        <div className="col">
          <div className="card">
            <img src="/image.png" className="card-img-top" alt="Hyderabadi Biryani" />
            <div className="card-body">
              <h5 className="card-title">Hyderabadi Biryani</h5>
              <p className="card-text">Hyderabadi Biryani is a flavorful, aromatic rice dish made by layering marinated meat (usually chicken or mutton) with basmati rice, saffron, and a blend of traditional spices, then slow-cooked using the dum method. It’s served with raita or salan, offering a perfect balance of spice and richness.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="tandoor.jpg" className="card-img-top" alt="Tandoor"/>
            <div className="card-body">
              <h5 className="card-title">Tandoor</h5>
              <p className="card-text">Tandoor cooking involves marinating meats, vegetables, or breads with spices and yogurt, then roasting them in a clay oven (tandoor) at high temperatures for a smoky flavor. Popular tandoori dishes include Tandoori Chicken, Paneer Tikka, and Naan.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="paneer chili.jpg" className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">Paneer Chili</h5>
              <p className="card-text">Paneer Chilli is a popular Indo-Chinese dish made with crispy fried paneer cubes tossed in a spicy, tangy sauce of soy, chili, and bell peppers. It’s served as a flavorful appetizer or side dish, often garnished with spring onions.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="veg machurian.jpg" className="card-img-top" alt="Veg Recipes" />
            <div className="card-body">
              <h5 className="card-title">Veg Manchurian</h5>
              <p className="card-text">Veg Manchurian is a popular Indo-Chinese dish made of crispy vegetable balls tossed in a spicy, tangy soy-based sauce with garlic, ginger, and spring onions. It’s served dry as an appetizer or with gravy alongside fried rice or noodles.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home; 