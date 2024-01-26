import React, { useState } from "react";
import AdminInput from "../AdminInput/AdminInput";
import AdminInputDes from "../AdminInputDes/AdminInputDes";
import AdminInputFile from "../AdminInputFile/AdminInputFile";
import ServiceSchedule from "../ServiceSchedule/ServiceSchedule.jsx";
import "./AddNewService.css";
import { errorNotify, successNotify } from "../../Helper/Toast";
import { useCreateServiceMutation } from "../../api/appApi";
import Loader from "../../Helper/Loader";
const AddNewService = () => {
  const [userData, setUserData] = useState({
    description: "",
    servicePrice: "",
    serviceName: "",
    duration: "",
  });
  const [scheduleData, setScheduleData] = useState([
    {
      startTime: "",
      endTime: "",
      day: "",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [createService] = useCreateServiceMutation();
  const [imagePreview, setImagePreview] = useState("");
  const [image, setImage] = useState();

  const handleInputChange = (inputId, inputValue) => {
    setUserData((prevUserData) => ({
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
  const handleAddNewService = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      if (userData.serviceName) {
        formData.append("name", userData.serviceName);
      }
      if (userData.description) {
        formData.append("description", userData.description);
      }
      if (userData.servicePrice) {
        formData.append("price", userData.servicePrice);
      }
      if (image) {
        formData.append("serviceImages", image);
      }
      if (checkEmptyShedule()) {
        errorNotify("Schedule timings are not completed");
        return;
      }
      const newSchedule = {
        duration: userData.duration,
        schedule: [...scheduleData],
      };
      formData.append("newSchedule", JSON.stringify(newSchedule));

      const res = await createService(formData);
      if (res.error) {
        errorNotify(res.error.data.error);
      } else {
        successNotify("Service Added");
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
  const checkEmptyShedule = () => {
    for (let i = 0; i < scheduleData.length; i++) {
      const { startTime, endTime, day } = scheduleData[i];

      if (!startTime || !endTime || !day) {
        return true;
      }
    }
  };
  const handleSheduleChange = (value, index, name) => {
    setScheduleData((prevScheduleData) => {
      const updatedScheduleData = [...prevScheduleData];
      updatedScheduleData[index] = {
        ...updatedScheduleData[index],
        [name]: value,
      };
      console.log(updatedScheduleData, "updatedScheduleData");
      return updatedScheduleData;
    });
  };
  const handleDeleteSchedule = (index) => {
    console.log(index);
    setScheduleData((prev) => {
      const newSchedule = [...prev.slice(0, index), ...prev.slice(index + 1)];
      return newSchedule;
    });
  };

  const handleAddSchedule = () => {
    setScheduleData((prev) => {
      const newSchedule = [...prev];
      newSchedule.push({
        startTime: "",
        endTime: "",
        day: "Monday",
      });
      return newSchedule;
    });
  };

  return (
    <div className="admin-profile">
      <div>
        <h3>Add New Services</h3>
        <h3>-</h3>
      </div>
      <div className="add-service-settings">
        <AdminInput
          handleInputChange={handleInputChange}
          type={"text"}
          id={"serviceName"}
          text={"Service Name"}
          display={userData.serviceName}
        />
        <AdminInputDes
          handleInputChange={handleInputChange}
          text={"Service Description"}
          id={"description"}
          display={userData.description}
        />
        <AdminInputFile
          handleInputChange={imageHandler}
          text={"Change Picture"}
          image={imagePreview}
        />
        <AdminInput
          handleInputChange={handleInputChange}
          text={"Service Price"}
          id={"servicePrice"}
          type={"number"}
          display={userData.servicePrice}
        />
        <AdminInput
          handleInputChange={handleInputChange}
          text={"Duration in Minutes"}
          id={"duration"}
          type={"number"}
          display={userData.duration}
        />
        <ServiceSchedule
          schedule={scheduleData}
          handleSheduleChange={handleSheduleChange}
          handleAddSchedule={handleAddSchedule}
          handleDeleteSchedule={handleDeleteSchedule}
        />
      </div>
      <div className="product-setting-btn">
        <button onClick={handleAddNewService}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <path
              id="Icon_awesome-save"
              data-name="Icon awesome-save"
              d="M19.372,6.622,15.628,2.878a2.143,2.143,0,0,0-1.515-.628H2.143A2.143,2.143,0,0,0,0,4.393V20.107A2.143,2.143,0,0,0,2.143,22.25H17.857A2.143,2.143,0,0,0,20,20.107V8.138a2.143,2.143,0,0,0-.628-1.515ZM10,19.393a2.857,2.857,0,1,1,2.857-2.857A2.857,2.857,0,0,1,10,19.393ZM14.286,5.8v4.487a.536.536,0,0,1-.536.536H3.393a.536.536,0,0,1-.536-.536V5.643a.536.536,0,0,1,.536-.536h10.2a.536.536,0,0,1,.379.157l.155.155a.536.536,0,0,1,.157.379Z"
              transform="translate(0 -2.25)"
              fill="#fff"
            />
          </svg>
          <p>{loading ? <Loader /> : "SAVE CHANGES"}</p>
        </button>
      </div>
    </div>
  );
};

export default AddNewService;
