import React from "react";
import "./style.scss";

const ModalHeader = ({ closeModalAttendanceList }) => (
  <div className="header flex justify-between items-center p-4 border-b border-[#304D30]"dir="rtl" >
    <div className="flex items-center gap-16">
      <img
        src="/public/Ellipse 9.png"
        alt="Profile picture of the user"
        className="rounded-full w-12 h-12 mt-[-9px]"
      />
      <div className="ml-4">
        <div className="name font-vazir text-[20px] text-[#02060C]">آرش دلاوری</div>
      </div>
    </div>
    <button
  className="text-gray-500 w-[32px] h-[32px] flex items-center justify-center"
  onClick={closeModalAttendanceList}
  aria-label="Close modal"
>
  <svg
    height="32px"
    width="32px"
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 502 502"
    xmlSpace="preserve"
    fill="#000000"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <g>
        <g>
          <circle style={{ fill: '#800080' }} cx="251" cy="251" r="241"></circle>
          <path d="M251,502c-67.045,0-130.076-26.108-177.483-73.517C26.108,381.076,0,318.045,0,251S26.108,120.924,73.517,73.517 C120.924,26.108,183.955,0,251,0s130.076,26.108,177.483,73.517C475.892,120.924,502,183.955,502,251 s-26.108,130.076-73.517,177.483C381.076,475.892,318.045,502,251,502z M251,20C123.626,20,20,123.626,20,251s103.626,231,231,231 s231-103.626,231-231S378.374,20,251,20z"></path>
        </g>
        <g>
          <path
            style={{ fill: '#000000' }}
            d="M281.291,249l76.729-76.729c8.641-8.641,8.641-22.651,0-31.291c-8.641-8.641-22.651-8.641-31.291,0 L250,217.709l-76.729-76.729c-8.641-8.641-22.651-8.641-31.291,0c-8.641,8.641-8.641,22.651,0,31.291L218.709,249l-76.729,76.729 c-8.641,8.641-8.641,22.651,0,31.291c4.32,4.32,9.984,6.48,15.646,6.48s11.325-2.16,15.646-6.48L250,280.291l76.729,76.729 c4.32,4.32,9.984,6.48,15.646,6.48s11.325-2.16,15.646-6.48c8.641-8.641,8.641-22.651,0-31.291L281.291,249z"></path>
          <path d="M342.374,373.5c-8.582,0-16.649-3.341-22.717-9.408L250,294.434l-69.657,69.658c-6.067,6.067-14.135,9.408-22.717,9.408 c-8.581,0-16.648-3.341-22.717-9.407c-12.527-12.527-12.527-32.909-0.001-45.436L204.566,249l-69.658-69.657 c-12.525-12.526-12.525-32.907,0-45.434c6.068-6.068,14.137-9.41,22.718-9.41s16.649,3.343,22.717,9.411L250,203.566 l69.657-69.657c6.067-6.067,14.136-9.41,22.717-9.41s16.649,3.342,22.718,9.41c12.525,12.526,12.525,32.907,0,45.434L295.434,249 l69.658,69.657c12.526,12.526,12.526,32.908,0,45.435C359.022,370.159,350.955,373.5,342.374,373.5z M250,270.291 c2.652,0,5.195,1.054,7.071,2.929l76.729,76.729c2.289,2.29,5.335,3.551,8.574,3.551c3.24,0,6.285-1.262,8.576-3.552 c4.728-4.728,4.728-12.421-0.001-17.148l-76.729-76.729c-1.875-1.876-2.929-4.419-2.929-7.071s1.054-5.195,2.929-7.071 l76.729-76.729c4.729-4.728,4.729-12.421,0-17.148c-2.29-2.291-5.336-3.553-8.575-3.553s-6.284,1.262-8.574,3.552l-76.729,76.729 c-3.906,3.904-10.236,3.904-14.143,0L166.2,148.052c-2.29-2.291-5.335-3.553-8.574-3.553s-6.285,1.262-8.575,3.553 c-4.729,4.728-4.729,12.421,0,17.148l76.729,76.729c1.875,1.876,2.929,4.419,2.929,7.071s-1.054,5.195-2.929,7.071L149.051,332.8 c-4.729,4.728-4.729,12.421,0,17.149c2.29,2.289,5.335,3.551,8.575,3.551c3.239,0,6.285-1.261,8.574-3.551l76.729-76.729 C244.805,271.345,247.348,270.291,250,270.291z"></path>
        </g>
        <g>
          <path d="M50,261c-5.522,0-10-4.478-10-10c0-39.687,11.081-78.358,32.045-111.836c20.387-32.557,49.233-58.957,83.422-76.346 c4.92-2.506,10.942-0.544,13.446,4.38c2.504,4.922,0.543,10.942-4.38,13.446C100.055,113.44,60,178.717,60,251 C60,256.522,55.522,261,50,261z"></path>
        </g>
        <g>
          <path d="M209.99,64.187c-4.641,0-8.802-3.249-9.781-7.973c-1.121-5.408,2.354-10.7,7.763-11.821C222.036,41.478,236.513,40,251,40 c5.522,0,10,4.478,10,10s-4.478,10-10,10c-13.127,0-26.238,1.338-38.97,3.977C211.346,64.118,210.663,64.187,209.99,64.187z"></path>
        </g>
      </g>
    </g>
  </svg>
</button>

  </div>
);

const AttendanceTable = ({ tableData }) => (
  <div
    className="overflow-y-auto"
    style={{ maxHeight: "340px", direction: "ltr", borderRadius: "10px" }}
  >
    <table className="min-w-full bg-[#FBFBFB] border border-[#828282] border-collapse shadow-lg">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b bg-[#8BA38B] text-center text-[#131F13]">زمان خروج</th>
          <th className="py-2 px-4 border-b bg-[#8BA38B] text-center text-[#131F13]">زمان ورود</th>
        </tr>
      </thead>
      <tbody className="bg-[#EBEBEB]">
        {tableData.map((row) => (
          <tr key={row.key}>
            <td className="py-2 px-4 border-b text-center">
              <span className="bg-[#C8DDC8] px-2 py-1 rounded-[26px] text-[#02060C]">
                {`${row.date} - ${row.time}`}
              </span>
            </td>
            <td className="py-2 px-4 border-b text-center">
              <span className="bg-[#C8DDC8] px-2 py-1 rounded-[26px] text-[#02060C]">
                {`${row.date} - ${row.time}`}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const ModalComponent = ({ closeModalAttendanceList }) => {
  const rows = Array.from({ length: 20 }, (_, index) => ({
    date: "1402/06/10",
    time: "12:34:43",
  }));

  const tableData = rows.map((row, index) => ({
    key: index,
    ...row,
  }));

  return (
    <div className="alertModal fixed top-0 left-0 w-full h-full bg-black/30 backdrop-blur-[3px] flex items-center justify-center">
      <div className="modal w-[90%] max-w-[619px] h-[540px] bg-white rounded-[10px] shadow-lg overflow-hidden">
        <ModalHeader closeModalAttendanceList={closeModalAttendanceList} />
        <div className="content p-4">
          <div className="tabs flex justify-between mb-2" dir="rtl">
            <button className="text-slate-900 px-4 py-2 rounded-md">لیست ورود و خروج</button>
            <button className="w-[99px] h-[40px] rounded-[10px] border border-[#124076] text-white shadow-lg transition-all duration-300 ease-in-out bg-gradient-to-r from-[#43cea2] to-[#43cea2] hover:bg-right bg-[length:200%_auto] hover:from-[#43cea2] hover:to-[#185a9d] hover:scale-105 hover:shadow-2xl">
              فیلترها
            </button>
          </div>
          <AttendanceTable tableData={tableData} />
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
