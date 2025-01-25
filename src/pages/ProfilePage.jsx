import React, { useState } from "react";
import NavSec from "../components/NavSec";
import Footer from "../components/Footer";
import ProgressBar from "../components/ProgressBar";
import users from "../data/users.json";
import { Link, useParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";

const ProfilePage = () => {
  const { idProfile } = useParams();
  const user = users.find((user) => user.id === Number(idProfile));

  const [formData, setFormData] = useState(
    user
      ? {
          UserName: user.UserName,
          Name: user.Name,
          Surname: user.Surname,
          Email: user.Email,
          Phone: user.Phone,
          Address: user.Address,
          City: user.City,
          Zip: user.Zip,
          State: user.State,
        }
      : {}
  );
  const [openUpdate, setOpenUpdate] = useState(false);

  if (!user) {
    return <ErrorPage />;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    const index = users.findIndex((u) => u.id === user.id);
    if (index > -1) {
      users[index] = { ...user, ...formData };
      console.log("Aktualizovaná data:", users[index]);
    }
    setOpenUpdate(false);
  };

  const firstLetter = formData.UserName.charAt(0);
  const { Level, Progress, Role } = user;

  return (
    <div className="flex flex-col bg-[#400000] gap-2">
      <NavSec />
      <div className="min-h-[80vh] p-10 bg-[#400000]">
        <div className="flex flex-row">
          <div className="w-full flex items-center justify-center">
            <div className="relative flex flex-col justify-center items-center h-[70vh] w-2/3 bg-[#800000] p-8 rounded-[50px]">
              <div className="absolute border-4 border-[#FF0000] z-10 top-0 size-[150px] bg-white rounded-full -translate-y-1/2">
                <div className="size-full z-100 flex justify-center items-center text-[80px] uppercase font-main">
                  {firstLetter}
                </div>
              </div>
              <div className="absolute bg-[#c5a3a3] blur-xl size-11/12"></div>
              <div className="z-10 size-4/5 flex flex-col justify-between items-center gap-2 text-[20px] font-main">
                <h1 className="uppercase text-[50px]">{formData.UserName}</h1>
                <div className="w-full flex flex-col items-center">
                  <div>Level: {Level}</div>
                  <ProgressBar width={Progress} />
                </div>
                <div className="flex w-full gap-5 justify-between items-center">
                  <div className="w-1/2 flex justify-between items-center">
                    <div>
                      <div>Name:</div>
                      <div>Surname:</div>
                      <div>E-mail:</div>
                      <div>Phone:</div>
                    </div>
                    <div>
                      <div>{formData.Name}</div>
                      <div>{formData.Surname}</div>
                      <div>{formData.Email}</div>
                      <div>{formData.Phone}</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div>Address:</div>
                      <div>City:</div>
                      <div>State:</div>
                      <div>Zip:</div>
                    </div>
                  </div>
                  <div>
                    <div>{formData.Address}</div>
                    <div>{formData.City}</div>
                    <div>{formData.State}</div>
                    <div>{formData.Zip}</div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setOpenUpdate(true);
                  }}
                  className="bg-[#FF0000] px-5 py-2 rounded-full uppercase font-main text-[20px]"
                >
                  update
                </button>
                {Role === "admin" && (
                  <Link to="/edit" className="bg-[#FF0000] p-4 rounded-full">
                    Admin Panel
                  </Link>
                )}
                {Role === "editor" && (
                  <Link to="/edit" className="bg-[#FF0000]  p-4 rounded-full">
                    Editor Tools
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {openUpdate && (
        <>
          <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-fit px-[100px] py-[30px] bg-[#400000] p-4 rounded-[40px]">
            <div className="uppercase font-main text-[40px] text-center mb-4 text-white">
              Update Profile
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4">
                <h2 className="font-main text-[20px] uppercase text-white">
                  Profile data:
                </h2>
                <input
                  type="text"
                  name="UserName"
                  placeholder="Username"
                  value={formData.UserName}
                  onChange={handleChange}
                  className="bg-white border-2 border-[#FF0000] rounded-full px-4 text-[20px]"
                />
                <input
                  type="text"
                  name="Name"
                  placeholder="Name"
                  value={formData.Name}
                  onChange={handleChange}
                  className="bg-white border-2 border-[#FF0000] rounded-full px-4 text-[20px]"
                />
                <input
                  type="text"
                  name="Surname"
                  placeholder="Surname"
                  value={formData.Surname}
                  onChange={handleChange}
                  className="bg-white border-2 border-[#FF0000] rounded-full px-4 text-[20px]"
                />
                <input
                  type="email"
                  name="Email"
                  placeholder="E-mail"
                  value={formData.Email}
                  onChange={handleChange}
                  className="bg-white border-2 border-[#FF0000] rounded-full px-4 text-[20px]"
                />
                <input
                  type="text"
                  name="Phone"
                  placeholder="Phone"
                  value={formData.Phone}
                  onChange={handleChange}
                  className="bg-white border-2 border-[#FF0000] rounded-full px-4 text-[20px]"
                />
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="font-main text-[20px] uppercase text-white">
                  Address info:
                </h2>
                <input
                  type="text"
                  name="Address"
                  placeholder="Address"
                  value={formData.Address}
                  onChange={handleChange}
                  className="bg-white border-2 border-[#FF0000] rounded-full px-4 text-[20px]"
                />
                <input
                  type="text"
                  name="City"
                  placeholder="City"
                  value={formData.City}
                  onChange={handleChange}
                  className="bg-white border-2 border-[#FF0000] rounded-full px-4 text-[20px]"
                />
                <input
                  type="text"
                  name="State"
                  placeholder="State"
                  value={formData.State}
                  onChange={handleChange}
                  className="bg-white border-2 border-[#FF0000] rounded-full px-4 text-[20px]"
                />
                <input
                  type="text"
                  name="Zip"
                  placeholder="Zip"
                  value={formData.Zip}
                  onChange={handleChange}
                  className="bg-white border-2 border-[#FF0000] rounded-full px-4 text-[20px]"
                />
              </div>
              <button
                onClick={handleSave}
                className="bg-[#FF0000] px-4 py-2 rounded-full uppercase font-main text-white"
              >
                Save Changes
              </button>
            </div>
          </div>
          <div
            onClick={() => {
              setOpenUpdate(false);
            }}
            className="bg-black/50 absolute inset-0 size-full z-[10] cursor-pointer"
          />
        </>
      )}
    </div>
  );
};

export default ProfilePage;
