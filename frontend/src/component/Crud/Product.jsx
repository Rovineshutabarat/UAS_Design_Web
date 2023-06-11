import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Crud.css";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [viewProductStyle, setViewProductStyle] = useState("hidden");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [viewProductAnimation, setViewProductAnimation] = useState("");
  const [cartStyle, setCartStyle] = useState("hidden");
  const [cartAnimation, setCartAnimation] = useState("");
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/product");
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleExitClicked = () => {
    setViewProductAnimation("exitProductStyle");
    setCartAnimation("exitCartStyle");
    setTimeout(() => {
      setViewProductStyle("hidden");
      setCartStyle("hidden");
    }, 500);
  };

  const handleProductClicked = (product) => {
    setViewProductStyle("");
    setSelectedProduct(product);
    setViewProductAnimation("ViewProductStyle");
  };

  const handleAddToCartClicked = (product) => {
    setCartStyle("");
    setViewProductStyle("hidden");
    setCartAnimation("cartAnimation");
    if (cart.length < 5) {
      setCart((prevCart) => [...prevCart, product]);
      setMessage("");
    } else {
      setMessage("Cart Is Full");
    }
  };

  const handleRemoveFromCart = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== product._id));
  };



  return (
    <div>
      <ViewProduct
        viewProductStyle={viewProductStyle}
        handleExitClicked={handleExitClicked}
        selectedProduct={selectedProduct}
        viewProductAnimation={viewProductAnimation}
        handleAddToCartClicked={handleAddToCartClicked}
      />

      <Cart
        cartStyle={cartStyle}
        handleExitClicked={handleExitClicked}
        cart={cart}
        handleRemoveFromCart={handleRemoveFromCart}
        message={message}
        cartAnimation={cartAnimation}
      />

      <ProductTitle />
      <div className="flex justify-center cursor-pointer gap-x-5">
        <ProductItem
          products={products}
          handleProductClicked={handleProductClicked}
          handleAddToCartClicked={handleAddToCartClicked}
        />
      </div>
    </div>
  );
};

const ProductItem = ({
  products,
  handleProductClicked,
  handleAddToCartClicked,
}) => {
  const handleClick = (product) => {
    handleProductClicked(product);
  };

  const handleAddToCart = (event, product) => {
    event.stopPropagation();
    handleAddToCartClicked(product);
  };

  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-x-5">
      {products.map((product) => (
        <div
          key={product._id}
          className="flex flex-col justify-center mt-10 overflow-hidden bg-white rounded-md shadow-md"
          onClick={() => handleClick(product)}
        >
          <img
            src={product.image}
            alt=""
            className="rounded-md h-36 w-60 hover:scale-[1.1] transition-all object-cover"
          />
          <h1 className="mt-4 ml-3 mb-1 text-[18px] font-medium">
            {product.name}
          </h1>
          <ProductStar rating={product.rating} />
          <p className="mt-4 ml-5 font-medium text-[17px] text-slate-700">
            Rp.{product.price}
          </p>
          <ProductButton
            handleAddToCart={(event) => handleAddToCart(event, product)}
          />
        </div>
      ))}
    </div>
  );
};

const ProductStar = ({ rating }) => {
  return (
    <div className="flex text-[13px] text-slate-700 font-medium items-center gap-x-1 ml-3">
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/003/170/298/small/five-stars-5-star-icon-set-yellow-isolated-five-stars-vector.jpg"
        alt=""
        className="w-16 h-5"
      />
      <p>({rating})</p>
    </div>
  );
};

const ProductTitle = () => {
  return (
    <div className="mt-10 ml-16 text-3xl font-medium xl:ml-44 lg:ml-44 md:ml-44 sm:ml-44">
      <h1>Product</h1>
    </div>
  );
};

const ProductButton = ({ handleAddToCart }) => {
  return (
    <div className="mt-3 mb-5 ml-3">
      <button
        className="px-4 py-1 font-medium text-white bg-green-500 rounded-2xl hover:bg-green-600"
        onClick={handleAddToCart}
      >
        Add To Cart
      </button>
    </div>
  );
};

const ViewProduct = ({
  viewProductStyle,
  handleExitClicked,
  selectedProduct,
  viewProductAnimation,
  handleAddToCartClicked,
}) => {
  const handleAddToCart = () => {
    handleAddToCartClicked(selectedProduct);
  };

  return (
    <div
      className={`fixed inset-0 mt-20 bg-white xl:w-[200vh] lg:w-[170vh] md:w-[140vh] sm:w-[100vh] xl:ml-12 lg:ml-5 md:ml-5 sm:ml-10 w-[70vh] ml-0 ${viewProductAnimation} rounded-lg z-[888] transition-all shadow-inner ${viewProductStyle}`}
    >
      <div className="flex justify-center xl:justify-between lg:justify-between md:justify-between sm:justify-between gap-x-20 xl:gap-x-0 lg:gap-x-0 md:gap-x-0 sm:gap-x-0 mx-20 mt-5 ml-3 xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl text-[19px] font-medium xl:ml-10 lg:ml-10 md:ml-10 sm:ml-5">
        <h1 className="">Product Description</h1>
        <img
          src="https://img.icons8.com/ios/50/cancel.png"
          alt=""
          className="w-8 h-8 mr-10 cursor-pointer xl:mr-0 lg:mr-0 md:mr-0 sm:mr-0 xl:w-10 xl:h-10 lg:h-10 lg:w-10 md:h-10 md:w-10 sm:h-8 sm:w-8"
          onClick={handleExitClicked}
        />
      </div>
      {selectedProduct && (
        <div className="flex justify-center mt-10 xl:gap-x-20 gap-x-3 lg:gap-x-20 md:gap-x-20 sm:gap-x-20">
          <div className="">
            <img
              src={selectedProduct.image}
              alt=""
              className="object-cover w-32 h-20 mt-2 rounded-md xl:h-40 xl:w-60 lg:h-10 lg:w-60 md:h-40 md:w-60 sm:h-32 sm:w-52"
            />
          </div>
          <div className="w-96">
            <p className="text-2xl font-medium">{selectedProduct.name}</p>
            <div className="flex text-[13px]  mb-3 text-slate-700 font-medium items-center gap-x-1">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/003/170/298/small/five-stars-5-star-icon-set-yellow-isolated-five-stars-vector.jpg"
                alt=""
                className="w-16 h-5"
              />
              <p>({selectedProduct.rating})</p>
            </div>
            <p className="font-medium text-[19px]">
              Rp.{selectedProduct.price}
            </p>
            <p className="mt-5 mb-1 font-medium">Product Description</p>
            <p className="h-44 xl:w-full lg:w-full md:w-full sm:w-full w-60 overflow-y-scroll text-slate-600 text-[15px] custom-scrollbar pr-3">
              {selectedProduct.deskripsi}
            </p>
            <button
              className="px-4 py-1 mt-12 font-medium text-white bg-green-500 rounded-2xl hover:bg-green-600"
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const Cart = ({
  cartStyle,
  handleExitClicked,
  cart,
  handleRemoveFromCart,
  message,
  cartAnimation,
}) => {
  const handleRemoveClicked = (event, product) => {
    event.stopPropagation();
    handleRemoveFromCart(product);
  };

  const getTotalPrice = () => {
    const totalPrice = cart.reduce((total, product) => {
      return total + product.price;
    }, 0);
    return totalPrice;
  };

  return (
    <div
      className={`fixed inset-0 mt-20 bg-white xl:w-[200vh] lg:w-[170vh] md:w-[140vh] sm:w-[100vh] xl:ml-12 lg:ml-5 md:ml-5 sm:ml-10 w-[70vh] ml-0 ${cartStyle} rounded-lg z-[888] transition-all shadow-inner ${cartAnimation}`}
    >
      <div className="flex justify-center xl:justify-between lg:justify-between md:justify-between sm:justify-between gap-x-52 xl:gap-x-0 lg:gap-x-0 md:gap-x-0 sm:gap-x-0 mx-20 mt-5 ml-0 xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl text-[19px] font-medium xl:ml-10 lg:ml-10 md:ml-10 sm:ml-5">
        <h1>Cart</h1>
        <img
          src="https://img.icons8.com/ios/50/cancel.png"
          alt=""
          className="w-10 h-10 cursor-pointer"
          onClick={handleExitClicked}
        />
      </div>
      <div className="mt-5 ">
        {cart.length > 0 ? (
          <div className="">
            {cart.map((item) => (
              <div key={item._id} className="flex justify-between my-2">
                <div className="flex flex-col items-center ml-3 xl:flex-row lg:flex-row md:flex-row sm:flex-row xl:ml-40 lg:ml-40 md:ml-20 sm:ml-10 ">
                  <img
                    src={item.image}
                    alt=""
                    className="object-cover h-16 rounded-md w-28"
                  />
                  <h1 className="xl:ml-5 ml-0 lg:ml-5 md:ml-5 sm:ml-5 text-[19px] font-medium">{item.name}</h1>
                </div>
                <div className="flex items-center mr-28 xl:mr-40 lg:mr-40 md:mr-20 sm:mr-10">
                  <p className="mr-5 font-medium">Rp.{item.price}</p>
                  <button
                    className="px-3 py-1 font-medium text-white bg-red-500 rounded-2xl hover:bg-red-600"
                    onClick={(event) => handleRemoveClicked(event, item)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="absolute flex justify-end xl:left-[150vh] lg:left-[120vh] md:left-[90vh] sm:left-[50vh] left-[15vh]  top-[77vh]  py-3 z-[999] items-center">
              <p className="mr-5 font-medium">Total: Rp.{getTotalPrice()}</p>
              <a
                href="https://www.youtube.com/shorts/SXHMnicI6Pg"
                target="_blank"
                className="px-5 py-1 font-medium text-white bg-green-500 rounded-md"
              >
                Pay Now
              </a>
            </div>
          </div>
        ) : (
          <div className="flex ml-28 xl:justify-center lg:justify-center md:justify-center sm:justify-center xl:ml-0 lg:ml-0 md:ml-0 sm:ml-0">
            <p>Your cart is empty.</p>
          </div>
        )}
        <p className="absolute px-3 text-white bg-red-500 rounded-md top-10 left-[90vh] ">
          {message}
        </p>
      </div>
    </div>
  );
};

export default Product;
