import React, { useState } from "react";
import "./ProfileSettings.css";
import AdminInput from "../../Components/AdminInput/AdminInput.jsx";
import {
  useGetPractitionerQuery,
  useUpdatePasswordMutation,
  useUpdatePractitionerMutation,
  useUpdateProfileMutation,
} from "../../api/appApi.js";
import { ImagebaseUrl } from "../../Helper/constant.js";
import { errorNotify, successNotify } from "../../Helper/Toast.js";
import Loader from "../../Helper/Loader.js";
import AdminInputDes from "../../Components/AdminInputDes/AdminInputDes.jsx";
import TimeSelect from "../../Components/TimeSelect/TimeSelect.jsx";
const ProfileSettings = () => {
  const { isLoading, data } = useGetPractitionerQuery();

  console.log(data, "useGetPractitionerQuery");
  const [updateProfile] = useUpdateProfileMutation();
  const [updatePractitioner] = useUpdatePractitionerMutation();
  const [updatePassword] = useUpdatePasswordMutation();

  const [imagePreview, setImagePreview] = useState("");
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(false);
  const [practitionerloading, setPractitionerLoading] = useState(false);
  const [passwordLoading, setPasswordLoading] = useState(false);

  const [userData, setUserData] = useState({
    name: "",
    contact: "",
  });
  const [passwordData, setPasswordData] = useState({
    password: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [practitionerData, setPractitionerData] = useState({
    category: "",
    description: "",
    facebookUrl: "",
    instagramUrl: "",
    linkedInUrl: "",
  });
  const handleInputChange = (inputId, inputValue) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [inputId]: inputValue,
    }));
  };
  const handlePractitionerInputChange = (inputId, inputValue) => {
    setPractitionerData((prevUserData) => ({
      ...prevUserData,
      [inputId]: inputValue,
    }));
  };

  const handleChangeProfile = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      if (userData.name) {
        formData.append("name", userData.name);
      }
      if (userData.contact) {
        formData.append("phone", userData.contact);
      }
      if (image) {
        formData.append("userImages", image);
      }
      if (data?.data?.userId?.userImages[0]?.filename) {
        formData.append("deletedImages", [
          data?.data?.userId?.userImages[0]?.filename,
        ]);
      }
      const res = await updateProfile(formData);
      console.log(res);
      if (res.error) {
        errorNotify(res.error.data.error);
      } else {
        successNotify("Profile Updated");
        setUserData({
          name: "",
          contact: "",
        });
      }
    } catch (error) {
      console.log(error);
      errorNotify("Something went wrong");
    }
    setLoading(false);
  };
  const handleChangePractitioner = async (e) => {
    e.preventDefault();
    setPractitionerLoading(true);
    try {
      const formData = {
        category:
          practitionerData.category === ""
            ? data?.data?.category
            : practitionerData.category,
        description:
          practitionerData.description === ""
            ? data?.data?.description
            : practitionerData.description,
        facebookLink:
          practitionerData.facebookUrl === ""
            ? data?.data?.facebookLink
            : practitionerData.facebookUrl,
        instagramLink:
          practitionerData.instagramUrl === ""
            ? data?.data?.instagramLink
            : practitionerData.instagramUrl,
        linkedinLink:
          practitionerData.linkedInUrl === ""
            ? data?.data?.linkedinLink
            : practitionerData.linkedInUrl,
      };
      console.log(formData);

      const res = await updatePractitioner(formData);
      console.log(res);
      if (res.error) {
        errorNotify(res.error.data.error);
      } else {
        successNotify("Practitioner Changes");
        setPractitionerData({
          category: "",
          description: "",
          facebookUrl: "",
          instagramUrl: "",
          linkedInUr: "",
        });
      }
    } catch (error) {
      errorNotify("Something went wrong");
    }
    setPractitionerLoading(false);
  };
  const handleChangePassword = async (e) => {
    e.preventDefault();
    setPasswordLoading(true);
    console.log(passwordData);
    if (
      passwordData.confirmPassword === "" ||
      passwordData.newPassword === "" ||
      passwordData.password === ""
    ) {
      errorNotify("All Feilds are required");
    } else if (passwordData.newPassword !== passwordData.confirmPassword) {
      errorNotify(
        "Confirmation password does not match the entered password. "
      );
    } else {
      try {
        const formData = {
          currentPassword: passwordData.password,
          newPassword: passwordData.newPassword,
        };
        const res = await updatePassword(formData);
        console.log(res);
        if (res.error) {
          errorNotify(res.error.data.error);
        } else {
          successNotify("Password Changed");
          setPasswordData({
            password: "",
            newPassword: "",
            confirmPassword: "",
          });
        }
      } catch (error) {
        errorNotify("Something went wrong");
      }
      setPasswordLoading(false);
    }
  };

  const handlePasswordChange = (inputId, inputValue) => {
    setPasswordData((prevUserData) => ({
      ...prevUserData,
      [inputId]: inputValue,
    }));
  };

  const imageHandler = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="admin-container">
      {!isLoading && data?.success ? (
        <>
          <div className="admin-profile">
            <div>
              <h3>Update Profile</h3>
              <h3>-</h3>
            </div>
            <div className="admin-profile-section1">
              <label htmlFor="profile-image">
                <img
                  src={
                    imagePreview
                      ? imagePreview
                      : `${ImagebaseUrl}users/${data?.data?.userId?.userImages[0]?.filename}`
                  }
                  alt={data?.data?.userId?.userImages[0]?.filename}
                />
              </label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="21.71"
                viewBox="0 0 24 21.71"
              >
                <g id="camera_5382757" transform="translate(-3 -4.145)">
                  <path
                    id="Path_71910"
                    data-name="Path 71910"
                    d="M23.52,8.005H20.65l-1.71-3.03a1.635,1.635,0,0,0-1.42-.83h-5.4a1.626,1.626,0,0,0-1.48.96L9.34,8H6.48A3.483,3.483,0,0,0,3,11.485v10.9a3.465,3.465,0,0,0,3.47,3.47H23.52A3.483,3.483,0,0,0,27,22.375V11.485A3.483,3.483,0,0,0,23.52,8ZM6.6,12.525a1.21,1.21,0,0,1-1.21-1.19,1.174,1.174,0,0,1,1.16-1.19H6.6a1.19,1.19,0,1,1,0,2.38ZM15,23.005a6.585,6.585,0,1,1,6.58-6.59A6.589,6.589,0,0,1,15,23.005Z"
                    fill="#083239"
                  />
                  <circle
                    id="Ellipse_449"
                    data-name="Ellipse 449"
                    cx="2.75"
                    cy="2.75"
                    r="2.75"
                    transform="translate(12.25 13.665)"
                  />
                </g>
              </svg>
              <input
                onChange={imageHandler}
                id="profile-image"
                style={{ display: "none" }}
                type="file"
              />
              <label htmlFor="profile-image">
                <p>Upload New Picture</p>
              </label>
            </div>
            <div className="admin-profile-inputs">
              <AdminInput
                handleInputChange={handleInputChange}
                className="admin-profile-input"
                type={"text"}
                id={"name"}
                text={"Name"}
                value={data?.data?.userId?.name}
                display={userData.name}
              />
              <AdminInput
                handleInputChange={handleInputChange}
                className="admin-profile-input"
                type={"text"}
                id={"contact"}
                text={"Contact"}
                value={data?.data?.userId?.phone}
                display={userData.contact}
              />
            </div>
            <button
              onClick={handleChangeProfile}
              className="btn-primary btn-generate"
            >
              {loading ? <Loader /> : "SAVE"}
            </button>
          </div>
          <div className="admin-profile">
            <div>
              <h3>Update Practitioner</h3>
              <h3>-</h3>
            </div>
            <div className="admin-profile-inputs">
              <div className="admin-input-time">
                <h4>Category</h4>
                <div>
                  <TimeSelect
                    handleInputChange={handlePractitionerInputChange}
                    id={"category"}
                    isList={true}
                    text="Select Category"
                    value={data?.data?.category}
                  />
                </div>
              </div>

              <AdminInputDes
                handleInputChange={handlePractitionerInputChange}
                className="admin-profile-input"
                id={"description"}
                text={"Description"}
                value={data?.data?.description}
                display={practitionerData.description}
              />
              <AdminInput
                handleInputChange={handlePractitionerInputChange}
                type={"text"}
                id={"facebookUrl"}
                text={"Facebook Url"}
                value={data?.data?.facebookLink}
                display={practitionerData.facebookUrl}
              />
              <AdminInput
                handleInputChange={handlePractitionerInputChange}
                type={"text"}
                id={"instagramUrl"}
                text={"Instagram Url"}
                value={data?.data?.instagramLink}
                display={practitionerData.instagramUrl}
              />
              <AdminInput
                handleInputChange={handlePractitionerInputChange}
                type={"text"}
                id={"linkedInUrl"}
                text={"Linked In Url"}
                value={data?.data?.linkedinLink}
                display={practitionerData.linkedInUrl}
              />
            </div>
            <button
              onClick={handleChangePractitioner}
              className="btn-primary btn-generate"
            >
              {practitionerloading ? <Loader /> : "SAVE"}
            </button>
          </div>
          <div className="admin-password">
            <div>
              <h3>Change Password</h3>
              <h3>-</h3>
            </div>
            <form>
              <AdminInput
                handleInputChange={handlePasswordChange}
                className="admin-profile-input"
                type={"password"}
                id={"password"}
                text={"Current Password"}
                display={passwordData.password}
              />
              <AdminInput
                handleInputChange={handlePasswordChange}
                className="admin-profile-input"
                type={"password"}
                id={"newPassword"}
                text={"New Password"}
                display={passwordData.newPassword}
              />
              <AdminInput
                handleInputChange={handlePasswordChange}
                className="admin-profile-input"
                type={"password"}
                id={"confirmPassword"}
                text={"Confirm Password"}
                display={passwordData.confirmPassword}
              />

              <button
                onClick={handleChangePassword}
                className="btn-primary btn-generate"
              >
                {passwordLoading ? <Loader /> : "SAVE"}
              </button>
            </form>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ProfileSettings;
