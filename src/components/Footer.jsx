import React from "react";

function Footer() {
  return (
    <footer className="flex flex-row justify-between px-10 py-10 uppercase font-medium text-white rounded-t-[50px] bg-[#200000]">
      <div className="flex flex-col gap-2 justify-center items-start">
        <h3 className="font-bold font-main uppercase text-[20px]">
          Need help?
        </h3>
        <h3>Call costumer service:</h3>
        <div className="flex gap-2 w-full flex-col">
          <div className="flex justify-start items-center font-bold gap-3 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
                clipRule="evenodd"
              />
            </svg>
            +420 212 246 350
          </div>
          <p>Mon. - fri.: 8:30 - 18:00</p>
          <p>sat - sun: 9:00 - 17:00</p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-bold font-main uppercase text-[20px]">
          Any questions?
        </h3>
        <h3>Get in toutch:</h3>
        <div className="flex justify-start items-center font-bold gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-5"
          >
            <path
              fillRule="evenodd"
              d="M2.106 6.447A2 2 0 0 0 1 8.237V16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.236a2 2 0 0 0-1.106-1.789l-7-3.5a2 2 0 0 0-1.788 0l-7 3.5Zm1.48 4.007a.75.75 0 0 0-.671 1.342l5.855 2.928a2.75 2.75 0 0 0 2.46 0l5.852-2.927a.75.75 0 1 0-.67-1.341l-5.853 2.926a1.25 1.25 0 0 1-1.118 0l-5.856-2.928Z"
              clipRule="evenodd"
            />
          </svg>

          <h3>xp@store.com</h3>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-bold font-main uppercase text-[20px]">
          Don't miss any news!
        </h3>
        <form className="w-full flex flex-col gap-2">
          <div>
            <input
              className="px-4 w-full rounded-full"
              type="email"
              placeholder="Your email here..."
              required
            />
          </div>
          <div className="w-1/2 px-4 rounded-full bg-white text-black">
            <button className="uppercase" type="submit">
              Subscribe
            </button>
          </div>
        </form>
        <h3 className="text-[15px]">
          By clicking subscribe,
          <br /> I agree to the processing
          <br /> of my personal data.
        </h3>
      </div>
    </footer>
  );
}

export default Footer;
