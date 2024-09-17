"use client";
import Back from "@/app/Back";
import { useRouter } from "next/navigation";

export default function ExitButton(): JSX.Element {
    const router = useRouter();

    const abortProcess = () => {
        const confirmation = confirm("Are you sure you want to abort the process?");
        if (confirmation) {
            router.push("/");
        }
      };

    return (
        <button onClick={abortProcess}><Back /></button>
    );
}