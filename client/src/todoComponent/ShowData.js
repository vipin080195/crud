import PopUp from "./popup";
const ShowData = ({ item, onSelect ,setIsOpen,isOpen,setItem,host,setAddData,setDeleted,setClickData}) => {
    console.log("item",item)
    return (
        <>
            <li className="list">
                <button onClick={() => { onSelect(item._id) }} title="Delete"> x </button>
                <p>{item.data}</p>
                {/* <button onClick={() => { onSelect(item._id) }} title="Delete"> Update </button> */}
                <p onClick={()=> {
                    console.log("itemitem",item)
                    setClickData(item)
                    // setItem(item)
                    setIsOpen(true)}}
                 style={{backgroundColor:"purple" ,color:"yellow", borderRadius:"10px",cursor:"pointer"}}>Update</p>
            </li>
            <hr />
            {/* <PopUp isOpen={isOpen} host={host} setDeleted={setDeleted} setAddData={setAddData} setIsOpen={setIsOpen} editData = {item} setItem={setItem}/> */}
        </>
    );
}

export default ShowData;