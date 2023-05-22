import { merriweather } from "./layout";

export default function Landing() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <p className={`${merriweather.className} text-4xl`}>micro-blog.</p>
        <div className="flex justify-center mt-10">
          <button className="bg-black text-white py-2 px-6 hover:bg-gray-700">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}
