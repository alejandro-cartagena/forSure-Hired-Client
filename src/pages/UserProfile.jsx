import React, { useContext, useEffect, useRef, useState } from "react";
import api from "../services/api";
import { AuthContext } from "../context/auth.context";

export default function UserProfile() {
  const { updateUserProfile, user, checkAuthentication } =
    useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({ ...user });
  const fileInputRef = useRef(null);

  const handleImgClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (e) => {
    //If not file Return
    const file = e.target.files[0];
    if (!file) return;

    //Create formData object with the file information
    const formData = new FormData();
    formData.append("imageUrl", file);
    //Call the route for upload file and update profilePic with response on the DB
    try {
      const response = await api.post("/image/upload", formData);
      const profilePic = response.data.imageUrl;
      updateUserProfile({ profilePic });
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserProfile(userInfo);
    checkAuthentication();
  };

  const onChangeUserInfo = (e) => {
    setUserInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (user) {
      setUserInfo({ ...user });
    }
  }, [user]);

  return user ? (
    <div className="bg-slate-200 w-full md:px-32 px-20">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-between items-center border border-solid rounded-md shadow-md gap-1 mb-10 mt-5"
      >
        <div
          htmlFor="account"
          className="h-[210px] flex flex-col items-center justify-self w-full text-center rounded-t-md bg-slate-900 text-slate-100 "
        >
          <h2 className="inset-0 m-auto text-5xl">Account Details</h2>
        </div>
        <div className="flex flex-col mb-2 gap-2 justify-between items-center mx-2 my-2 w-full">
          <img
            src={user.profilePic}
            onClick={handleImgClick}
            alt="profile picture"
            className="h-32 mx-4 -mt-20 mb-4 w-32 object-cover shadow-lg rounded-full cursor-pointer"
          />
          <input
            type="file"
            accept="image/png, image/jpeg, image/webp"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
        <div className="flex  items-center w-[30%]">
          <label htmlFor="username" className="text-left w-1/3">
            Username:
          </label>
          <input
            className="w-2/3 px-2 py-1 rounded-md text-left"
            type="text"
            name="username"
            placeholder="username"
            value={userInfo.username}
            onChange={onChangeUserInfo}
          />
        </div>
        <div className="flex  items-center w-[30%]">
          <label htmlFor="fullName" className="text-left w-1/3">
            Full Name:
          </label>
          <input
            className="w-2/3 px-2 py-1 rounded-md text-left"
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={userInfo.fullName}
            onChange={onChangeUserInfo}
          />
        </div>
        <div className="flex  items-center w-[30%]">
          <label
            htmlFor="address"
            placeholder="Address"
            className="text-left w-1/3"
          >
            Address:
          </label>
          <input
            className="w-2/3 px-2 py-1 rounded-md text-left"
            type="text"
            name="address"
            id="address"
            value={userInfo.address}
            onChange={onChangeUserInfo}
          />
        </div>
        <div className="flex  items-center w-[30%]">
          <label htmlFor="email" className="text-left w-1/3">
            Email:
          </label>
          <input
            className="w-2/3 px-2 py-1 rounded-md text-left"
            type="email"
            name="email"
            id="email"
            value={userInfo.email}
            onChange={onChangeUserInfo}
          />
        </div>
        <div className="my-8">
          <button
            type="submit"
            className="border border-solid bg-green-600 w-32 rounded-lg text-white font-semibold py-2"
          >
            Edit Profile
          </button>
        </div>
      </form>
    </div>
  ) : (
    <p>Loading User Info</p>
  );
}
