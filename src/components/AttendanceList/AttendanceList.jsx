import React from "react";
import "./style.scss";

const ModalComponent = ({ closeModalAttendanceList }) => {
  const rows = Array.from({ length: 20 }, (_, index) => ({
    date: "1402/06/10",
    time: "12:34:43",
  }));

  const tableData = rows.map((row, index) => ({
    key: index,
    exitTime: row,
    entryTime: row,
    date: row.date,
    time: row.time,
  }));

  return (
    <div className="alertModal z-20 fixed top-0 left-0 w-full h-full bg-black/30 backdrop-blur-[3px] flex items-center justify-center">
      <div className="modal w-[619px] h-[540px] top-[96px] left-[400px] p-0 pb-[11px] gap-0 rounded-[10px] bg-white shadow-lg overflow-hidden">
        <div className="header flex justify-between items-center p-4 border-b border-[#304D30] w-[579px] mr-[21px]">
          <div className="flex items-center">
            <img
              src="/public/Ellipse 9.png"
              alt="Profile picture of the user"
              className="rounded-full w-12 h-12"
            />
            <div className="ml-4">
              <div className="name font-vazir text-[20px] font-normal leading-[24px] text-right text-[#02060C] mr-[14px]">
                آرش دلاوری
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <button
              className="text-gray-500 w-[32px] ml-[-23px] h-[32px] top-[16px] left-[16px] text-[20px] flex items-center justify-center"
              onClick={closeModalAttendanceList}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <mask id="lineMdCloseCircleFilled0">
                  <g
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                  >
                    <path
                      fill="#fff"
                      fillOpacity={0}
                      strokeDasharray={64}
                      strokeDashoffset={64}
                      d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"
                    >
                      <animate
                        fill="freeze"
                        attributeName="fill-opacity"
                        begin="0.78s"
                        dur="0.65s"
                        values="0;1"
                      ></animate>
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="0.78s"
                        values="64;0"
                      ></animate>
                    </path>
                    <path
                      stroke="#000"
                      strokeDasharray={8}
                      strokeDashoffset={8}
                      d="M12 12l4 4M12 12l-4 -4M12 12l-4 4M12 12l4 -4"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="1.43s"
                        dur="0.26s"
                        values="8;0"
                      ></animate>
                    </path>
                  </g>
                </mask>
                <rect
                  width={24}
                  height={24}
                  fill="black"
                  mask="url(#lineMdCloseCircleFilled0)"
                ></rect>
              </svg>{" "}
            </button>
            <div className="flex flex-col items-start">
              <div
                className="date text-sm text-gray-500 font-vazir text-right"
                style={{
                  width: "153px",
                  height: "22px",
                  top: "48px",
                  left: "40px",
                  lineHeight: "28px",
                }}
              >
                تاریخ و زمان:
              </div>
              <div
                className="text-gray-500 text-sm font-vazir"
                style={{ lineHeight: "28px" }}
              >
                1402/06/10 - 12:34:43
              </div>
            </div>
          </div>
        </div>
        <div className="content p-4">
          <div className="tabs flex justify-between mb-2">
            <button className=" text-slate-900 px-4 py-2 rounded-md">
              لیست ورود و خروج
            </button>
            <button className="w-[99px] h-[40px] rounded-[10px] border border-[#124076] text-white shadow-lg transition-all duration-300 ease-in-out bg-gradient-to-r from-[#43cea2] to-[#43cea2] hover:bg-right bg-[length:200%_auto] hover:from-[#43cea2] hover:to-[#185a9d] hover:scale-105 hover:shadow-2xl">
              فیلترها
            </button>
          </div>
          <div
            className="overflow-y-auto"
            style={{
              maxHeight: "340px",
              direction: "ltr",
              borderRadius: "10px",
            }}
          >
            <table className="min-w-full bg-[#FBFBFB] border border-[#828282] border-collapse shadow-lg">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b border-l bg-[#8BA38B] text-center text-[#131F13] font-normal text-[16px] leading-[28px] font-vazir">
                    زمان خروج
                  </th>
                  <th className="py-2 px-4 border-b border-l bg-[#8BA38B] text-center text-[#131F13] font-normal text-[16px] leading-[28px] font-vazir">
                    زمان ورود
                  </th>
                </tr>
              </thead>
              <tbody className="bg-[#EBEBEB]">
                {tableData.map((row) => (
                  <tr key={row.key}>
                    <td className="py-2 px-4 border-b border-[#B2BDB2] border-r text-center">
                      <span
                        className="bg-[#C8DDC8] w-[164px] mx-auto px-2 py-1 rounded-[26px] flex items-center justify-center 
            text-[#02060C] font-vazir text-[12px] font-normal leading-[21px] text-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1.2rem"
                          height="1.2rem"
                          viewBox="0 0 24 24"
                        >
                          <rect
                            width={14}
                            height={0}
                            x={5}
                            y={5}
                            fill="#008040"
                          >
                            <animate
                              fill="freeze"
                              attributeName="height"
                              begin="1.56s"
                              dur="0.52s"
                              values="0;3"
                            ></animate>
                          </rect>
                          <g
                            fill="none"
                            stroke="#008040"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.9}
                          >
                            <path
                              strokeDasharray={64}
                              strokeDashoffset={64}
                              d="M12 4h7c0.55 0 1 0.45 1 1v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1v-14c0 -0.55 0.45 -1 1 -1Z"
                            >
                              <animate
                                fill="freeze"
                                attributeName="stroke-dashoffset"
                                dur="1.56s"
                                values="64;0"
                              ></animate>
                            </path>
                            <path
                              strokeDasharray={4}
                              strokeDashoffset={4}
                              d="M7 4v-2M17 4v-2"
                            >
                              <animate
                                fill="freeze"
                                attributeName="stroke-dashoffset"
                                begin="1.56s"
                                dur="0.52s"
                                values="4;0"
                              ></animate>
                            </path>
                            <path
                              strokeDasharray={12}
                              strokeDashoffset={12}
                              d="M7 11h10"
                            >
                              <animate
                                fill="freeze"
                                attributeName="stroke-dashoffset"
                                begin="2.08s"
                                dur="0.52s"
                                values="12;0"
                              ></animate>
                            </path>
                            <path
                              strokeDasharray={8}
                              strokeDashoffset={8}
                              d="M7 15h7"
                            >
                              <animate
                                fill="freeze"
                                attributeName="stroke-dashoffset"
                                begin="2.6s"
                                dur="0.52s"
                                values="8;0"
                              ></animate>
                            </path>
                          </g>
                        </svg>{" "}
                        {`${row.date} - ${row.time}`}
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-[#B2BDB2] text-center">
                      <span
                        className="bg-[#C8DDC8] w-[164px] mx-auto px-2 py-1 rounded-[26px] flex items-center justify-center 
            text-[#02060C] font-vazir text-[12px] font-normal leading-[21px] text-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1.2rem"
                          height="1.2rem"
                          viewBox="0 0 24 24"
                        >
                          <rect
                            width={14}
                            height={0}
                            x={5}
                            y={5}
                            fill="#008040"
                          >
                            <animate
                              fill="freeze"
                              attributeName="height"
                              begin="1.56s"
                              dur="0.52s"
                              values="0;3"
                            ></animate>
                          </rect>
                          <g
                            fill="none"
                            stroke="#008040"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.9}
                          >
                            <path
                              strokeDasharray={64}
                              strokeDashoffset={64}
                              d="M12 4h7c0.55 0 1 0.45 1 1v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1v-14c0 -0.55 0.45 -1 1 -1Z"
                            >
                              <animate
                                fill="freeze"
                                attributeName="stroke-dashoffset"
                                dur="1.56s"
                                values="64;0"
                              ></animate>
                            </path>
                            <path
                              strokeDasharray={4}
                              strokeDashoffset={4}
                              d="M7 4v-2M17 4v-2"
                            >
                              <animate
                                fill="freeze"
                                attributeName="stroke-dashoffset"
                                begin="1.56s"
                                dur="0.52s"
                                values="4;0"
                              ></animate>
                            </path>
                            <path
                              strokeDasharray={12}
                              strokeDashoffset={12}
                              d="M7 11h10"
                            >
                              <animate
                                fill="freeze"
                                attributeName="stroke-dashoffset"
                                begin="2.08s"
                                dur="0.52s"
                                values="12;0"
                              ></animate>
                            </path>
                            <path
                              strokeDasharray={8}
                              strokeDashoffset={8}
                              d="M7 15h7"
                            >
                              <animate
                                fill="freeze"
                                attributeName="stroke-dashoffset"
                                begin="2.6s"
                                dur="0.52s"
                                values="8;0"
                              ></animate>
                            </path>
                          </g>
                        </svg>{" "}
                        {`${row.date} - ${row.time}`}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
