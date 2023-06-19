import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import * as itemActions from '../Store/_redux/ItemStore/itemAction';
function Details() {
    const dispatch = useDispatch();
    const location = useLocation();
    const productId = location.pathname.split('/')[2]
    const items = useSelector((state) => state.item.items);
    const selectedItem = items.filter((obj) => obj._id === productId)[0];
    const [updatedItem,setUpdatedItem] = useState({...selectedItem})
    const [errorMessage, setErrorMessage] = useState("");

  
    const handleChange =(e)=>{
      let newItem = {...updatedItem}
      newItem[e.target.name] = e.target.value;
      setUpdatedItem(()=>{return newItem});
    }
    const onsubmit =(e)=>{
      e.preventDefault();
      if (!updatedItem.type || !updatedItem.serialNo) {
        setErrorMessage("Cihaz tipi ve seri no alanları boş olamaz.");
        return;
      }
      dispatch(itemActions.update(updatedItem))
        .then((res) => {
          setErrorMessage("Değişiklikler güncellendi!");
        })
        .catch((error) => {
          setErrorMessage("Güncelleme sırasında bir hata oluştu.");
        });
    }
    
  return (
    <form  className="flex flex-col mx-[25%] gap-y-2" action="">
        <label>Cihaz tipi*</label>
        <select className="border-[1px] rounded-md px-3 py-2 border-input-b" onChange={handleChange} name="type" value={updatedItem.type}>
        <option defaultValue={true} value="Laptop">Laptop</option>
        <option value="Desktop">Desktop</option>
        <option value="Headphones">Headphones</option>
        <option value="Mouse">Mouse</option>
      </select>
        <label>Seri no*</label>
        <input className="border-[1px] rounded-md px-3 py-2 border-input-b mb-4" name="serialNo" type="text" value={updatedItem.serialNo} onChange={handleChange} />
        <label>Atanacak kişi</label>
        <input className="border-[1px] rounded-md px-3 py-2 border-input-b mb-4" name="assignedUser" type="text" value={updatedItem.assignedUser} onChange={handleChange} />
        <p className={`pt-5 ${errorMessage==="Değişiklikler güncellendi!" ? "text-[#40af4f]" : "text-[#ff3939]"}`}>
        {errorMessage}
      </p>
        <div className="flex justify-end mt-5">
      <button className="bg-primary px-4 py-2 rounded-md text-white  text-[16px] gap-x-1" onClick={onsubmit}>Kaydet</button>
      </div>
    </form>
  )
}

export default Details