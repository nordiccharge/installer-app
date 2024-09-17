import Spinner from "@/app/Spinner";
import Guide from "./Guide";
import { Suspense } from "react";
import { unstable_noStore } from "next/cache";
import { redirect } from "next/navigation";
import ExitButton from "@/app/ExitButton";

export async function getChargePoint(serialNumber: string): Promise<[Boolean, any]> {
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/chargers/${serialNumber}`, {method: "GET"});
    if (!response.ok) {
        return [true, null];
    } else {
        const decodedJSON = await response.json();
        return [false, decodedJSON.data];
    }
}

export async function getGuideData(id: string): Promise<[Boolean, any | null]> {
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/guides/${id}`, {method: "GET"});

    if (!response.ok) {
        return [true, null];
    } else {
        const decodedJSON = await response.json();
        return [false, decodedJSON.data];
    }
}

export default async function ChargerPage({ params }: { params: { serialNumber: string } }) {
    unstable_noStore();
    const serialNumber: string = params.serialNumber;
    const [chargerError, chargerData] = await getChargePoint(serialNumber);

    const [guideError, guideData] = await getGuideData(chargerData?.guide);
    
    if (chargerError) {
        redirect("/404");
    }

    const metaData = JSON.parse(chargerData?.data);

    return (
                <div className="flex flex-col flex-1 w-full space-y-8 justify-between">
                    <div className="flex flex-row h-20 justify-between items-center space-y-2 text-center">
                        <ExitButton />
                        <div className="flex flex-row h-full w-auto items-start space-x-4">
                            <div className="flex flex-col justify-between text-right py-1">
                                <h2 className="text-md pb-2 text-green-800 italic"><Suspense fallback={<span className="text-gray-600 animate-pulse">xxxxx</span>}>{chargerData.serial_number}</Suspense></h2>
                                <h1 className="text-md"><Suspense fallback={<span className="text-gray-600 animate-pulse">xxxxx</span>}>{metaData.name}</Suspense></h1>
                            </div>
                            <Suspense fallback={<div className="w-20 h-20 bg-gray-600 animate-pulse"></div>}><img src={metaData?.image} alt="Charger" className="w-20 h-20 object-contain"/></Suspense>
                        </div>
                    </div>
                    <Suspense fallback={<Spinner />}>
                        { guideError ? <h1 className="text-red-500">Error loading guide</h1> : <Guide chargerData={chargerData} guideData={guideData} /> }
                    </Suspense>
                </div>
    );
};