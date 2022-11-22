import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddCars() {
    const [iid,setId] = useState("");
    const [brand,setBrand] = useState("");
    const [model,setModel] = useState("");
    const [price,setPrice] = useState("");
    const navigate = useNavigate();

    const saveCar = async(e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/cars',{
                iid,
                brand,
                model,
                price
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }


    
  return (
    <div className="comlumns">
        <div className="column is-half">
            <form onSubmit={saveCar}>
            <div className="field">
                <label className="label">ID</label>
                <div className="control">
                    <input type="text" className="input" value={iid} onChange={(e) => setId(e.target.value)} placeholder='Id' />
                </div>
            </div>
            <div className="field">
                <label className="label">BRAND</label>
                <div className="control">
                    <input type="text" className="input" value={brand} onChange={(e) => setBrand(e.target.value)} placeholder='Brand' />
                </div>
            </div>
            <div className="field">
                <label className="label">MODEL</label>
                <div className="control">
                    <input type="text" className="input" value={model} onChange={(e) => setModel(e.target.value)} placeholder='Brand' />
                </div>
            </div>
            <div className="field">
                <label className="label">PRICE</label>
                <div className="control">
                    <input type="text" className="input" value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Brand' />
                </div>
            </div>


            <div className="field">
                <div className="control">
                    <button type='submit' className='button is-success'>Save</button>
                </div>
            </div>
            </form>
        </div>
    </div>
  )
}

export default AddCars