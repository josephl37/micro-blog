import Link from "next/link";
import { roboto } from "../../layout";

export default function Grid() {
  return (
    <Link href="/user/journal_id">
      <div className="aspect-square bg-gray-1 hover:brightness-95 flex items-center">
        <div className="ml-8">
          <p className={`${roboto.className} text-gray-3 font-medium`}>
            Learning to code
          </p>
          <p className={`${roboto.className} text-gray-2 text-sm`}>
            15 entries
          </p>
        </div>
      </div>
    </Link>
  );
}
