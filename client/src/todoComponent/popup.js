import React, { useState , useEffect } from "react";
import axios from 'axios';

const PopUp = ({isOpen, setIsOpen, editData,setItem,host,setAddData,setDeleted,clickData,item})=>{
    // const openModal = () => {
    //   setIsOpen(true);
    // }
    let [updatedata,setUpdatedata] = useState(editData.data)
     useEffect(()=>{
      setUpdatedata(editData.data)
     },[editData.data])

    console.log("editDataeditData",editData,updatedata)
    const updatData = async ()=>{
    await axios.post(`${host}/update`,{dataId:editData._id ,updatedata:updatedata})
      setIsOpen(false);
      // setUpdatedata('')
     let res =  await axios.get(`${host}/api/data`)
      // setAddData()
      setAddData(res.data);
        setDeleted(false);
    }
  
    const closeModal = () => {
      setIsOpen(false);
    }
    return(
       
            <>
            {  isOpen && 
                <>
                <div className="overlay"></div>
              <div className="modal">
                <header className="modal__header">
                  <h2>Edit List</h2>
                 <input type="text"
                  onChange={(e) =>{ e.preventDefault()
                    setUpdatedata(e.target.value)}} 
                 value={updatedata}  />
                  <button onClick={closeModal} className="close-button">&times;</button>
                  <button onClick={()=>updatData()} className="close-button">Update</button>

                </header>
                {/* <main className="modal__main">
                  <p>Some content here!</p>
                </main> */}
              </div>
                </>
            }
            </>
            
    )
}

export default PopUp