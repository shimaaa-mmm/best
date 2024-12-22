import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import "./style.css";

const Sidebar = ({ openModal, userSelection, openModalEdit }) => {
  const [imageSrc, setImageSrc] = useState("");
  const [firstName, setFirstName] = useState(userSelection?.firstName || "");
  const [lastName, setLastName] = useState(userSelection?.lastName || "");
  const [field, setField] = useState(userSelection?.field || "");
  const [explanation, setExplanation] = useState(
    userSelection?.explanation || ""
  );
  const [users, setUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (userSelection) {
      setFirstName(userSelection.firstName || "");
      setLastName(userSelection.lastName || "");
      setField(userSelection.field || "");
      setExplanation(userSelection.explanation || "");
      setImageSrc(userSelection.image || "");
    } else {
      setFirstName("");
      setLastName("");
      setField("");
      setExplanation("");
      setImageSrc("");
    }
  }, [userSelection]);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddPersonnel = () => {
    const newPersonnel = {
      image: imageSrc,
      firstName,
      lastName,
      field,
      explanation,
    };
    setUsers((prevUsers) => [...prevUsers, newPersonnel]);
    openModal("پرسنل جدید با موفقیت افزوده شد");
    setImageSrc("");
    setFirstName("");
    setLastName("");
    setField("");
    setExplanation("");
  };

  return (
    <div>
      <div id="mySidebar" className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="container tio">
          <h2 className="moton">افزودن پرسنل جدید</h2>
          <div
            className="image-upload"
            onClick={() => document.getElementById("fileInput").click()}
          >
            {imageSrc ? (
              <img
                src={imageSrc}
                alt="تصویر آپلود شده"
                className="uploaded-image"
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={48}
                height={48}
                viewBox="0 0 24 24"
                fill="#808080"
              >
                <path d="M22.7 14.3l-1 1-2-2 1-1c.1-.1.2-.2.4-.2.1 0 .3.1.4.2l1.3 1.3c.1.2.1.5-.1.7M13 19.9V22h2.1l6.1-6.1-2-2zM21 5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6v-1.9l1.1-1.1H5l3.5-4.5 2.5 3 3.5-4.5 1.6 2.1 4.9-5z"></path>
              </svg>
            )}
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: "none" }}
            />
          </div>
          <div className="input-group" dir="rtl">
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="نام"
              type="text"
            />
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="نام خانوادگی"
              type="text"
            />
          </div>
          <input
            value={field}
            onChange={(e) => setField(e.target.value)}
            className="input-full "  dir="rtl"
            placeholder="نام نهاد"
            type="text"
          />
          <textarea
            value={explanation}
            onChange={(e) => setExplanation(e.target.value)}
            className="textarea" dir="rtl"
            placeholder="توضیحات"
          ></textarea>

          {userSelection ? (
            <div className="flex items-center gap-4 edit">
              <button
                onClick={openModalEdit}
                className="w-1/2 flex items-center justify-center py-2 bg-[#124076] rounded-lg text-white "
              >
                ویرایش
              </button>
              <button className="border border-blue-600 text-blue-500 py-2 rounded-lg w-1/2 flex items-center justify-center">
                انصراف
              </button>
            </div>
          ) : (
            <button
              className="relative w-full py-2 text-white rounded-lg overflow-hidden transition-all duration-300 
                bg-gradient-to-r from-[#757F9A] to-[#D7DDE8] bg-[length:200%_100%] hover:bg-[length:100%_100%] 
                shadow-lg hover:shadow-2xl edit"
              onClick={handleAddPersonnel}
            >
              افزودن
            </button>
          )}
        </div>
      </div>
      <button className="openbtn bt" onClick={toggleNav}>
        <FaBars size={20} />
      </button>
    </div>
  );
};

export default Sidebar;
