import Image from "next/image";
import LinkSvg from "../public/link.svg";
import TrashSvg from "../public/trash.svg";

export default function JournalHeader() {
  const copyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    // TODO: notify user link has been copied
  };

  const deleteJournal = () => {
    console.log("delete");
    // TODO: code to delete journal
  };

  return (
    <div className="flex justify-between">
      <div>
        <p className="text-xl font-medium">Learning to code</p>
        <p className="text-gray-2 text-sm">15 entries</p>
      </div>
      <div className="flex items-center">
        <Image
          id="copyLink"
          src={LinkSvg}
          alt="copy"
          width={16}
          height={16}
          className="w-8 h-8 mx-2 cursor-pointer hover:bg-gray-1 p-1 rounded"
          onClick={copyLink}
        />
        <Image
          src={TrashSvg}
          alt="trash"
          width={16}
          height={16}
          className="w-8 h-8 mx-2 cursor-pointer hover:bg-gray-1 p-1 rounded"
          onClick={deleteJournal}
        />
      </div>
    </div>
  );
}
