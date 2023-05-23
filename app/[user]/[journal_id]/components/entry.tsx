export default function Entry() {
  return (
    <div className="mt-10 hover:bg-gray-1 p-2">
      <div className="flex justify-between">
        <p className="text-gray-2">Entry 1</p>
        <p className="text-gray-2">October 10th, 2023</p>
      </div>
      <div className="mt-5">
        <p>
          Fixed some bugs today ranging from design to edge cases like not
          having a pfp or twitter. Overall pretty happy with what we’re able to
          build. Think the biggest learnings was collaborating on git. Working
          off a new branch, making a PR and avoiding merge conflicts was
          definitely a process.
        </p>
      </div>
    </div>
  );
}
