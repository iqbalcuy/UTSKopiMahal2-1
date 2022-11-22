import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const UserList = () => {
    const [cars, setCars] = useState([]);

    useEffect(()=>{
        getCars();
    },[]);

    const getCars = async() =>{
        const response = await axios.get('http://localhost:5000/cars');
        setCars(response.data);
    };

    const deleteCar = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/cars/${id}`);
            getCars();
          } catch (error) {
            console.log(error);
          }
    };

  return (
    <div className="columns">
        <div className="column is-half">
        <Link to="add" className="button is-success">
          Add New
        </Link>
            <table className='table is-striped is-fullwidth mt-5'> 
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>BRAND</th>
                        <th>MODEL</th>
                        <th>PRICE</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
            {cars.map((car, index) => (
              <tr key={car._id}>
                <td>{car.iid}</td>
                <td>{car.brand}</td>
                <td>{car.model}</td>
                <td>{car.price}</td>
                <td>
                 
                <Link
                    to={`edit/${car._id}`}
                    className="button is-info is-small mr-1">
                    Update
                  </Link>
                  <button 
                  onClick={() => deleteCar(car._id)}
                  className="button is-danger is-small">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
            </table>
        </div>
    </div>
  )
}

export default UserList