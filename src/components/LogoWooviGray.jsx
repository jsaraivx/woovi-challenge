import Image from "next/image";

export default function LogoWooviGray({ size }) {
  return (
    <a href="https://woovi.com/">
      <div className="flex flex-row justify-center w-3/12 bg-white rounded-lg px-2 py-2 ">
        <Image
          className=" "
          src="../../../images/logo-woovi.svg"
          width={size}
          height={size}
          alt="Image."
        />
      </div>
    </a>
  );
}
