import { useContext } from "react";
import dummyData from "../../utils/dummyData";
import { TransactionContext } from "../context/Transaction";


const TransactionsCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount }) => {
  

  return (
    <div className="blue-glassmorphism m-4 flex flex-1
      2xl:min-w-[450px]
      2xl:max-w-[500px]
      sm:min-w-[270px]
      sm:max-w-[300px]
      min-w-full
      flex-col p-3 rounded-md hover:shadow-2xl overflow-hidden" 
    >
      <div className="flex flex-col items-center w-full mt-3 overflow-hidden">
        <div className="display-flex justify-start w-full mb-6 p-2">
          <a href={`https://ropsten.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer">
            <p className="text-gray-300  text-base"> <span className="text-white font-semibold text-2xl">From : </span> {addressFrom.slice(0,10)}...{addressFrom.slice(addressFrom.length-10)} </p>
          </a>
          <a href={`https://ropsten.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer">
            <p className="text-gray-400 text-base"><span className="text-white font-semibold text-2xl">To : </span> {addressTo.slice(0,10)}...{addressTo.slice(addressTo.length-10)} </p>
          </a>
          <p className="text-violet-500  text-2xl"><span className="text-white font-semibold text-xl">Amount : </span> {amount} ETH</p>
          {message && (
            <>
              <br /> 
              <p className="text-white text-base"><span className="text-white font-semibold text-2xl">Message : </span> {message}</p>
            </>
          )}
        </div>
        <img
          src={ 'https://copper2.wpengine.com/wp-content/uploads/2021/05/Ethernew-01.jpg'}
          alt="nature"
          className="w-full h-56 2xl:h-96 rounded-md shadow-lg object-cover hover:scale-110  hover:[ transition duration-500 ease-in-out ]"
        />
        <div className="blue-card-glassmorphism p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
          <p className="text-[#42d44e] font-bold">{timestamp}</p>
        </div>
      </div>
    </div>
  );
};

const Transactions = () => {
  const { currentAccount,transactions } = useContext(TransactionContext);
  return (
    <div className="flex flex-1 justify-center items-center w-full 2xl:px-20 gradient-bg-transactions">
      <div className="flex flex-col md:p-12 py-12 px-4 text-white font-semibold">
        {currentAccount ? (
          <h3 className=" text-[40px] text-center my-2 text-gradient">
            Latest Transactions
          </h3>
        ) : (
          <h3 className="text-gradient text-[40px] text-center my-2">
            Kindly  connect your account 
          </h3>
        )}
         <div className="flex flex-wrap justify-center items-center mt-10">
          {[...dummyData,...transactions].reverse().map((transaction, i) => (
           
            <TransactionsCard key={i} {...transaction} />
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
