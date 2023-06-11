import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");

  const [AdminEditDisplay, setAdminEditDisplay] = useState("hidden");
  const [AdminProductDisplay, setAdminProductDisplay] = useState("flex");
  const [AddProductDisplay, setAddProductDisplay] = useState("hidden");
  const [EditProductDisplay, setEditProductDisplay] = useState("hidden");
  const [editProduct, setEditProduct] = useState(null);
  const [HamburgerListDisplay, setHamburgerListDisplay] = useState("hidden");
  const [hamburgerImage, setHamburgerImage] = useState(
    "https://img.icons8.com/ios-filled/50/FFFFFF/menu--v1.png"
  );
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: 0,
    image: "",
    deskripsi: "",
    rating: 0,
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAdminProductCLicked = () => {
    setAdminProductDisplay("flex");
    setAdminEditDisplay("hidden");
    setAddProductDisplay("hidden");
    setEditProductDisplay("hidden");
  };

  const handleEditProductClick = () => {
    setAdminEditDisplay("");
    setAdminProductDisplay("hidden");
    setAddProductDisplay("hidden");
    setEditProductDisplay("hidden");
  };

  const handleAddProductCLicked = () => {
    setAddProductDisplay("flex");
    setAdminEditDisplay("hidden");
    setAdminProductDisplay("hidden");
    setEditProductDisplay("hidden");
  };

  const handleEditClicked = () => {
    setEditProductDisplay("flex");
    setAddProductDisplay("hidden");
    setAdminEditDisplay("hidden");
    setAdminProductDisplay("hidden");
  };

  const handleInputChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/product");
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/product/${id}`);
      setProducts(products.filter((product) => product._id !== id));
      setMessage("Product deleted successfully.");
    } catch (error) {
      console.log(error);
      setMessage("Failed to delete product.");
    }
  };

  const addProduct = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/product",
        newProduct
      );
      setProducts([...products, response.data]);
      setNewProduct({
        name: "",
        price: 0,
        image: "",
        deskripsi: "",
        rating: 0,
      });
      handleEditProductClick();
      setMessage("Product added successfully.");
    } catch (error) {
      console.log(error);
      setMessage("Failed to add product.");
    }
  };

  const editProductForm = (event, product) => {
    setEditProduct(product);
    handleEditClicked();
  };

  const cancelEdit = () => {
    setEditProduct(null);
    handleEditProductClick();
  };

  const updateProduct = async (id) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/product/${id}`,
        editProduct
      );
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product._id === id ? response.data : product
        )
      );
      handleEditProductClick();
      setEditProduct(null);
      setMessage("Product updated successfully.");
    } catch (error) {
      console.log(error);
      setMessage("Failed to update product.");
    }
  };

  const handleHamburgerCLicked = () => {
    if (HamburgerListDisplay === "hidden") {
      setHamburgerListDisplay("");
      setHamburgerImage(
        "https://img.icons8.com/ios-filled/50/FFFFFF/multiply.png"
      );
    } else {
      setHamburgerListDisplay("hidden");
      setHamburgerImage(
        "https://img.icons8.com/ios-filled/50/FFFFFF/menu--v1.png"
      );
    }
  };

  return (
    <div>
      <HamburgerNavbar
        handleHamburgerCLicked={handleHamburgerCLicked}
        hamburgerImage={hamburgerImage}
      />
      <HamburgerMenuList
        HamburgerListDisplay={HamburgerListDisplay}
        handleAdminProductCLicked={handleAdminProductCLicked}
        handleEditProductClick={handleEditProductClick}
      />
      <AdminMenuBar
        handleEditProductClick={handleEditProductClick}
        handleAdminProductCLicked={handleAdminProductCLicked}
      />
      <AdminProduct
        AdminProductDisplay={AdminProductDisplay}
        products={products}
      />
      <AdminEdit
        AdminEditDisplay={AdminEditDisplay}
        message={message}
        products={products}
        deleteProduct={deleteProduct}
        handleAddProductCLicked={handleAddProductCLicked}
        handleEditClicked={handleEditClicked}
        editProductForm={editProductForm}
      />
      <AddProduct
        AddProductDisplay={AddProductDisplay}
        addProduct={addProduct}
        newProduct={newProduct}
        handleInputChange={handleInputChange}
      />
      <EditProduct
        EditProductDisplay={EditProductDisplay}
        editProduct={editProduct}
        setEditProduct={setEditProduct}
        updateProduct={updateProduct}
        cancelEdit={cancelEdit}
      />
    </div>
  );
};

const AdminMenuBar = ({
  handleEditProductClick,
  handleAdminProductCLicked,
}) => {
  return (
    <div className="fixed flex-col hidden h-full text-center text-white xl:w-72 lg:w-60 md:w-52 xl:flex lg:flex md:flex sm:hidden bg-slate-800">
      <p className="py-3 xl:py-2 lg:py-2 mt-3 mb-5 xl:text-2xl lg:text-2xl md:text-[19px] font-medium border-b-2 border-white">
        Admin Dashboard
      </p>
      <ul>
        <li className="py-2 hover:bg-slate-700">
          <button onClick={handleAdminProductCLicked}>Home</button>
        </li>
        <li className="py-2 hover:bg-slate-700">
          <button onClick={handleEditProductClick}>Edit Product</button>
        </li>
        <Link to={"/crudHomepage"}>
          <li className="py-2 hover:bg-slate-700">Back</li>
        </Link>
      </ul>
    </div>
  );
};

const HamburgerNavbar = ({ handleHamburgerCLicked, hamburgerImage }) => {
  return (
    <div className="flex items-center w-[80vh] xl:w-full lg:w-full md:w-full sm:w-full justify-between p-5 md:text-2xl sm:text-[18px] font-medium text-white xl:hidden lg:hidden md:hidden sm:flex bg-slate-800 ">
      <h1>Admin DashBoard</h1>
      <HamburgerMenu
        handleHamburgerCLicked={handleHamburgerCLicked}
        hamburgerImage={hamburgerImage}
      />
    </div>
  );
};

const HamburgerMenu = ({ handleHamburgerCLicked, hamburgerImage }) => {
  return (
    <div className="">
      <img
        src={hamburgerImage}
        alt=""
        className="mr-44 xl:mr-0 lg:mr-0 md:mr-0 sm:mr-0 h-7 w-7"
        onClick={handleHamburgerCLicked}
      />
    </div>
  );
};

const HamburgerMenuList = ({
  HamburgerListDisplay,
  handleAdminProductCLicked,
  handleEditProductClick,
}) => {
  return (
    <div
      className={`justify-center ${HamburgerListDisplay} p-5 text-center text-white bg-slate-800`}
    >
      <ul className="">
        <li className="py-2 hover:bg-slate-700">
          <button onClick={handleAdminProductCLicked}>Home</button>
        </li>
        <li className="py-2 hover:bg-slate-700">
          <button onClick={handleEditProductClick}>Edit Product</button>
        </li>
        <Link to={"/crudHomepage"}>
          <li className="py-2 hover:bg-slate-700">Back</li>
        </Link>
      </ul>
    </div>
  );
};

const AdminHeader = (props) => {
  return (
    <div className="items-center hidden p-5 text-white xl:flex lg:flex md:flex sm:hidden bg-slate-800">
      <h1 className="ml-10 text-xl font-medium">{props.header}</h1>
    </div>
  );
};

const AdminProduct = ({ AdminProductDisplay, products }) => {
  return (
    <div
      className={`${AdminProductDisplay} xl:ml-72 lg:ml-60 md:ml-52 flex flex-col`}
    >
      <AdminHeader header="Product List" />
      <div className="overflow-x-auto">
        <table className="w-full mt-5">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">No</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Image</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => {
              return (
                <tr key={product._id} className="text-center">
                  <td className="px-4 py-2 border">{index + 1}</td>
                  <td className="px-4 py-2 border">{product.name}</td>
                  <td className="px-4 py-2 border">{product.price}</td>
                  <td className="flex justify-center px-4 py-2 border">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover h-20"
                      style={{ width: "100px" }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const AdminEdit = ({
  message,
  products,
  deleteProduct,
  AdminEditDisplay,
  handleAddProductCLicked,
  editProductForm,
}) => {
  return (
    <div className={`${AdminEditDisplay} xl:ml-72 lg:ml-60 md:ml-52`}>
      <AdminHeader header="Edit Product" />
      <div className="flex flex-col my-5 ml-10">
        <button
          className="w-40 px-3 py-1 mt-3 text-white bg-green-500 rounded hover:bg-green-600"
          onClick={handleAddProductCLicked}
        >
          Add Product
        </button>
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">No</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Image</th>
            <th className="w-32 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            return (
              <tr key={product._id} className="text-center">
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border">{product.name}</td>
                <td className="px-4 py-2 border">{product.price}</td>
                <td className="flex justify-center px-4 py-2 border">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover h-20 rounded"
                    style={{ width: "100px" }}
                  />
                </td>
                <td className="px-4 py-2 border">
                  <div className="flex flex-col">
                    <button
                      className="w-32 py-1 mb-2 font-medium text-white bg-green-500 hover:bg-green-600 rounded text-[15px]"
                      onClick={(event) => editProductForm(event, product)}
                    >
                      Edit
                    </button>
                    <button
                      className="w-32 py-1 font-medium text-white bg-red-500 hover:bg-red-600 rounded text-[15px]"
                      onClick={() => {
                        deleteProduct(product._id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {message && (
        <p className="px-3 py-1 mt-10 text-center text-white bg-green-500 rounded ml-96 w-72">
          {message}
        </p>
      )}
    </div>
  );
};

const AddProduct = ({
  AddProductDisplay,
  addProduct,
  newProduct,
  handleInputChange,
  message,
}) => {
  return (
    <div className={`${AddProductDisplay} xl:ml-72 lg:ml-60 md:ml-52  flex flex-col justify-center`}>
      <AdminHeader header="Add Product" />
      <div className="flex flex-col p-5 mx-2 my-5 bg-gray-200 shadow-lg xl:p-10 lg:p-10 md:p-10 sm:p-10 xl:mx-10 lg:mx-10 md:mx-10 sm:mx-10">
        <label className="mb-3 text-lg font-medium">Nama Produk</label>
        <input
          type="text"
          name="name"
          value={newProduct.name}
          onChange={handleInputChange}
          placeholder="Masukkan Nama Produk"
          className="w-full p-2 border rounded sm:w-auto"
        />
        <label className="mt-5 mb-3 text-lg font-medium">Harga Produk</label>
        <input
          type="number"
          name="price"
          value={newProduct.price}
          onChange={handleInputChange}
          placeholder="Masukkan Harga Produk"
          className="w-full p-2 border rounded sm:w-auto"
        />
        <label className="mt-5 mb-3 text-lg font-medium">Gambar Produk</label>
        <input
          type="text"
          name="image"
          value={newProduct.image}
          onChange={handleInputChange}
          placeholder="Masukkan Gambar Produk  (https://imageExample.com)"
          className="w-full p-2 border rounded sm:w-auto"
        />
        <label className="mt-5 mb-3 text-lg font-medium">
          Deskripsi Produk
        </label>
        <input
          type="text"
          name="deskripsi"
          value={newProduct.deskripsi}
          onChange={handleInputChange}
          placeholder="Masukkan Deskripsi Produk"
          className="w-full p-2 border rounded sm:w-auto"
        />
        <label className="mt-5 mb-3 text-lg font-medium">Rating Produk</label>
        <input
          type="number"
          name="rating"
          value={newProduct.rating}
          onChange={handleInputChange}
          placeholder="Masukkan Rating Produk"
          className="w-full p-2 border rounded sm:w-auto"
        />
        <button
          className="w-40 px-3 py-1 mt-5 font-medium text-white bg-green-500 rounded hover:bg-green-600"
          onClick={addProduct}
        >
          Add
        </button>
      </div>
      {message && (
        <p className="px-3 py-1 mt-10 text-center text-white bg-green-500 rounded ml-96 w-72">
          {message}
        </p>
      )}
    </div>
  );
};

const EditProduct = ({
  EditProductDisplay,
  editProduct,
  setEditProduct,
  updateProduct,
  cancelEdit,
}) => {
  return (
    <div className={`${EditProductDisplay} xl:ml-72 lg:ml-60 md:ml-52  flex flex-col justify-center`}>
      <AdminHeader header="Edit Product" />
      <div className="flex flex-col p-5 mx-2 my-5 bg-gray-200 shadow-lg xl:p-10 lg:p-10 md:p-10 sm:p-10 xl:mx-10 lg:mx-10 md:mx-10 sm:mx-10">
        <label className="mb-3 text-lg font-medium">Nama Produk</label>
        <input
          type="text"
          name="name"
          value={editProduct?.name || ""}
          onChange={(e) =>
            setEditProduct({ ...editProduct, name: e.target.value })
          }
          placeholder="Masukkan Nama Produk"
          className="w-full p-2 border rounded sm:w-auto"
        />
        <label className="mt-5 mb-3 text-lg font-medium">Harga Produk</label>
        <input
          type="number"
          name="price"
          value={editProduct?.price || 0}
          onChange={(e) =>
            setEditProduct({ ...editProduct, price: e.target.value })
          }
          placeholder="Masukkan Harga Produk"
          className="w-full p-2 border rounded sm:w-auto"
        />
        <label className="mt-5 mb-3 text-lg font-medium">Gambar Produk</label>
        <input
          type="text"
          name="image"
          value={editProduct?.image || ""}
          onChange={(e) =>
            setEditProduct({ ...editProduct, image: e.target.value })
          }
          placeholder="Masukkan Gambar Produk (https://imageExample.com)"
          className="w-full p-2 border rounded sm:w-auto"
        />
        <label className="mt-5 mb-3 text-lg font-medium">
          Deskripsi Produk
        </label>
        <input
          type="text"
          name="deskripsi"
          value={editProduct?.deskripsi || ""}
          onChange={(e) =>
            setEditProduct({ ...editProduct, deskripsi: e.target.value })
          }
          placeholder="Masukkan Deskripsi Produk"
          className="w-full p-2 border rounded sm:w-auto"
        />
        <label className="mt-5 mb-3 text-lg font-medium">Rating Produk</label>
        <input
          type="number"
          name="rating"
          value={editProduct?.rating || ""}
          onChange={(e) =>
            setEditProduct({ ...editProduct, rating: e.target.value })
          }
          placeholder="Masukkan Rating Produk"
          className="w-full p-2 border rounded sm:w-auto"
        />

        <button
          className="w-40 px-3 py-1 mt-5 font-medium text-white bg-green-500 rounded hover:bg-green-600"
          onClick={() => updateProduct(editProduct._id)}
        >
          Save
        </button>
        <button
          className="w-40 px-3 py-1 mt-2 font-medium text-white bg-red-500 rounded hover:bg-red-600"
          onClick={cancelEdit}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Admin;
