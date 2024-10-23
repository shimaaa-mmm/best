import React from "react";
import "./style.scss";

const Alert = ({ closeModal, title }) => {
  return (
    <div>
      <div className="alertModal z-20 fixed top-0 left-0 w-full h-full bg-black/30 backdrop-blur-[3px] flex items-center justify-center">
        <div className="alert flex-col relative max-w-xs overflow-hidden w-full rounded-md bg-white min-h-[10rem] flex items-center justify-center">
          <div className="relative">
            <div className="flex items-center justify-center w-16 h-16 rounded-full transition-transform duration-300 ease-in-out hover:rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 22c.8 0 1.6-.1 2.3-.3c-.4-.5-.8-1.1-1-1.8c-.4.1-.9.1-1.3.1c-4.4 0-8-3.6-8-8s3.6-8 8-8c.8 0 1.5.1 2.2.3l1.6-1.6C14.6 2.3 13.3 2 12 2C6.5 2 2 6.5 2 12s4.5 10 10 10M6.5 11.5l1.4-1.4l3.1 3.1l8.6-8.6L21 6L11 16zM19 14l-1.26 2.75L15 18l2.74 1.26L19 22l1.25-2.74L23 18l-2.75-1.25z"
                />
              </svg>
            </div>
          </div>
          <h1 className="mb-14">{title}</h1>
          <button
            onClick={(e) => closeModal(e)}
            className="btn-grad w-full py-2 text-white mb-0 transition-all duration-300 hover:shadow-xl"
          >
            بازگشت
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
