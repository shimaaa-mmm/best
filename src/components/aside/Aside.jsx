import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";

const Aside = ({ openModal, userSelection, openModalEdit, setUpdataTable }) => {
  const [imageSrc, setImageSrc] = useState("");
  const [showCropper, setShowCropper] = useState(false);
  const [firstName, setFirstName] = useState(userSelection?.name || "");
  const [lastName, setLastName] = useState(userSelection?.last_name || "");
  const [field, setField] = useState(userSelection?.company_name || "");
  const [explanation, setExplanation] = useState(
    userSelection?.description || ""
  );
  const [users, setUsers] = useState([]);
  const [isAsideVisible, setIsAsideVisible] = useState(false);
  const [file, setFile] = useState();

  useEffect(() => {
    if (userSelection) {
      setFirstName(userSelection.name || "");
      setLastName(userSelection.last_name || "");
      setField(userSelection.company_name || "");
      setExplanation(userSelection.description || "");
      setImageSrc(userSelection.images[0]?.image_URL || "");
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
    setFile(file);
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
    // دیتایی که خودت درست کردی 
    const newPersonnel = {
      image: imageSrc,
      firstName,
      lastName,
      field,
      explanation,
    };

    // قبل از همه اتفاقات پایین باید اینجا چک کنی که فیلد هات خالی نباسن 
    // بعد اون عملیات ایجاد فرم دیتا و پست کردن انجام  بشه .


    // ------------------------------ از ایجا به پایین زمانی اتفاق می افته که چک کرده باشی همه فیلد ها رو پر کرده باشه کاربر------
    // اینجا اومدیم و یک فرم دیتا ساختیم برای این که دیتا رو بفرستیم سمت بکند
    // create form data ;
    const formData = new FormData();
    // اینجا نام رو از ابجکت دیتایی که خودت ساختی گرفتیم و توی فوم دیتا گذاشتیم
    formData.append("Fname", newPersonnel.firstName);
    // اینجا فامیل رو توی فرم دیتا گذاشیم
    formData.append("Lname", newPersonnel.lastName);
    // اینجا فیلد رو توی فرم دیتا گذاشتیم
    formData.append("Cname", newPersonnel.field);

    // اینجا توضیحات رو گذاشتیم
    formData.append("description", newPersonnel.explanation);
    // اینجا  عکس رو از استیت فایل گرفتیم و با نام فایل توی فرم دیتا گذاشتم
    formData.append("file", file);
    // اینجا  یک بار اومدیم از دیتای که توی فرم دیتا گذاشتیم لاگ گرفتیم کککه ببینیم توش چیه
    const d = Object.fromEntries(formData);
    console.log(d);

    // send form date to backend
    // بهد از اون که دیدیم توش چیه و همه چی درست بود با اکسیوس یک پست فرستادیم به سمت بکند و اون فرم دیتا رو هم فرستادیم
    axios
      .post(`http://37.32.8.81:5000/hr/`, {
        formData,
      })
      .then((res) => {
        // اینجا بکند به ما پاسخ میده 
        console.log(res.data);
        // set new users
        // اینجا بعد از این که پاسخ بکند رو دیدیم یک بار دیگ تیبل رو به وسیله این استیت اپدیت میکنیم
        setUpdataTable(true);
      })
      .catch((err) => console.log(err));

    // setUsers((prevUsers) => [...prevUsers, newPersonnel]);
    // از اینجا به پایین باید زمانی اتفاق بی افته که پاسخ از بکند به ما رسیده و  میخوایم فرم رو خالی کنیم پس کد های زیر رو باید ببری  اونجا که تیبل اپدیت کردیم 
    // openModal("پرسنل جدید با موفقیت افزوده شد");
    // setImageSrc("");
    // setFirstName("");
    // setLastName("");
    // setField("");
    // setExplanation("");
    // میتونی کد های بین این دوتا کامنت رو از کامنت در بیاری ببری  اونجایی که نوشتم بعد از دریافت پاسخ از سرور تیبل رو اپدیت میکنیم
  };
// فهمیدم
  return (
    <div>
      <button
        className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-gray-200 rounded-full shadow-md"
        onClick={() => setIsAsideVisible(!isAsideVisible)}
      >
        <FaBars color="red" size={24} />
      </button>
      <div className="relative">
        <aside className="absolute top-0 left-[74px] w-[376px] h-[904px] gap-[16px] rounded-[20px] bg-[#D7D7D7] shadow-[0px_0px_15px_2px_#00000026] mt-[24px] p-4">
          <h2 className="font-vazir text-[20px] font-medium leading-[27px] text-right w-[156px] h-[27px] absolute top-[25px] left-[203px]">
            افزودن پرسنل جدید
          </h2>
          <div className="border border-gray-300 p-4 rounded-lg mb-4">
            <div
              className="relative w-[344px] h-[268px] top-[41px] left-[-18px] gap-0 border border-gray-300 rounded-[10px] bg-gray-300 flex items-center justify-center mb-4 cursor-pointer"
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
          </div>

          <div
            className="flex flex-col w-[344px] h-[530px] absolute top-[356px] left-[18px] gap-[16px] text-gray-900 "
            dir="rtl"
          >
            <div className="flex w-[344px] h-[48px] gap-1">
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                placeholder="نام "
                className="border border-gray-300 p-2 rounded-lg flex-1 h-full w-[74px] font-vazir text-[12px] font-normal leading-[24px] text-right text-gray-900"
              />
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="نام خانوادگی"
                className="border border-gray-300 p-2 rounded-lg flex-1 h-full w-[74px] font-vazir text-[12px] font-normal leading-[24px] text-right text-gray-900"
              />
            </div>
            <input
              value={field}
              onChange={(e) => setField(e.target.value)}
              type="text"
              placeholder="نام نهاد"
              className="border border-gray-300 p-[12px_8px] rounded-[10px] w-[344px] h-[48px] font-vazir text-[12px] font-normal leading-[24px] text-right text-gray-900"
            />
            <textarea 
              value={explanation}
              onChange={(e) => setExplanation(e.target.value)}
              placeholder="توضیحات"
              className="border border-gray-300 p-[12px_8px] rounded-[20px] w-[344px] h-[362px] font-vazir text-[12px] font-normal leading-[24px] text-right text-gray-900"
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
      </div>
    </div>
  );
};

export default Aside;
