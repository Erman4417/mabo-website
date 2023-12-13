import React from "react";
import { useState } from "react";
import { auth,app } from "../../firebase";
import { updateCurrentUser,updateEmail,updatePassword,updatePhoneNumber , updateProfile } from "firebase/auth";

const Profile = () => {
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");


  return (
    <div className="max-w-container mx-auto px-4">
      <div className="w-full lgl:w-[500px] h-full flex flex-col justify-center items-center px-5 py-5 mx-auto">
        <form className="w-full lgl:w-[500px] flex items-center justify-center my-6">
          <div className="px-6 py-4 w-full h-[96%] flex flex-col justify-center overflow-y-scroll scrollbar-thin scrollbar-thumb-primeColor">
            <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-2xl mdl:text-3xl mb-4">
              Жаңалау
            </h1>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-.5">
                <p className="font-titleFont text-base font-semibold text-gray-600">
                  Толық есім
                </p>
                <input
                  // onChange={handleName}
                  // value={clientName}
                  className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                  type="text"
                  // placeholder="Ерман Қошқарбаев"
                />
              </div>
              <div className="flex flex-col gap-.5">
                <p className="font-titleFont text-base font-semibold text-gray-600">
                  Емаил
                </p>
                <input
                  // onChange={handleEmail}
                  // value={email}
                  className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                  type="email"
                  // placeholder="erman@gmail.com"
                />
              </div>

              <div className="flex flex-col gap-.5">
                <p className="font-titleFont text-base font-semibold text-gray-600">
                  Нөмер
                </p>
                <input
                  className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                  type="text"
                  // placeholder="87476400538"
                />
              </div>

              <div className="flex flex-col gap-.5">
                <p className="font-titleFont text-base font-semibold text-gray-600">
                  Кілт сөз
                </p>
                <input
                  // onChange={handlePassword}
                  // value={password}
                  className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                  type="text"
                  // placeholder=""
                />
              </div>

              <button
                className={
                  "bg-primeColor hover:bg-black hover:text-white cursor-pointer w-full text-gray-200 text-base font-medium h-10 rounded-md hover:text-white duration-300"
                }
              >
                Регистрация
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
