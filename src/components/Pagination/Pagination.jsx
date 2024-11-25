import React from "react";
import { useNavigate } from "react-router-dom";

const Pagination = ({ currentPage, onPageChange }) => {
  const totalPages = 11;
  const navigate = useNavigate();

  const handlePageChange = async (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
      navigate(`/page/${page}`);

      try {
        // ارسال درخواست GET به سرور
        const response = await axios.get(`https://example.com/api/page/${page}`);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  return (
    <div className="flex justify-center items-center mt-1">
      <div className="flex justify-center items-center p-4" dir="ltr">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="text-gray-500 mx-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
          >
            <path
              fill="#004040"
              d="m7 12l5-5v3h4v4h-4v3zm14 4.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18s-.41-.06-.57-.18l-7.9-4.44A.99.99 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18s.41-.06.57-.18l7.9-4.44c.32.17.53.5.53.88zM12 4.15L5 8.09v7.82l7 3.94l7-3.94V8.09z"
            ></path>
          </svg>
        </button>
        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1;
          return (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`mx-1 px-3 py-1 rounded-md ${
                currentPage === pageNumber
                  ? "bg-green-900 text-white"
                  : "text-gray-500"
              }`}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="text-gray-500 mx-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
          >
            <path
              fill="#004040"
              d="m17 12l-5 5v-3H8v-4h4V7zm4 4.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18s-.41-.06-.57-.18l-7.9-4.44A.99.99 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18s.41-.06.57-.18l7.9-4.44c.32.17.53.5.53.88zM12 4.15L5 8.09v7.82l7 3.94l7-3.94V8.09z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
