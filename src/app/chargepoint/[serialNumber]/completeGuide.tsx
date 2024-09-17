"use server"

export async function completeGuideHandler(serialNumber: string): Promise<[Boolean]> {
    console.log("serialNumber", serialNumber);
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/complete/${serialNumber}`, {method: "GET"});
    console.log("response", response);
    if (!response.ok) {
        return [false];
    }

    return [true];
}