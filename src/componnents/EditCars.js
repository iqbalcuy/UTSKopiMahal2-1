import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditCars = () => {
  const [iid, setId] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/cars/${id}`);
    setId(response.data.iid);
    setBrand(response.data.brand);
    setModel(response.data.model);
    setPrice(response.data.price);
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/cars/${id}`, {
        iid,
        brand,
        model,
        price,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <form onSubmit={updateUser}>
          <div className="field">
            <label className="label">ID</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={iid}
                onChange={(e) => setId(e.target.value)}
                placeholder="ID"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Brand</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                placeholder="BRAND"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Model</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                placeholder="MODEL"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Price</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="PRICE"
              />
            </div>
          </div>
         
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCars;