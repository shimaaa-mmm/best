import React, { useState, useEffect } from "react";

const Aside = ({ openModal, userSelection, openModalEdit }) => {
  const [imageSrc, setImageSrc] = useState("");
  const [showCropper, setShowCropper] = useState(false);
  const [firstName, setFirstName] = useState(userSelection?.firstName || "");
  const [lastName, setLastName] = useState(userSelection?.lastName || "");
  const [field, setField] = useState(userSelection?.field || "");
  const [explanation, setExplanation] = useState(
    userSelection?.explanation || ""
  );
  const [users, setUsers] = useState([]); 

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

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
        setShowCropper(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    document.getElementById("fileInput").click();
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
    <aside className="w-[376px] h-[904px] gap-[16px] rounded-[20px] bg-[#D7D7D7] shadow-[0px_0px_15px_2px_#00000026] mt-[24px] mr-[802px] p-4">
      <h2 className="font-vazir text-[20px] font-medium leading-[27px] text-right w-[156px] h-[27px] absolute top-[116px] left-[293px]">
        افزودن پرسنل جدید
      </h2>
      <div className="border border-gray-300 p-4 rounded-lg mb-4">
        <div
          className="relative w-[344px] h-[268px] top-[41px] left-[16px] gap-0 border border-gray-300 rounded-[10px] bg-gray-300 flex items-center justify-center mb-4 cursor-pointer"
          onClick={handleImageClick}
        >
          <img
            src={imageSrc || userSelection?.image}
            alt=""
            className={`w-full h-full object-cover rounded-lg ${
              !imageSrc ? "hidden" : ""
            }`}
          />
          <div className="absolute inset-0 bg-black opacity-10" />
          <div className="absolute inset-0 backdrop-blur-sm bg-black/50 rounded-lg flex items-center justify-center">
            {!imageSrc && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={48}
                height={48}
                viewBox="0 0 24 24"
              >
                <path
                  fill="#808080"
                  d="m22.7 14.3l-1 1l-2-2l1-1c.1-.1.2-.2.4-.2c.1 0 .3.1.4.2l1.3 1.3c.1.2.1.5-.1.7M13 19.9V22h2.1l6.1-6.1l-2-2zM21 5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6v-1.9l1.1-1.1H5l3.5-4.5l2.5 3l3.5-4.5l1.6 2.1l4.9-5z"
                ></path>
              </svg>
            )}
          </div>
        </div>
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: "none" }}
        />
      </div>

      <div className="flex flex-col w-[344px] h-[530px] absolute top-[445px] left-[109px] gap-[16px] text-gray-900">
        <div className="flex w-[344px] h-[48px] gap-1">
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            placeholder="نام "
            className="border border-gray-300 p-2 rounded-lg flex-1 h-full w-[74px] font-vazir text-[14px] font-normal leading-[24px] text-right text-gray-900"
          />
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            placeholder="نام خانوادگ"
            className="border border-gray-300 p-2 rounded-lg flex-1 h-full w-[74px] font-vazir text-[14px] font-normal leading-[24px] text-right text-gray-900"
          />
        </div>
        <input
          value={field}
          onChange={(e) => setField(e.target.value)}
          type="text"
          placeholder="نام نهاد"
          className="border border-gray-300 p-[12px_8px] rounded-[10px] w-[344px] h-[48px] font-vazir text-[14px] font-normal leading-[24px] text-right text-gray-900"
        />
        <textarea
          value={explanation}
          onChange={(e) => setExplanation(e.target.value)}
          placeholder="توضیحات"
          className="border border-gray-300 p-[12px_8px] rounded-[20px] w-[344px] h-[362px] font-vazir text-[14px] font-normal leading-[24px] text-right text-gray-900"
        ></textarea>

        {userSelection ? (
          <div className="flex items-center gap-4 ">
            <button
              onClick={openModalEdit}
              className=" w-1/2 flex items-center justify-center py-2 bg-[#124076] rounded-lg text-white"
            >
              ویرایش
            </button>
            <button className=" border border-blue-600 text-blue-500 py-2 rounded-lg w-1/2 flex items-center justify-center">
              انصراف
            </button>
          </div>
        ) : (
          <button
            className="relative w-full py-2 text-white rounded-lg overflow-hidden transition-all duration-300 
            bg-gradient-to-r from-[#757F9A] to-[#D7DDE8] bg-[length:200%_100%] hover:bg-[length:100%_100%] 
            shadow-lg hover:shadow-2xl"
            onClick={handleAddPersonnel}
          >
            افزودن
          </button>
        )}
      </div>
    </aside>
  );
};

export default Aside;
