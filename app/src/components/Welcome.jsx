import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { useState } from "react";
import Loader from "./Loader";

const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white font-semibold text-md";
const connectWallet = () => {};
const Input = ({ placeholder, type, name, value, handlechange }) => {
  return (
    <input
      type={type}
      id=""
      step="0.0001"
      value={value}
      placeholder={placeholder}
      onChange={() => {
        handlechange(e, name);
      }}
      className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism caret-violet-500 focus:caret-violet-500 focus:ring-violet-500"
    />
  );
};
const Welcome = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="flex w-full justify-center items-center ">
      <div className="flex mf:flex-row  flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Send Crypto gifts <br /> to your <span className="underline decoration-purple-500">lovers !</span>
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-10/12 w-11/12 text-base">
            Web3.0 is amazing. Buy and sell cryptocurrencies easily on GIFTY.
          </p>
          <button
            className=" flex  flex-row  justify-center items-center my-5 bg-[#4f36be] p-3  rounded-full cursor-pointer hover:bg-[#703ecc]"
            type="button"
            onClick={connectWallet}
          >
            <p className="text-white text-base font-md">Connect Wallet</p>
          </button>
          <div className="grid md:grid-cols-3 grid-cols-2 w-full mt-10 white-glassmorphism ">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              Reliabaility
            </div>
            <div className={` small-devices-right ${companyCommonStyles}`}>Security</div>
            <div className={`md:rounded-tr-2xl ${companyCommonStyles}`}>
              Scalability
            </div>
            <div className={`md:rounded-bl-2xl ${companyCommonStyles}`}>
              Ethereum
            </div>
            <div className={` small-devices  ${companyCommonStyles}`}>Blockchain</div>
            <div className={`rounded-br-2xl  ${companyCommonStyles}`}>
              Rapidity
            </div>
          </div>
        </div>

        <div className="flip-card flex flex-col flex-1 items-center justify-start mf:w-full mf:mt-0 mt-10 w-[90%] ml-5">
          <div className="flip-card-inner flex flex-col flex-1 items-center justify-start w-full  ">
            <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism flip-card-front ">
              <div className="flex justify-between flex-col w-full h-full">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center text-white">
                    <SiEthereum fontSize={21} />
                  </div>
                  <div className="w-10 h-10  flex justify-center items-center text-white">
                    <BsInfoCircle fontSize={18} className="text-white" />
                  </div>
                </div>
                <div className="">
                  <p className=" text-white font-light text-sm">
                    0x656293fb6b...21471fD60AB
                  </p>
                  <p className="text-white font-semibold text-lg mt-1">
                    Ethereum
                  </p>
                </div>
              </div>
            </div>
            <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card-back white-glassmorphism flip-card-back ">
              <div className="flex justify-between flex-col w-full h-full">
                <div className="flex-row -mx-[12px] mt-2">
                  <div className="w-full h-8  blue-card-glassmorphism " />
                </div>

                <div className="flex justify-center items-center">
                  <div className="  flex flex-col justify-center items-center text-white ">
                    <p className=" text-white  text-sm  font-thin">EXPIRES</p>
                    <p className="text-white   mt-[0.5]  font-semibold text-lg">
                      When Ether is down
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism relativate mt-[240px]  ">
            <Input
              placeholder="Withrawing To ... "
              type="text"
              value=""
              name="addressTo"
            />
            <Input
              placeholder="Amount (Ether ofc)"
              type="number"
              value=""
              name="amountEth"
            />
            <Input
              placeholder="Message (optional)"
              type="text"
              value=""
              name="messageTo"
            />
            <Input
              placeholder="Keywords (gift)"
              type="text"
              value=""
              name="keyWords"
            />
            <div className="w-full h-[1px] my-2 bg-gray-500 rounded-full"></div>
            {true ? (
              <Loader />
            ) : (
              <button className=" transfer-btn flex flex-row w-full  justify-center items-center my-5 white-glassmorphism p-3 rounded-full cursor-pointer font-md text-white text-lg">
                Transfer
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
