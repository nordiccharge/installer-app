"use client";
import { useState } from "react";
import Step from "./Step";
import { completeGuideHandler } from "./completeGuide";

export default function Guide ({ chargerData, guideData }: { chargerData: any, guideData: any }) {

    const steps = JSON.parse(guideData?.data);

    const [step, setStep] = useState(0);

    const metaData = JSON.parse(chargerData?.data);

    const handleCompleteAction = () => {
        const confirmation = confirm("Er du sikker på at du har fulgt alle trin i vejledningen og laderen er installeret korrekt?");
        if (confirmation) {
            const response = completeGuideHandler(chargerData?.serial_number);
            if (!response) {
                return alert("Der skete en fejl. Prøv igen.");
            }
        }
        setStep(step + 1);
    }

    const completeMontaHandler = () => {
        const confirmation = confirm("Er laderen integreret med Monta? Du kan ikke gå til næste trin, før Monta er integreret.");
        if (confirmation) {
            setStep(step + 1)
        }
    }
    if (chargerData.status ===  "active") {
        return (
            <div className="w-full h-full flex flex-col flex-1 justify-center items-center text-center">
                <p>Laderen er allerede blevet installeret.</p>
            </div>
        );
    }

    return (
        <>
            <div className="w-full h-full flex flex-col flex-1 justify-start">
                <hr className="h-1 w-full text-gray-300 pb-4"/>
                <Step stepData={steps[step]} chargerData={chargerData} />
            </div>
            <div className="flex flex-col space-y-6 w-full justify-between h-22 pb-2">
            <hr className="h-1 w-full text-gray-300"/>
            <div className="flex flex-row justify-between space-x-8">
                { steps[step]?.backwards === false
                    ? <div className="w-1/4"></div>
                    : <button onClick={() => {setStep(step - 1)}} className="bg-gray-200 rounded-md font-light py-4 px-8 duration-200 cursor-pointer hover:bg-gray-300 focus:outline-none focus:ring-0 disabled:bg-gray-300 w-1/2">Gå tilbage</button>}
                { 
                    steps[step]?.action === "step" && steps[step]?.type === "content" ?
                        steps[step]?.forwards === false ? <div className="w-1/4"></div>
                        : <button onClick={() => {setStep(step + 1)}} className="bg-blue-700 text-white font-medium rounded-md py-4 px-8 duration-200 cursor-pointer hover:bg-blue-800 focus:outline-none focus:ring-0 disabled:bg-gray-300 w-1/2">Fortsæt</button>
                    : steps[step]?.action === "step" && steps[step]?.type === "monta" ?
                        <button onClick={completeMontaHandler} className="bg-blue-700 text-white font-medium rounded-md py-4 px-8 duration-200 cursor-pointer hover:bg-blue-800 focus:outline-none focus:ring-0 disabled:bg-gray-300 w-1/2">Fuldført</button>
                    : steps[step]?.action === "complete" ?
                        <button onClick={handleCompleteAction} className="bg-green-700 text-white font-medium rounded-md py-4 px-8 duration-200 cursor-pointer hover:bg-green-800 focus:outline-none focus:ring-0 disabled:bg-gray-300 w-1/2">Færdig</button>
                    : <></>
                }
            </div>
        </div>
        </>
    );
}