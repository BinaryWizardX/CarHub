import Image from "next/image";
import { Hero,CarCatelogue,CarList } from "@/Components";



export default function Home({searchParams}:any) {

  

  
  
  return (
    <main className="overflow-hidden ">
      <Hero />

      <CarCatelogue />

      <CarList  />

      
    </main>
  );
}
