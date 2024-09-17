"use client";

export default function Step ({ stepData, chargerData }: { stepData: any, chargerData: any }) {

    const metaData = JSON.parse(chargerData?.data);

    if (stepData?.type === "monta") {
        return (
            <div className="flex flex-col flex-1 max-h-full w-full space-y-2 pt-2">
                <h1 className="flex-none text-xl">{stepData?.title}</h1>
                <div className="flex flex-col flex-1 grow h-full w-full">
                    <iframe src={metaData?.monta_url} className="w-full h-full grow"></iframe>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col flex-1 max-h-full w-full space-y-2 pt-2">
            <h1 className="text-xl">{stepData?.title}</h1>
            <p className="text-md">{stepData?.text}</p>
            { stepData?.image ? <img src={stepData?.image} className="w-full h-auto object-contain rounded"/> : <></>}
        </div>
    ); 
}