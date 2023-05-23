import BackSvg from "../public/arrow-long-left.svg";
import Image from "next/image";
import Link from "next/link";

export default function JournalNav() {
  return (
    <div className="flex mb-10">
      <Link href="/user">
        <Image
          id="copyLink"
          src={BackSvg}
          alt="copy"
          width={16}
          height={16}
          className="w-8 h-8 cursor-pointer hover:bg-gray-1 rounded"
        />
      </Link>
    </div>
  );
}
