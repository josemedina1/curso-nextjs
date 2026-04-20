import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/dashboard/main");
  
  return (
    <>
      <h1 className="text-3xl font-bold">Welcome to My Dashboard</h1>
    </>
  );
}
