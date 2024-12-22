import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Alert from "../../components/alertModal/Alert";
import CameraModal from "../../components/cameraModal/CameraModal";
import Pagination from "../../components/Pagination/Pagination";
import Aside from "../../components/aside/Aside";
import EditlModal from "../../components/EditModal/EditModal";
import AttendanceList from "../../components/AttendanceList/AttendanceList";
import "./style.css";
import axios from "axios";

const data = [
  // {
  //   id: 1,
  //   firstName: "ارش",
  //   lastName: "جعفری",
  //   image: "https://picsum.photos/200/400",
  //   field: "بخش اداری",
  //   lastEntry: "1402/06/10 12:45:43",
  //   lastExit: "1402/06/10 12:45:43",
  //   explanation:
  //     "یک توضیح تستی. ارش در بخش اداری به عنوان مسئول ثبت ورود و خروج کارکنان فعالیت می‌کند. او به جزئیات توجه ویژه‌ای دارد و همواره سعی در بهبود فرآیندها دارد.",
  // },
  // {
  //   id: 2,
  //   firstName: "ارش",
  //   lastName: "معروفی",
  //   image: "https://picsum.photos/300/300",
  //   field: "بخش اداری",
  //   lastEntry: "1402/06/10 12:45:43",
  //   lastExit: "1402/06/10 12:45:43",
  //   explanation:
  //     "ارش معروفی از افراد کلیدی در تیم اداری است. او تجربه زیادی در مدیریت امور داخلی دارد و به بهینه‌سازی عملکرد سازمان کمک می‌کند. همچنین به مهارت‌های ارتباطی خود افتخار می‌کند.",
  // },
  // {
  //   id: 3,
  //   firstName: "ارش",
  //   lastName: "معروفی",
  //   image: "https://picsum.photos/250/400",
  //   field: "بخش اداری",
  //   lastEntry: "1402/06/10 12:45:43",
  //   lastExit: "1402/06/10 12:45:43",
  //   explanation:
  //     "توضیحی ندارد. اما به عنوان یک عضو از تیم اداری، ارش مسئولیت‌های متعددی دارد. او همیشه در حال یادگیری و به روزرسانی مهارت‌های خود است.",
  // },
  // {
  //   id: 4,
  //   firstName: "ارش",
  //   lastName: "معروفی",
  //   image: "https://picsum.photos/450/400",
  //   field: "بخش اداری",
  //   lastEntry: "1402/06/10 12:45:43",
  //   lastExit: "1402/06/10 12:45:43",
  //   explanation:
  //     "با اینکه توضیح خاصی برای این فرد وجود ندارد، ارش در زمینه اداری به خوبی عمل می‌کند. او نقش مهمی در تسهیل ارتباطات داخلی دارد و همکارانش به او اعتماد دارند.",
  // },
  // {
  //   id: 5,
  //   firstName: "ارش",
  //   lastName: "معروفی",
  //   image: "https://picsum.photos/280/400",
  //   field: "بخش اداری",
  //   lastEntry: "1402/06/10 12:45:43",
  //   lastExit: "1402/06/10 12:45:43",
  //   explanation:
  //     "ارش با تسلط به نرم‌افزارهای اداری به خوبی امور را مدیریت می‌کند. او همواره به دنبال راه‌هایی برای کاهش زمان و هزینه‌ها در فرآیندها است. همکارانش او را فردی مبتکر می‌دانند.",
  // },
  // {
  //   id: 6,
  //   firstName: "ارش",
  //   lastName: "معروفی",
  //   image: "https://picsum.photos/500/400",
  //   field: "بخش اداری",
  //   lastEntry: "1402/06/10 12:45:43",
  //   lastExit: "1402/06/10 12:45:43",
  //   explanation:
  //     "توضیحات خاصی برای ارش وجود ندارد، اما او به عنوان یک کارمند قابل اعتماد شناخته می‌شود. مهارت‌های سازمانی او به بهبود کارایی بخش کمک کرده است.",
  // },
  // {
  //   id: 7,
  //   firstName: "ارش",
  //   lastName: "معروفی",
  //   image: "https://picsum.photos/300/300",
  //   field: "بخش اداری",
  //   lastEntry: "1402/06/10 12:45:43",
  //   lastExit: "1402/06/10 12:45:43",
  //   explanation:
  //     "ارش با توجه به تجربه‌اش در بخش اداری، همیشه مشاوره‌های مفیدی ارائه می‌دهد. او به همکاری‌های تیمی اعتقاد دارد و سعی در ارتقاء روحیه تیمی دارد. همکارانش او را فردی مثبت می‌دانند.",
  // },
  // {
  //   id: 8,
  //   firstName: "ارش",
  //   lastName: "کاظمی",
  //   image: "https://picsum.photos/220/400",
  //   field: "بخش IT",
  //   lastEntry: "1402/06/10 14:15:00",
  //   lastExit: "1402/06/10 14:15:00",
  //   explanation:
  //     "ارش کاظمی به عنوان یک متخصص IT شناخته می‌شود. او مسئول نگهداری و به‌روزرسانی سیستم‌های کامپیوتری در سازمان است. تجربیات او در حل مسائل فنی برای تیم بسیار ارزشمند است.",
  // },
  // {
  //   id: 9,
  //   firstName: "ارش",
  //   lastName: "آرمانی",
  //   image: "https://picsum.photos/320/300",
  //   field: "بخش مالی",
  //   lastEntry: "1402/06/10 11:30:20",
  //   lastExit: "1402/06/10 11:30:20",
  //   explanation:
  //     "ارش آرمانی در بخش مالی با دقت به جزئیات کار می‌کند. او در تجزیه و تحلیل داده‌های مالی و گزارش‌دهی تخصص دارد. او به دنبال بهینه‌سازی فرآیندهای مالی سازمان است.",
  // },
  // {
  //   id: 10,
  //   firstName: "ارش",
  //   lastName: "نوروزی",
  //   image: "https://picsum.photos/240/400",
  //   field: "بخش فروش",
  //   lastEntry: "1402/06/10 15:00:10",
  //   lastExit: "1402/06/10 15:00:10",
  //   explanation:
  //     "ارش نوروزی به عنوان یکی از بهترین فروشندگان شناخته می‌شود. او توانایی بالایی در ارتباط با مشتریان دارد و سعی می‌کند نیازهای آنان را به خوبی درک کند. همواره در تلاش است تا فروش را افزایش دهد.",
  // },
  // {
  //   id: 11,
  //   firstName: "ارش",
  //   lastName: "کمالی",
  //   image: "https://picsum.photos/300/350",
  //   field: "بخش خدمات",
  //   lastEntry: "1402/06/10 10:45:30",
  //   lastExit: "1402/06/10 10:45:30",
  //   explanation:
  //     "ارش کمالی در بخش خدمات با مشتریان در تماس است. او به حل مشکلات مشتریان توجه ویژه‌ای دارد و سعی می‌کند بهترین خدمات را ارائه دهد. او همیشه به دنبال یادگیری مهارت‌های جدید است.",
  // },
  // {
  //   id: 12,
  //   firstName: "ارش",
  //   lastName: "علیزاده",
  //   image: "https://picsum.photos/260/400",
  //   field: "بخش تولید",
  //   lastEntry: "1402/06/10 09:15:55",
  //   lastExit: "1402/06/10 09:15:55",
  //   explanation:
  //     "ارش علیزاده در بخش تولید فعالیت می‌کند و مسئولیت‌های زیادی دارد. او به افزایش کیفیت محصولات اهمیت می‌دهد و همواره در تلاش است تا کارایی را افزایش دهد. تیم تولید به همکاری با او افتخار می‌کند.",
  // },
  // {
  //   id: 13,
  //   firstName: "ارش",
  //   lastName: "میری",
  //   image: "https://picsum.photos/280/400",
  //   field: "بخش اداری",
  //   lastEntry: "1402/06/10 08:30:00",
  //   lastExit: "1402/06/10 08:30:00",
  //   explanation:
  //     "ارش میری به عنوان یک کارمند متعهد شناخته می‌شود. او به کارهای اداری و مدیریتی علاقه‌مند است و سعی در بهبود فرآیندهای داخلی دارد. همکارانش به او اعتماد کامل دارند.",
  // },
  // {
  //   id: 14,
  //   firstName: "ارش",
  //   lastName: "صبوری",
  //   image: "https://picsum.photos/320/400",
  //   field: "بخش اداری",
  //   lastEntry: "1402/06/10 12:00:00",
  //   lastExit: "1402/06/10 12:00:00",
  //   explanation:
  //     "ارش صبوری به عنوان یکی از اعضای کلیدی تیم اداری شناخته می‌شود. او به حل مسائل و چالش‌های اداری بسیار ماهر است. او به بازخوردهای همکارانش توجه دارد و سعی در بهبود مستمر دارد.",
  // },
  // {
  //   id: 15,
  //   firstName: "ارش",
  //   lastName: "جباری",
  //   image: "https://picsum.photos/360/400",
  //   field: "بخش اداری",
  //   lastEntry: "1402/06/10 13:15:00",
  //   lastExit: "1402/06/10 13:15:00",
  //   explanation:
  //     "ارش جباری در بخش اداری کار می‌کند و تجربه خوبی دارد. او در ایجاد ارتباطات موثر با همکاران و مدیران تبحر دارد. همچنین سعی می‌کند فضای کاری مثبتی ایجاد کند.",
  // },
];

const Dashbord = () => {
  // States
  const [users, setUsers] = useState();
  const [title, setTitle] = useState("");
  const [apiData, setApiData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalEdit, setIsModalEdit] = useState(false);
  const [isModalCamera, setIsModalCamera] = useState(false);
  const [isModalAttendanceList, setIsModalAttendanceList] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [userSelection, setUserSelection] = useState(null);
  const [personnelList, setPersonnelList] = useState([]);
  const [updataTable, setUpdataTable] = useState(false);

  const itemsPerPage = 5;

  // API Fetching
  const getApiData = async () => {
    try {
      const response = await axios.get("http://37.32.8.81:5000/hr/get_list", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setUsers(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching API data:", error.message);
    }
  };
  useEffect(() => {
    if (updataTable == true) {
      getApiData();
      setUpdataTable(false)
    }
  }, [updataTable]);

  useEffect(() => {
    getApiData();
  }, []);
  // Modal Handlers
  const openModal = (titleMsg) => {
    setTitle(titleMsg);
    setIsModalOpen(true);
    setIsModalEdit(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTitle("");
  };

  const openModalEdit = () => {
    setIsModalEdit(true);
  };

  const closeModalEdit = () => {
    setIsModalEdit(false);
  };

  const openModalCamera = () => {
    setIsModalCamera(true);
  };

  const closeModalCamera = () => {
    setIsModalCamera(false);
  };

  const openModalAttendanceList = () => {
    setIsModalAttendanceList(true);
  };

  const closeModalAttendanceList = () => {
    setIsModalAttendanceList(false);
  };

  // Image Crop Handler
  const handleConfirmImage = (croppedImage) => {
    setProfileImage(croppedImage);
  };

  // Pagination Logic
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const currentItems = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Row Click Handler
  const clickRowHandler = (id) => {
    const user = users.find((user) => user.id === id);
    console.log(user);
    setUserSelection(user);
  };

  // Deselect Row on Outside Click
  useEffect(() => {
    const clickHandler = (e) => {
      if (!e.target.closest("tr")) {
        setUserSelection(null);
      }
    };

    document.documentElement.addEventListener("click", clickHandler);
    return () => {
      document.documentElement.removeEventListener("click", clickHandler);
    };
  }, []);
  const handleAddPersonnel = (newPersonnel) => {
    setPersonnelList((prevList) => [...prevList, newPersonnel]);
  };

  return (
    <div className="h-screen w-full flex relative">
      {/* menu */}
      <div className="menu h-full w-[200px] bg-blue-500 hidden"></div>

      <div className="mainContainer w-full ">
        <div className="header h-16 w-full"></div>

        <div className=" gap-6 p-2">
          <div className="contentTable col-span-8 w-[752px] bg-[#D7D7D7] shadow-[0px_0px_15px_2px_#00000026] rounded-[20px] px-6 absolute top-[96px] left-[492px] gap-[8px]">
            {" "}
            <div className="py-3 top-0 ">
              <h2 className="w-[104px] h-[27px] top-[24px] left-[624px] gap-0 font-vazir text-[20px] font-medium leading-[27px] text-right absolute">
                لیست پرسنل
              </h2>{" "}
            </div>
            <div className="ml-[-24px]">
              <table
                className="min-w-full ml-[12px] bg-white text-[13px] mt-12 border-2 border-[#8BA38B] table-responsive overflow-x-auto"
                dir="rtl"
              >
                {" "}
                <thead>
                  <tr className="bg-[#263E26] text-white border-b border-[#8BA38B] w-full h-[56px] opacity-[1.4]">
                    <th className="px-2 sm:px-4 border-r border-gray-300 w-6 h-6"></th>
                    <th className="px-2 sm:px-4 border-r border-gray-300 w-[100px] sm:w-[144px] h-[21px]">
                      هویت
                    </th>
                    <th className="px-2 sm:px-4 border-r border-[#8BA38B]">
                      آخرین ورود
                    </th>
                    <th className="px-2 sm:px-4 border-r border-[#8BA38B]">
                      آخرین خروج
                    </th>
                    <th className="px-2 sm:px-4 border-r border-[#8BA38B]"></th>
                  </tr>
                </thead>
                <tbody>
                  {users?.map((item, index) => {
                    const specialIds = [2, 4, 6, 8, 10, 12, 14];
                    const isSpecialId = specialIds.includes(item.id);
                    return (
                      <tr
                        key={item.id}
                        onClick={() => clickRowHandler(item.id)}
                        className={`w-full h-[48px] gap-0 border-b-2 border-[#506d64] text-center cursor-pointer group hover-effect ${
                          userSelection?.id === item.id
                            ? "selected"
                            : isSpecialId
                            ? "bg-[#D7D7D7]"
                            : "bg-[#EBEBEB]"
                        }`}
                      >
                        <td className="border border-b border-[#506d64] px-2 sm:px-4 text-center w-[24px] h-[24px] relative">
                          {" "}
                          <div className="absolute top-[13px] left-[50%] transform -translate-x-1/2 border border-[#BDBDBD] bg-[#BDBDBD] rounded-full w-[24px] h-[24px] flex items-center justify-center">
                            {index + 1}
                          </div>
                        </td>
                        <td className="border border-b border-[#506d64] px-2 sm:px-4">
                          <div className="flex items-center space-x-2 gap-1.5">
                            <img
                              src={item?.images[0]?.image_URL}
                              alt="Profile"
                              className="rounded-full w-[32px] h-[32px]"
                            />
                            <span className="w-[66px] h-[24px] text-[12px] text-nowrap">
                              {item.name + " " + item.last_name}
                            </span>
                          </div>
                        </td>
                        <td className="border border-b border-[#506d64] px-4">
                          <span
                            className={`bg-[#C8DDC8] p-[7px_8px_8px_8px] rounded-[20px] group-hover:bg-white ${
                              userSelection?.id === item.id ? "!bg-white" : ""
                            }`}
                          >
                            <span className="mr-[13px]">1403/03/03</span>
                            <span>1403/03/05</span>
                            <Link to="#" className="cursor-pointer">
                              <FontAwesomeIcon
                                icon={faCalendarAlt}
                                className="text-gray-600 mr-[10px]"
                              />
                            </Link>
                          </span>
                        </td>
                        <td className="border border-b border-[#506d64] px-4">
                          <span
                            className={`bg-[#C8DDC8] p-[7px_8px_8px_8px] rounded-[20px] group-hover:bg-white ${
                              userSelection?.id === item.id ? "!bg-white" : ""
                            }`}
                          >
                            <span className="mr-[13px]">1403/03/03</span>
                            <span>1403/03/05</span>
                            <Link
                              to="/calendar"
                              className="cursor-pointer text-gray-600 mr-[10px] "
                            >
                              <FontAwesomeIcon icon={faCalendarAlt} />
                            </Link>
                          </span>
                        </td>
                        <td
                          className=" px-4 justify-center space-x-2 flex mt-[11px]"
                          dir="ltr"
                        >
                          <Link to="/delete" className="cursor-pointer ico">
                            <svg
                              fill="#c73838"
                              version="1.1"
                              id="Capa_1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              viewBox="0 0 489.74 489.74"
                              xmlSpace="preserve"
                              stroke="#c73838"
                              style={{ width: "18px" }}
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                <g>
                                  <g>
                                    <path d="M361.051,199.929H102.01V489.74h259.041V199.929L361.051,199.929z M170.818,450.163h-13.492V239.505h13.492V450.163z M238.276,450.163h-13.492V239.505h13.492V450.163z M305.734,450.163h-13.492V239.505h13.492V450.163z"></path>
                                    <path d="M387.73,145.959l-52.74-30.672l28.129-48.365L248.047,0l-28.127,48.362l-56.113-32.634l-26.678,45.875l223.922,130.231 L387.73,145.959z M257.808,36.891l68.421,39.792l-14.564,25.038L243.241,61.93L257.808,36.891z"></path>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </Link>
                          <button
                            onClick={openModalCamera}
                            className="cursor-pointer mr-[10px] z-2"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1.2rem"
                              height="1.2rem"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="#808080"
                                d="M3 4v12h18V4zm0-2h18a2 2 0 0 1 2 2v12c0 .53-.21 1.04-.59 1.41c-.37.38-.88.59-1.41.59h-7v2h2v2H8v-2h2v-2H3c-.53 0-1.04-.21-1.41-.59C1.21 17.04 1 16.53 1 16V4c0-1.11.89-2 2-2m7.84 6.93c.31-.3.73-.48 1.16-.48c.43.01.85.18 1.16.49c.3.3.48.72.48 1.15c0 .44-.18.85-.48 1.16c-.31.31-.73.48-1.16.48s-.85-.18-1.16-.48c-.3-.31-.48-.72-.48-1.16c0-.43.18-.85.48-1.16M10.07 12a2.68 2.68 0 0 0 3.86 0c.51-.5.8-1.19.8-1.91s-.29-1.42-.8-1.93s-1.21-.8-1.93-.8s-1.42.29-1.93.8s-.8 1.21-.8 1.93s.29 1.41.8 1.91M6 10.09A6.45 6.45 0 0 1 12 6c2.73 0 5.06 1.7 6 4.09a6.42 6.42 0 0 1-6 4.09c-2.73 0-5.06-1.68-6-4.09"
                              ></path>
                            </svg>
                          </button>
                          <button onClick={openModalAttendanceList}>
                            <Link to="#" className="cursor-pointer">
                              <svg
                                viewBox="-5.4 0 98.4 98.4"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#575757"
                                stroke="#575757"
                                style={{
                                  width: "18px",
                                  height: "18px",
                                  // marginLeft: "1px",
                                }} // Adjust the size and margin as needed
                              >
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g
                                  id="SVGRepo_tracerCarrier"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                  <g
                                    id="Group_4"
                                    data-name="Group 4"
                                    transform="translate(-822.7 -241.5)"
                                  >
                                    <path
                                      id="Path_52"
                                      data-name="Path 52"
                                      d="M899.4,254.3H833.6a8.92,8.92,0,0,0-8.9,8.9V329a8.92,8.92,0,0,0,8.9,8.9h65.8a8.92,8.92,0,0,0,8.9-8.9V263.2A8.92,8.92,0,0,0,899.4,254.3Z"
                                      fill="none"
                                      stroke="#575757"
                                      strokeLinecap="round"
                                      strokeMiterlimit="10"
                                      strokeWidth="4"
                                    ></path>
                                    <line
                                      id="Line_25"
                                      data-name="Line 25"
                                      x2="21.2"
                                      transform="translate(842.6 283.7)"
                                      fill="none"
                                      stroke="#575757"
                                      strokeLinecap="round"
                                      strokeMiterlimit="10"
                                      strokeWidth="4"
                                    ></line>
                                    <line
                                      id="Line_26"
                                      data-name="Line 26"
                                      x2="45.9"
                                      transform="translate(842.6 302)"
                                      fill="none"
                                      stroke="#575757"
                                      strokeLinecap="round"
                                      strokeMiterlimit="10"
                                      strokeWidth="4"
                                    ></line>
                                    <line
                                      id="Line_27"
                                      data-name="Line 27"
                                      y2="19.6"
                                      transform="translate(853.6 243.5)"
                                      fill="none"
                                      stroke="#575757"
                                      strokeLinecap="round"
                                      strokeMiterlimit="10"
                                      strokeWidth="4"
                                    ></line>
                                    <line
                                      id="Line_28"
                                      data-name="Line 28"
                                      y2="19.6"
                                      transform="translate(879.4 243.5)"
                                      fill="none"
                                      stroke="#575757"
                                      strokeLinecap="round"
                                      strokeMiterlimit="10"
                                      strokeWidth="4"
                                    ></line>
                                  </g>
                                </g>
                              </svg>
                            </Link>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <Pagination
              currentPage={1}
              onPageChange={setCurrentPage}
              users={users}
            />
          </div>

          <Aside
            openModal={openModal}
            userSelection={userSelection}
            openModalEdit={openModalEdit}
            onAddPersonnel={handleAddPersonnel}
            setUpdataTable= {setUpdataTable}
          />
        </div>
      </div>

      {/* Modal ها */}
      {isModalOpen && <Alert closeModal={closeModal} title={title} />}
      {isModalCamera && <CameraModal closeModalCamera={closeModalCamera} />}
      {isModalEdit && (
        <EditlModal closeModalEdit={closeModalEdit} openModal={openModal} />
      )}
      {isModalAttendanceList && (
        <AttendanceList closeModalAttendanceList={closeModalAttendanceList} />
      )}
    </div>
  );
};

export default Dashbord;
