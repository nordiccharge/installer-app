'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import logoImage from "../assets/logo.svg";
import { useRouter } from 'next/navigation';
import Spinner from './Spinner';


export default function Home(): JSX.Element {
  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [serialNumber, setSerialNumber] = useState<string>("");
  const router = useRouter();

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setSerialNumber(e.target.value.toUpperCase());
    console.log(serialNumber);
  }

  function handleKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if(e.key === "Enter") {
      console.log(serialNumber);
      submitInput(e);
    }
  }

  function submitInput(e: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLInputElement> | React.MouseEvent) {
    e.preventDefault();
    setIsLoading(true);
    const inputSerialNumber = serialNumber;
    if(inputSerialNumber.trim() === "") {
      setIsLoading(false);
      alert("Please enter a serial number");
      return;
    }
    try {
      router.push(`/chargepoint/${inputSerialNumber}`);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  }



  return (
      <>
        <div className="flex flex-col h-24 justify-center items-center space-y-2 text-center">
          <Image
            src={logoImage} alt="ChargePoint Install Tool"
            className="h-8 w-full"
          />
          <h1 className="text-xl text-gray-80">Installationsvejledning<br/><span className="text-base font-light">for elektrikere</span></h1>
        </div>
        <hr className="h-1 w-full text-gray-300"/>
        {isLoading ?
              <Spinner /> :
              <div className="flex flex-col h-full w-full items-center space-y-4">
              <h3 className="text-base w-full">Tast serienummeret for laderen du skal installere.</h3>
              <form className="flex flex-col w-full space-y-8">
                <div className="flex flex-col w-full space-y-2">
                  <label htmlFor="serialNumber" className="text-sm">Serienummer (S/N):</label>
                  <input type="text" id="serialNumber" value={serialNumber} onInput={handleInput} onKeyUp={handleKey} className="w-full border-2 border-solid border-gray-300 focus:border-green-700 rounded-md py-4 px-4 text-xl duration-200 focus:outline-none focus:ring-0" />
                  <input type="submit" value="Start nu" onClick={submitInput} className="w-full bg-green-700 text-white rounded-md py-4 px-8 text-xl duration-200 cursor-pointer hover:bg-green-800 focus:outline-none focus:ring-0 disabled:bg-gray-300"/>
                </div>
                <Link href="#" className="text-center text-sm font-light link">Hvor finder jeg serienummeret?</Link>
              </form>
            </div>
        }
        <hr className="h-1 w-full text-gray-300"/>
        <div className="flex flex-col w-full h-24 justify-center items-center space-y-2 text-center">
          <h2 className="text-base">Brug for hjælp?</h2>
          <div className="flex flex-col w-full font-light text-sm space-y-1">
            <Link href="#" className="link">+45 31 43 59 50</Link>
            <Link href="mailto:service@nordiccharge.com" className="link">service@nordiccharge.com</Link>
          </div>
        </div>
      </>
  );
}
