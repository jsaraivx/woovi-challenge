import Image from "next/image";

export default function LogoWoovi({size}){
    return(
        <div className="flex flex-row justify-center p-5 py-6 ">
        <Image 
            
            src="images/logo-woovi.svg"
            width={size}
            height={size}
            alt='Image.'
        />
        </div>
    );

}