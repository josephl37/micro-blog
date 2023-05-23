"use client";

import JournalHeader from "./components/journal_header";
import JournalNav from "./components/journal_nav";
import Entry from "./components/entry";
import TextInput from "./components/text_input";

export default function Home() {
  return (
    <div className="flex max-w-5xl mx-auto flex-col justify-center py-2">
      <div className="flex flex-col px-20 mt-4">
        <JournalNav />
        <JournalHeader />
        <TextInput />
        <Entry />
        <Entry />
      </div>
    </div>
  );
}
