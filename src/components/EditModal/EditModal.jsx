import React, { useState } from "react";
import Cropper from "react-easy-crop";
import getCroppedImg from "./getCroppedImg";

const EditlModal = ({ closeModalEdit, openModal }) => {
  const [imageSrc, setImageSrc] = useState("");
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [showCropper, setShowCropper] = useState(false);

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

  const handleCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const handleConfirmCrop = async () => {
    const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
    setImageSrc(croppedImage);
    setShowCropper(false);
    closeModalEdit();
  };

  return (
    <div className="alertModal z-20 fixed top-0 left-0 w-full h-full bg-black/30 backdrop-blur-[3px] flex items-center justify-center">
      <div
        className="bg-[#EBEBEB] rounded-[21px] shadow-lg p-6"
        style={{
          width: "685px",
          height: "557px",
          position: "relative",
          left: "53px",
          gap: "0px",
        }}
        dir="ltr"
      >
        <div className="flex">
          <div className="bg-white rounded-lg p-6 w-80 -mt-px -ml-2.5">
            <div className="flex flex-col items-center">
              <div
                className="relative w-full h-32 bg-gray-300 rounded-lg flex items-center justify-center mb-4 cursor-pointer"
                onClick={handleImageClick}
              >
                <img
                  src={imageSrc || ""}
                  alt=""
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black opacity-10" />{" "}
                <h2
                  className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white"
                  style={{
                    fontFamily: "Vazir",
                    fontSize: "12px",
                    fontWeight: "900",
                    lineHeight: "24px",
                    letterSpacing: "-0.02em",
                    textAlign: "center",
                    width: "141px",
                    height: "24px",
                    zIndex: "2",
                  }}
                >
                  ویرایش تصویر پروفایل
                </h2>
                <div className="absolute inset-0 backdrop-blur-sm bg-black/50 rounded-lg flex items-center justify-center">
                  {" "}
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
                </div>
              </div>
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: "none" }}
              />
              <div className="grid grid-cols-2 gap-4 w-full border p-1 border-[#D7D7D7] rounded-lg">
                <div className="border-2 border-dashed border-gray-300 rounded-lg h-24 relative flex items-center justify-center flex-col">
                  <div className="flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#808080"
                        d="M6 17h12l-3.075-4.1q-.275-.05-.562-.125T13.8 12.6L11.25 16L9 13zm-1 4q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h5v2H5v14h14v-5.325l2 2V19q0 .825-.587 1.413T19 21zm16.55-7.6l-3.1-3.1q-.525.35-1.125.525T16.05 11q-1.85 0-3.15-1.312T11.6 6.5t1.313-3.187T16.1 2t3.188 1.313T20.6 6.5q0 .675-.2 1.3t-.5 1.15L22.95 12zM16.1 9q1.05 0 1.775-.725T18.6 6.5t-.725-1.775T16.1 4t-1.775.725T13.6 6.5t.725 1.775T16.1 9"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-gray-400 mt-2">افزودن تصویر</span>
                </div>

                <div className="border-2 border-dashed border-gray-300 rounded-lg h-24"></div>
                <div className="border-2 border-dashed border-gray-300 rounded-lg h-24"></div>
                <div className="border-2 border-dashed border-gray-300 rounded-lg h-24"></div>
                <div className="border-2 border-dashed border-gray-300 rounded-lg h-24"></div>
                <div className="border-2 border-dashed border-gray-300 rounded-lg h-24"></div>
              </div>
            </div>
          </div>

          <div className="w-2/3 pl-6">
            <h2 className="text-xl mb-4 text-[#02060C] font-vazir text-[16px] font-normal leading-[28px] text-right">
              ویرایش پرسنل
            </h2>{" "}
            <div className="flex mb-4">
              <div className="w-1/2 pr-2 mr-[-6px]">
                <label className="block mb-2 font-vazir text-[12px] font-normal leading-[21px] text-right text-[#02060C]">
                  نام خانوادگی
                </label>
                <input
                  type="text"
                  className="w-[179px] h-[40px] top-[89px] left-[444px] p-[10px_8px_9px_131px] gap-0 rounded-[6px] border border-gray-300"
                  placeholder="آرش"
                />
              </div>
              <div className="w-1/2 pl-2">
                <label className="block mb-2 font-vazir text-[12px] font-normal leading-[21px] text-right text-[#02060C]">
                  نام
                </label>{" "}
                <input
                  type="text"
                  className="w-[179px] h-[40px] top-[89px] left-[444px] p-[10px_8px_9px_131px] gap-0 rounded-[6px] border border-gray-300"
                  placeholder="دارابی"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-[12px] font-normal leading-[21px] text-right text-[#02060C] font-vazir mb-2">
                نام نهاد مربوطه
              </label>
              <input
                type="text"
                className="w-[366px] h-[40px] p-[10px] pl-[129px] pr-[8px] pb-[9px] rounded-[5px] border border-gray-300"
                placeholder="قرارداد توسعه ایده کسب (تستکس)"
              />
            </div>
            <div className="mb-4">
              <label className="block text-[12px] font-normal leading-[21px] text-right text-[#02060C] font-vazir mb-2">
                توضیحات
              </label>{" "}
              <textarea
                className="w-[366px] h-[220px] p-[8px] pt-[8px] pr-[6px] pb-[73px] pl-[8px] gap-0 rounded-[6px] bg-[#FBFBFB] border border-gray-300 text-right dir-rtl"
                placeholder="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد"
              />
            </div>
            <div className="flex justify-end [margin-left:-5px]">
              <div className="group inline-block">
                <div className="relative inline-block">
                  <button
                    onClick={closeModalEdit}
                    className="w-[179px] h-[40px] py-[8px] bg-gray-200 text-gray-700 rounded-[10px] border border-[#124076] 
               ml-2 transition-transform transform hover:scale-105 
               hover:shadow-lg hover:shadow-gray-500/50 relative overflow-hidden text-center uppercase"
                  >
                    <span className="relative z-10">انصراف</span>
                    <span
                      className="absolute inset-0 bg-gradient-to-r from-[#36D1DC] to-[#5B86E5] rounded-[10px] 
                   transition-all duration-500 ease-in-out transform origin-left scale-0 group-hover:scale-100"
                    ></span>
                  </button>
                </div>
              </div>
              <button
                onClick={(e) => openModal("ویرایش پرسنل با موفقیت انجام شد.")}
                className="w-[179px] h-[40px] p-[8px] bg-[#124076] text-white rounded-[10px] transition-all duration-300 ease-out ml-2 
             shadow-lg transform hover:scale-105 hover:shadow-xl"
              >
                تایید
              </button>
            </div>
          </div>
        </div>

        {showCropper && (
          <div className="cropper-container relative">
            <Cropper
              image={imageSrc}
              crop={crop}
              zoom={zoom}
              aspect={4 / 3}
              onCropChange={setCrop}
              onCropComplete={handleCropComplete}
              onZoomChange={setZoom}
            />

            {/* Button positioned on the left side */}
            {/* <button
              onClick={handleConfirmCrop}
              className="absolute left-4 top-4 z-10 bg-[#124076] text-white py-2 px-4 rounded transition-all duration-300 ease-out"
            >
              Crop Image
            </button> */}
          </div>
        )}
      </div>
    </div>
  );
};
export default EditlModal;
