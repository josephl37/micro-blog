import { merriweather, roboto } from "../layout";
import Grid from "./components/grid";

export default function Home() {
  return (
    <div className="flex max-w-5xl mx-auto flex-col items-center justify-center py-2 h-screen">
      <div className="flex flex-1 w-full flex-col px-20 mt-4">
        <div>
          <p className={`${merriweather.className} text-xl`}>John Doe</p>
          <p className={`${roboto.className} text-sm text-gray-2`}>
            5 journals
          </p>
        </div>
        <div className="mt-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <Grid />
          <Grid />
          <Grid />
          <Grid />
          <Grid />
          <Grid />
        </div>
      </div>
    </div>
  );
}