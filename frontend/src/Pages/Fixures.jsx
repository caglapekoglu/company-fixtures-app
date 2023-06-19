import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as itemActions from "../Store/_redux/ItemStore/itemAction";
import { useLocation } from 'react-router-dom';

function Fixures() {
  const dispatch = useDispatch();
  const deviceList = useSelector((state) => state.item.items);
  const location = useLocation();
  const [filteredDeviceList, setFilteredDeviceList] = useState([]);
  const productId = location.pathname.split('/')[1];

  const fetchData = async () => {
    try {
      dispatch(itemActions.getItems()).then(() => {
        filterDevices();
      });
    } catch (error) {
      console.error("Veri alma hatası:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterDevices = () => {
    const filteredList = deviceList.filter((device) => device.type === productId);
    setFilteredDeviceList(filteredList);
  };

  const deletes = async (data) => {
    try {
      dispatch(itemActions.deleteItem(data)).then(() => {
        fetchData();
      });
    } catch (error) {
      console.error("Veri alma hatası:", error);
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 mx-5 gap-3">
      {filteredDeviceList.length > 0 ? (
        filteredDeviceList.map((device) => (
          <div key={device.id} className="relative rounded-lg border-[1px]">
            <div className="absolute flex justify-end w-full">
              <button onClick={() => deletes(device)} className="bg-[#ff3939] px-4 py-2 rounded-lg text-white">x</button>
            </div>
            <div className="px-5 py-3 bg-bgGrey">
              <h3 className="font-bold ">{device.type}</h3>
              <p className="text-textGrey">{device.serialNo}</p>
              <p>{device.assignedUser ? device.assignedUser : "Atanan kişi yok"}</p>
              <div className="flex justify-end">
                <a href={`/${device?.type}/${device?._id}`}><ion-icon name="create-outline"></ion-icon></a>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Veri bulunamadı.</p>
      )}
    </div>
  );
}

export default Fixures;
