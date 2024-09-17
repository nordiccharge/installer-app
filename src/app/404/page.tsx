import Image from "next/image";
import logoImage from "../../assets/logo.svg";
import Link from "next/link";
import Back from "../Back";

export default async function ChargerPage({ params }: { params: { serialNumber: string } }) {
    
    return (
        <>
            <div className="flex flex-col h-24 justify-center items-center space-y-2 text-center">
                <Image
                    src={logoImage} alt="ChargePoint Install Tool"
                    className="h-8 w-full"
                />
                <h1 className="text-xl text-gray-80">ChargePoint Install Tool<br/><span className="text-base font-light">for electricians</span></h1>
            </div>
            <hr className="h-1 w-full text-gray-300"/>
            <div className="flex flex-col h-full w-full items-center space-y-8 text-center justify-center">
                <h2 className="text-xl font-medium w-full text-red-600">Chargepoint cannot be found!</h2>
                <Link href="#" className="text-center text-md link">Where do I find the serialnumber?</Link>
                <Link href="/" className="flex justify-center align-middle w-full bg-green-600 text-white rounded-md py-4 px-4 text-md duration-200 cursor-pointer hover:bg-green-800 focus:outline-none focus:ring-0 disabled:bg-gray-300 space-x-4"><Back color="stroke-white"/><span className="h-full flex justify-center items-center">Go back to the start page</span></Link>
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
};