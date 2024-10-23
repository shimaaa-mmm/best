import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faVideo,
  faMicrophone,
  faCamera,
  faCog,
  faExpand,
} from "@fortawesome/free-solid-svg-icons";

const CameraModal = ({ closeModalCamera }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      dir="ltr"
    >
      <div className="ml-[243px] w-[583px] h-auto top-[90px] left-[400px] gap-[0px] rounded-[10px] bg-[#EBEBEB] p-6 shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
        <div className="flex justify-between items-center mb-4">
          <div
            className="text-right text-gray-500"
            style={{
              color: "#02060C",
              fontFamily: "Vazir",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "28px",
            }}
          >
            <div className="font-bold">تاریخ و زمان:</div>
            <div>۱۲-۲۴-۴۳ - ۱۴۰۳/۰۶/۱۰</div>
          </div>
          <span className="ml-[250px] text-right text-[15px] font-normal leading-[20px]">
            آرش دلاوری
          </span>
          <div className="flex items-center">
            <img
              src="/public/images/Ellipse 9.png"
              alt="User profile picture"
              className="rounded-full"
            />
          </div>
        </div>

        <p className="text-right border-t border-gray-300 pt-2 mb-4">
          مشاهده موقعیت مکانی
        </p>

        <div className="relative border-2 p-1 rounded-[20px] bg-[#8BA38B] shadow-[0px_0px_15px_0px_#00000026]">
          <div className="bg-[#BDBDBD] shadow-[0px_0px_24.31px_9.72px_#00000026] border-[1.62px] border-[#828282] p-1 rounded-[7px]">
            <div className="bg-[#02060C80] border-[1px] border-[#BDBDBD] relative overflow-hidden">
              <div
                className="absolute top-0 left-0 w-full flex justify-between items-center bg-[#02060C80] text-white p-2"
                dir="rtl"
              >
                <span>دوربین - test | اتاق مدیریت</span>
                <span>۱۲:۳۴:۴۳</span>
              </div>
              <img
                src="/public/images/Rectangle 160.png"
                alt="Camera view"
                className="w-full"
              />
              <div className="absolute bottom-0 left-0 w-full bg-[#02060C80] flex justify-between items-center p-2">
                <FontAwesomeIcon icon={faInfoCircle} className="text-white" />
                <div className="flex space-x-2">
                  <FontAwesomeIcon icon={faVideo} className="text-white" />
                  <FontAwesomeIcon icon={faMicrophone} className="text-white" />
                  <FontAwesomeIcon icon={faCamera} className="text-white" />
                  <FontAwesomeIcon icon={faCog} className="text-white" />
                  <FontAwesomeIcon icon={faExpand} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-left mt-4">
          <button
            onClick={closeModalCamera}
            className="relative border border-[#304D30] border-t-0 border-l-0 border-r-0 border-b py-2 px-0 rounded-[10px] w-[179px] h-[40px] overflow-hidden transition-all duration-300 shadow-md hover:shadow-lg group bg-gradient-to-r from-[#085078] via-[#85D8CE] to-[#085078] bg-[length:200%_100%] hover:bg-[length:100%_100%] text-white transform hover:scale-105"
          >
            <span className="absolute inset-0 transition-opacity duration-300 ease-in-out bg-green-600 opacity-0 group-hover:opacity-30"></span>
            <span className="relative z-10 text-white uppercase">بازگشت</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CameraModal;
