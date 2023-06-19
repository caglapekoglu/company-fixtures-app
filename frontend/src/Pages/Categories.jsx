import React from "react";
import Laptop from "../assets/laptop.png";
import Desktop from "../assets/desktop.jpg";
import Mouse from "../assets/mouse.jpg";
import Headphones from "../assets/headphone.jpg";
function Categories() {
  // const [deviceList, setDeviceList] = useState([]);
  const deviceList = [
    { id: 1, type: "Laptop", src:Laptop},
    { id: 2, type: "Desktop", src:Desktop },
    { id: 3, type: "Headphones", src: Headphones},
    { id: 4, type: "Mouse", src: Mouse}
  ];
 
  return (
    <div className="grid grid-cols-2 mx-[20%] gap-12">
      {
        deviceList?.map((device) => (
          <a key={device.id} href={`/${device?.type}`}  className="relative rounded-lg border-[1px]">
            <img className="rounded-t-lg h-64 object-cover w-full" src={device.src} alt="" />
            <div className="px-5 py-3 bg-bgGrey">
              <h3 className="font-bold ">{device.type}</h3>
            </div>
          </a>
        ))
    }
    </div>
  );
}

export default Categories;
