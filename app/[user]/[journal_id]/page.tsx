"use client";

import TextareaAutosize from "@mui/base/TextareaAutosize";
import JournalHeader from "./components/journal_header";
import JournalNav from "./components/journal_nav";

export default function Home() {
  return (
    <div className="flex max-w-5xl mx-auto flex-col justify-center py-2">
      <div className="flex flex-1 w-full flex-col px-20 mt-10">
        <JournalNav />
        <JournalHeader />
        <div className="mt-10">
          <TextareaAutosize
            className="block
                resize-none
                p-2
                w-full
                bg-gray-1
                focus:border-gray-500 focus:bg-white focus:ring-0"
            placeholder="What's on your mind?"
          ></TextareaAutosize>
        </div>
      </div>
    </div>
  );
}
