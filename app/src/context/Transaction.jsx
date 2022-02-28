import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../../utils/const";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );
  return transactionsContract;
};
export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [myBalance, setmyBalance] = useState("");
  const [formData, setFormData] = useState({
    addressTo: "",
    amount: "",
    keyword: "",
    message: "",
  });
  const [isLoading, setIsloading] = useState(false);
  const [transactionCount, settransactionCount] = useState(
    localStorage.getItem("transactionCount")
  );
  const [transactions, setTransactions] = useState([]);
  const handlechange = (e, name) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };
  const checkIfWalletIsConnect = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const provider = new ethers.providers.Web3Provider(ethereum);
      const accounts = await ethereum.request({ method: "eth_accounts" });
      const balance = await provider.getBalance(accounts[0]);
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        setmyBalance(
          Math.round(ethers.utils.formatEther(balance) * 10000) / 10000
        );
        console.log(ethers.utils.formatEther(balance));
        console.log(transactionCount);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const sendTransaction = async () => {
    try {
      if (ethereum) {
        const { addressTo, amount, keyword, message } = formData;
        const params = [
          {
            from: currentAccount,
            to: addressTo,
            gas: "0x76c0", // 30400
            value: ethers.utils.parseEther(amount)._hex, // 2441406250
          },
        ];
        console.log(formData);
        const ethercontract = createEthereumContract();
        const transferingEthers = await ethereum.request({
          method: "eth_sendTransaction",
          params: params,
        });
        const transactionHash = await ethercontract.transfer(
          addressTo,
          ethers.utils.parseEther(amount),
          message,
          currentAccount,
          keyword
        );
        setIsloading(true);
        console.log(`Loading - ${transactionHash.hash}`);
        await transactionHash.wait();
        setIsloading(false);
        console.log(`success - ${transactionHash.hash}`);
        const transactionCount = ethercontract.getTransactionCount();
        settransactionCount(parseInt(transactionCount));
      } else {
        console.log("No ethereum ");
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum ");
    }
  };
  const displayhistory = async () => {
    try {
      if (ethereum) {
        console.log("heelo");

        const transactionsContract = createEthereumContract();

        const availableTransactions =
          await transactionsContract.getAllTransactions();

        const structuredTransactions = availableTransactions.map(
          (transaction) => ({
            addressTo: transaction.receiver,
            addressFrom: transaction.sender,
            timestamp: new Date(
              transaction.timestamp.toNumber() * 1000
            ).toLocaleString(),
            message: transaction.message,
            keyword: transaction.keyword,
            amount: parseInt(transaction.amount._hex) / 10 ** 18,
          })
        );

        console.log(structuredTransactions);

        setTransactions(structuredTransactions);
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);
      console.log(currentAccount);
      window.location.reload();
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  const disconnectWallet = async () => {
    try {
      const accounts = await ethereum.request({
        method: "wallet_requestPermissions",
        params: [
          {
            eth_accounts: {},
          },
        ],
      });
      await ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount("");
      console.log("trying to disconnect");
    } catch (error) {
      console.log(error);

      throw new Error("disconnecting problem occured");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnect();
    displayhistory();
  }, [transactionCount]);

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        myBalance,
        formData,
        sendTransaction,
        handlechange,
        isLoading,
        disconnectWallet,
        displayhistory,
        transactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
