import PlusSvg from "../public/plus.svg";
import Image from "next/image";

export default function AddGrid() {
  return (
    <div className="aspect-square bg-transparent border-2 border-gray-2 border-dashed flex items-center justify-center">
      <Image src={PlusSvg} alt="plus" className="w-8 h-8 items-center" />
    </div>
  );
}
