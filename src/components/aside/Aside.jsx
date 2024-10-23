import React from "react";

const Aside = ({ openModal, userSelection, openModalEdit }) => {
  return (
    <>
      <aside className="w-[376px] h-[904px] gap-[16px] rounded-[20px] bg-[#D7D7D7] shadow-[0px_0px_15px_2px_#00000026] mt-[24px] mr-[802px] p-4">
        {" "}
        <h2 className="font-vazir text-[20px] font-medium leading-[27px] text-right w-[156px] h-[27px] absolute top-[116px] left-[293px]">
          افزودن پرسنل جدید
        </h2>
        <div className="border border-gray-300 p-4 rounded-lg mb-4">
          <div className="flex  justify-center items-center w-[344px] h-[268px] absolute top-[166px] left-[108px] gap-0 rounded-[20px] border border-solid border-[#BDBDBD] text-[#EBEBEB] bg-gray-200 mb-4">
            <input
              type="file"
              name="image"
              id="image"
              className="w-full h-full opacity-0"
            />
            <label
              htmlFor="image"
              className="absolute w-full h-full left-0 top-0 bg-black/40 z-3 rounded-lg flex items-center justify-center"
            >
              {userSelection?.image ? (
                <img
                  src={userSelection?.image}
                  alt=""
                  className="w-full h-full"
                />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={96}
                  height={96}
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="#808080"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.9}
                  >
                    <path
                      strokeDasharray={72}
                      strokeDashoffset={72}
                      d="M3 14v-9h18v14h-18v-5"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="0.96s"
                        values="72;0"
                      ></animate>
                    </path>
                    <path
                      strokeDasharray={24}
                      strokeDashoffset={24}
                      strokeWidth={1.3}
                      d="M3 16l4 -3l3 2l6 -5l5 4"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.96s"
                        dur="0.64s"
                        values="24;0"
                      ></animate>
                    </path>
                  </g>
                  <g fill="#808080" fillOpacity={0}>
                    <circle cx={7.5} cy={9.5} r={1.5}>
                      <animate
                        fill="freeze"
                        attributeName="fill-opacity"
                        begin="1.6s"
                        dur="0.32s"
                        values="0;1"
                      ></animate>
                    </circle>
                    <path d="M3 16l4 -3l3 2l6 -5l5 4V19H3Z">
                      <animate
                        fill="freeze"
                        attributeName="fill-opacity"
                        begin="2.08s"
                        dur="0.24s"
                        values="0;0.2"
                      ></animate>
                    </path>
                  </g>
                </svg>
              )}
            </label>
          </div>
          <div className="flex flex-col w-[344px] h-[530px] absolute top-[445px] left-[109px] gap-[16px] text-gray-900">
            <div className="flex w-[344px] h-[48px] gap-1">
              <input
                defaultValue={userSelection?.firstName}
                type="text"
                placeholder="نام "
                className="border border-gray-300 p-2 rounded-lg flex-1 h-full w-[74px] font-vazir text-[14px] font-normal leading-[24px] text-right text-gray-900"
              />
              <input
                type="text"
                defaultValue={userSelection?.lastName}
                placeholder="نام خانوداگی"
                className="border border-gray-300 p-2 rounded-lg flex-1 h-full w-[74px] font-vazir text-[14px] font-normal leading-[24px] text-right text-gray-900"
              />
            </div>
            <input
              type="text"
              placeholder="نام نهاد"
              defaultValue={userSelection?.field}
              className="border border-gray-300 p-[12px_8px] rounded-[10px] w-[344px] h-[48px] font-vazir text-[14px] font-normal leading-[24px] text-right text-gray-900"
            />
            <textarea
              defaultValue={
                userSelection?.explanation ? userSelection.explanation : ""
              }
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
                onClick={(e) => openModal("پرسنل جدید با موفقیت افزوده شد")}
              >
                افزودن
              </button>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Aside;
