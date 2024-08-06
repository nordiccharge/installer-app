'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useFormState } from 'react-dom';

export default function Home(): JSX.Element {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
      <>
        <div className="flex flex-col h-24 justify-center items-center space-y-2 text-center">
          <Image src="./logo.svg" alt="Logo" width={128} height={25} />
          <h1 className="text-xl text-gray-80">ChargePoint Install Tool<br/><span className="text-base font-light">for electricians</span></h1>
        </div>
        <hr className="h-1 w-full text-gray-300"/>
        <div className="flex flex-col h-full w-full items-center space-y-4">
          <h3 className="text-base w-full">To install the ChargePoint you need to follow the specific configuration of the device.</h3>
          <form className="flex flex-col w-full space-y-8" onSubmit={handleSubmit}>
            <div className="flex flex-col w-full space-y-2">
              <label htmlFor="serialNumber" className="text-sm">Serial number (S/N):</label>
              <input type="text" id="serialNumber" className="w-full border-2 border-solid border-gray-300 focus:border-green-700 rounded-md py-4 px-4 text-xl duration-200 focus:outline-none focus:ring-0" />
              <input type="submit" value="Start now" className="w-full bg-green-700 text-white rounded-md py-4 px-4 text-xl duration-200 cursor-pointer hover:bg-green-800 focus:outline-none focus:ring-0" />
            </div>
            <Link href="#" className="text-center text-sm font-light link">Where do I find the serialnumber?</Link>
          </form>
        </div>
        <hr className="h-1 w-full text-gray-300"/>
        <div className="flex flex-col w-full h-24 justify-center items-center space-y-2 text-center">
          <h2 className="text-base">Need support?</h2>
          <div className="flex flex-col w-full font-light text-sm space-y-1">
            <Link href="#" className="link">+45 51 77 92 80</Link>
            <Link href="mailto:service@nordiccharge.com" className="link">service@nordiccharge.com</Link>
          </div>
        </div>
      </>
  );
}
