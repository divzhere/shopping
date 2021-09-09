import React from "react";
import Card from "../card/Card";
import axios from "axios";
import "./products.scss";
export default function Products() {
  const [products, setProducts] = React.useState([]);
  const [gender, setGender] = React.useState("");
  const [brands, setBrands] = React.useState([]);
  const [filterBrands, setfilterBrands] = React.useState([]);
  const [checked, setChecked] = React.useState(false);
  const [req, setReq] = React.useState({});
  //   const handleGender = (e) => {
  //     setGender(e.target.value);
  //     const filtered = products.filter(function filtergender(val){
  //         if(val.gender === va)
  //     })
  //   };

  const handleFiltering = () => {
    let filteredCards = req.filter(function filterProducts(val) {
      if (filterBrands.includes(val.brand)) {
        return val;
      }
    });

    setProducts(filteredCards);
  };
  const handleBrands = (e) => {
    setChecked(!checked);

    if (filterBrands.includes(e.target.value)) {
      //   let index = filterBrands.indexOf(e.target.value);
      //   if (index > -1) {
      //     let filtered = filterBrands.splice(index, 1);
      //     setfilterBrands(filtered);
      //   }
      let filtered = filterBrands.filter((item) => item !== e.target.value);
      setfilterBrands(filtered);
      handleFiltering();
    } else {
      setfilterBrands([...filterBrands, e.target.value]);
      handleFiltering();
    }
  };

  React.useEffect(async () => {
    const req = await axios.get(`https://demo7242716.mockable.io/products`);
    setProducts(req.data.products);
    setReq(req.data.products);
    let brandsList = [];

    req.data.products.forEach((element) => {
      if (!brandsList.includes(element.brand)) {
        brandsList.push(element.brand);
      }
    });

    setBrands(brandsList);
  }, []);

  return (
    <>
      <div className="brands_filter">
        <h4>Brands:</h4>
        {brands.map((brand, i) => (
          <div className="filter_option">
            <input
              type="checkbox"
              key={i}
              value={brand}
              className="input_checkbox"
              //checked={filterBrands.includes(brand) ? true : false}
              onClick={handleBrands}
            />{" "}
            <span className="input_checkbox_label">{brand}</span>
          </div>
        ))}
      </div>
      <section className="filter_section">
        {/* <div className="gender_filters" onChange={handleGender}>
          <input type="radio" value="Men" selected={gender === "Men"} />
          Men
          <input type="radio" value="Women" selected={gender === "Women"} />
          Women
        </div> */}
      </section>
      <section className="products_container">
        {products.map((product, i) => (
          <Card key={i} product={product}></Card>
        ))}
      </section>
    </>
  );
}
