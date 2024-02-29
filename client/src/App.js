import React, { useEffect, useState } from 'react';
import './App.css'
import Head from './todoComponent/Head';
import DataAdder from './todoComponent/DataAdder';
import ShowData from './todoComponent/ShowData';
import axios from 'axios';
import PopUp from './todoComponent/popup';

const App = () => {
  // const host = 'https://mern-todo-list-backend.onrender.com';
  const host = 'http://localhost:8000';
  const [item, setItem] = useState({ data: '' });
  const [addData, setAddData] = useState([]);
  const [holderText, setHolderText] = useState("Add Item");
  const [deleted, setDeleted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [clickData,setClickData] = useState('')

  useEffect(() => {
    axios
      .get(`${host}/api/data`)
      .then((res) => {
        setAddData(res.data);
        setDeleted(false);

      })
      .catch((err) => {
        console.log(err);
      });
  }, [item, deleted]);

  const addItem = () => {
    if (item.data !== "") {
      axios
        .post(`${host}/api/data`, item)
        .then((res) => {
          setItem({ data: '' });
          setHolderText("Add Item");
          console.log(res.data.message);
        })
        .catch((err) => {
          console.log("Error couldn't add Item");
          console.error(err.message);
        });
    } else {
      setHolderText("Can't Empty");
    }
  }

  const deleteItem = (id) => {
    axios.delete(`${host}/api/data/${id}`);
    setDeleted(true);
  }

  return (
    <>
      <div className="container">
        <div className="center_container">
          <Head />
          <div className="body">
            <DataAdder item={item} setItem={setItem} click={addItem} placeholderText={holderText} />
            <ol className="lists">
              {
                addData.map((item) => {
                  return <ShowData key={item._id} 
                  setAddData={setAddData} host={host} 
                  setDeleted={setDeleted}
                  setItem={setItem} 
                  setClickData={setClickData}
                  setIsOpen={setIsOpen} isOpen={isOpen} item={item} onSelect={deleteItem} />
                })
              }
            </ol>
            {clickData && <PopUp isOpen={isOpen} host={host} 
            item={item}
            setDeleted={setDeleted} setAddData={setAddData} setIsOpen={setIsOpen}
             editData = {clickData} setItem={setItem}/>}

            {/* <PopUp/> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;