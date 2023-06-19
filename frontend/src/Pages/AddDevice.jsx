import React, { useState } from "react";
import axios from "axios"; // Veritabanıyla iletişim için axios kütüphanesini ekledik
const initialFormValues = { type: "", serialNo: "", assignedUser: "" };
function AddDevice() {
  const [form, setForm] = useState(initialFormValues);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      // Veritabanına gönderilecek veriyi formattık
      const deviceData = {
        type: form.type,
        serialNo: form.serialNo,
        assignedUser: form.assignedUser,
      };

      // Veritabanına POST isteği gönderdik
      const response = await axios.post(
        "http://localhost:8080/api/item",
        deviceData
      );

      // İstek başarılıysa formu sıfırlayarak temizledik
      if (response.status === 200) {
        setForm(initialFormValues);
        console.log("Cihaz başarıyla eklendi!");
        setErrorMessage("Cihaz başarıyla eklendi!");
      }
    } catch (error) {
      console.error("Cihaz ekleme hatası:", error);
      setErrorMessage("Lütfen bilgileri giriniz.");
    }
  };

  return (
    <div className="flex flex-col mx-[25%]">
      <h1 className="text-2xl mt-20">Cihaz Ekle</h1>
      <label className="font-semibold py-2">Cihaz tipi*</label>
      <select className="border-[1px] rounded-md px-3 py-2 border-input-b" onChange={handleChange} name="type" value={form.type}>
      <option value="">Seçim yapınız</option>
        <option value="Laptop">Laptop</option>
        <option value="Desktop">Desktop</option>
        <option value="Headphones">Headphones</option>
        <option value="Mouse">Mouse</option>
      </select>
      {/* <input
        onChange={handleChange}
        value={form.type}
        name="type"
        className="border-[1px] rounded-md px-3 py-2 border-input-b"
        placeholder="Cihaz Tipi"
        required
      /> */}
      <label className="font-semibold py-2">Seri Numarası*</label>
      <input
        onChange={handleChange}
        value={form.serialNo}
        name="serialNo"
        className="border-[1px] rounded-md px-3 py-2 border-input-b"
        placeholder="Seri Numarası"
        required
      />
      <label className="font-semibold py-2">Atanacak kişi</label>
      <input
        onChange={handleChange}
        value={form.assignedUser}
        name="assignedUser"
        className="border-[1px] rounded-md px-3 py-2 border-input-b"
        placeholder="Atanacak kişi"
        required
      />
      <p
        className={`pt-5 ${
          errorMessage === "Cihaz başarıyla eklendi!"
            ? `text-[#40af4f]`
            : `text-[#ff3939]`
        }`}
      >
        {errorMessage}
      </p>
      <div className="flex justify-end mt-5">
        <button
          className="bg-primary px-4 py-2 rounded-md text-white  text-[16px] gap-x-1"
          onClick={onSubmit}
        >
          Kaydet
        </button>
      </div>
    </div>
  );
}

export default AddDevice;
