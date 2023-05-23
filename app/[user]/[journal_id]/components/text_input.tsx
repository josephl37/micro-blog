import TextareaAutosize from "@mui/base/TextareaAutosize";

export default function TextInput() {
  return (
    <TextareaAutosize
      className="block
                resize-none
                p-2
                w-full
                bg-gray-1
              focus:bg-whit
              placeholder:text-gray-2
              "
      placeholder="What's on your mind?"
    ></TextareaAutosize>
  );
}
