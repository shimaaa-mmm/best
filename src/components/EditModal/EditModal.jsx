import React, { useState, useRef } from "react";
import Cropper from "react-easy-crop";
import getCroppedImg from "./getCroppedImg";
import "./style.scss";

const EditlModal = ({ closeModalEdit, openModal }) => {
  const [imageSrcs, setImageSrcs] = useState("");
  const fileInputRef = useRef(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [showCropper, setShowCropper] = useState(false);
  const [isImageClicked, setIsImageClicked] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrcs(reader.result);
        setShowCropper(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClicks = () => {
    fileInputRef.current.click();
    setTimeout(() => {
      setIsImageClicked(true);
    }, 500);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrcs(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const handleConfirmCrop = async () => {
    const croppedImage = await getCroppedImg(imageSrcs, croppedAreaPixels);
    setImageSrcs(croppedImage);
    setShowCropper(false);
    closeModalEdit();
  };

  return (
    <div className="alertModal z-20 fixed top-0 left-0 w-full h-full bg-black/30 backdrop-blur-[3px] flex items-center justify-center">
      <div
        className="bg-[#EBEBEB] covar overflow-scroll sm-468:bg-transparen man rounded-[21px] shadow-lg p-6 max-w-full sm:max-w-[600px] md:max-w-[685px] lg:max-w-[685px] w-full h-full md:h-[557px]"
        dir="ltr"
      >
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left section */}
          <div className="bg-white rounded-lg p-6 w-full md:w-80 mb-4 md:mb-0 oral">
            <div className="flex flex-col items-center">
              <div
                className="relative w-full h-32 bg-gray-300 rounded-lg flex items-center justify-center mb-4 cursor-pointer"
                onClick={handleImageClicks}
              >
                <img
                  src={imageSrcs || ""}
                  alt=""
                  className="w-full h-full object-cover rounded-lg dark"
                />
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                />
                <div className="absolute inset-0 bg-black opacity-10" />
                {!isImageClicked && (
                  <h2
                    className="fade-out absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white"
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
                )}
                <div className="absolute file inset-0 backdrop-blur-sm bg-black/50 rounded-lg flex items-center justify-center">
                  {!isImageClicked && (
                   <svg
                   xmlns="http://www.w3.org/2000/svg"
                   width={28}
                   height={28}
                   viewBox="796 796 200 200"
                   fill="#3d3d3d"
                   stroke="#3d3d3d"
                 >
                   <g>
                     <path d="M976.831,857.4l-56.942-56.942c-2.875-2.876-6.696-4.458-10.762-4.458H825.93c-8.393,0-15.218,6.828-15.218,15.221V980.78 c0,8.394,6.825,15.22,15.218,15.22H966.07c8.391,0,15.218-6.826,15.218-15.22V868.162 C981.288,864.098,979.706,860.275,976.831,857.4z M825.932,807.616h79.409c2.174,0,3.936,1.762,3.936,3.936v42.936 c0,7.25,5.876,13.127,13.124,13.127h43.342c1.044,0,2.046,0.415,2.783,1.153c0.738,0.738,1.153,1.739,1.153,2.783l-0.002,61.748 l-42.756-42.757l-39.93,39.926c-1.265,1.267-2.979,1.977-4.769,1.977c-1.788,0-3.503-0.71-4.769-1.977l-18.885-18.885 l-36.242,36.241V811.221C822.327,809.233,823.943,807.616,825.932,807.616z"></path>
                     <path d="M870.173,890.535c10.078,0,18.248-8.17,18.248-18.247c0-10.076-8.17-18.247-18.248-18.247s-18.248,8.171-18.248,18.247 C851.925,882.365,860.095,890.535,870.173,890.535z"></path>
                   </g>
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
              <div className="grid grid-cols-2 gap-4 w-full border p-1 border-[#D7D7D7] rounded-lg">
                {[...Array(6)].map((_, index) => (
                  <div
                    key={index}
                    className="border-2 border-dashed border-gray-300 rounded-lg h-24 flex items-center justify-center"
                  >
                    {index === 0 && (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="#808080"
                            d="M6 17h12l-3.075-4.1q-.275-.05-.562-.125T13.8 12.6L11.25 16L9 13zm-1 4q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h5v2H5v14h14v-5.325l2 2V19q0 .825-.587 1.413T19 21zm16.55-7.6l-3.1-3.1q-.525.35-1.125.525T16.05 11q-1.85 0-3.15-1.312T11.6 6.5t1.313-3.187T16.1 2t3.188 1.313T20.6 6.5q0 .675-.2 1.3t-.5 1.15L22.95 12zM16.1 9q1.05 0 1.775-.725T18.6 6.5t-.725-1.775T16.1 4t-1.775.725T13.6 6.5t.725 1.775T16.1 9"
                          ></path>
                        </svg>
                        <span className="text-gray-400 mt-2 text-[10px]">افزودن تصویر</span>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right section */}
          <div className="w-full max-w-[570px] mx-auto">
  <h2 className="text-xl mb-4 text-[#02060C] font-vazir text-[16px] font-normal leading-[28px] text-right">
    ویرایش پرسنل
  </h2>
  <div className="flex flex-wrap -mx-2 mb-4">
    <div className="w-1/2 px-2">
      <label className="block mb-2 font-vazir text-[12px] font-normal leading-[21px] text-right text-[#02060C]">
        نام خانوادگی
      </label>
      <input
        type="text"
        className="w-full h-[40px] p-[10px] rounded-[6px] border border-gray-300"
        placeholder="آرش"
      />
    </div>
    <div className="w-1/2 px-2">
      <label className="block mb-2 font-vazir text-[12px] font-normal leading-[21px] text-right text-[#02060C]">
        نام
      </label>
      <input
        type="text"
        className="w-full h-[40px] p-[10px] rounded-[6px] border border-gray-300"
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
      className="w-full h-[40px] p-[10px] rounded-[5px] border border-gray-300"
      placeholder="قرارداد توسعه ایده کسب (تستکس)"
    />
  </div>

  <div className="mb-4">
    <label className="block text-[12px] font-normal leading-[21px] text-right text-[#02060C] font-vazir mb-2">
      توضیحات
    </label>
    <textarea
      className="w-full h-[220px] p-[8px] rounded-[6px] bg-[#FBFBFB] border border-gray-300 text-right"
      placeholder="لورم ایپسوم متن ساختگی..."
    />
  </div>
  <div className="flex justify-end -mx-2">
  <div className="px-2">
    <button
      onClick={closeModalEdit}
      className="w-[120px] sm:w-[179px] h-[35px] sm:h-[40px] py-[6px] sm:py-[8px] bg-gray-200 text-gray-700 rounded-[10px] border border-[#124076] 
      transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-gray-500/50 relative overflow-hidden text-center uppercase"
    >
      <span className="relative z-10">انصراف</span>
    </button>
  </div>
  <div className="px-2">
    <button
      onClick={(e) => openModal("ویرایش پرسنل با موفقیت انجام شد.")}
      className="w-[120px] sm:w-[179px] h-[35px] sm:h-[40px] py-[6px] sm:py-[8px] bg-[#124076] text-white rounded-[10px] 
      transition-all duration-300 ease-out shadow-lg transform hover:scale-105 hover:shadow-xl"
    >
      تایید
    </button>
  </div>
</div>

</div>

        </div>

        {showCropper && (
          <div className="cropper-container relative">
            <Cropper
              image={imageSrcs}
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
