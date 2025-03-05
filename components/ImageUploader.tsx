import { CldUploadWidget } from "next-cloudinary";
import { ImageUp } from "lucide-react";
import { toast } from "sonner";
import dynamic from "next/dynamic";

interface SimpleImageUploaderProps {
  folderPath: string | undefined;
  taskName: string;
  isSignedIn: boolean | undefined;
}

function SimpleImageUploader({
  isSignedIn,
  folderPath,
  taskName,
}: SimpleImageUploaderProps) {
  if (isSignedIn && folderPath) {
    return (
      <CldUploadWidget
        uploadPreset="apertre2.0"
        options={{
          sources: ["local", "url"],
          multiple: false,
          maxFiles: 1,
          resourceType: "image",
          folder: `/${folderPath}`,
          publicId: `${Date.now()}-${taskName}`,
          clientAllowedFormats: ["jpg", "jpeg", "png", "gif", "webp"],
          maxImageFileSize: 2621440, // 2.5MB
        }}
        onSuccess={(results, widget) => {
          console.log(folderPath);
          toast.success(`Task ${taskName} completed`);
          widget.close();
        }}
      >
        {({ open }) => {
          return (
            <button
              onClick={() => {
                open();
                console.log("open");
              }}
              className="bg-customYellow text-black font-medium px-3 py-1.5 rounded-md  min-w-[50%] flex items-center gap-2 justify-center"
            >
              <ImageUp className="w-5 h-5" />
              Submit
            </button>
          );
        }}
      </CldUploadWidget>
    );
  } else {
    return (
      <span className="bg-gray-500 text-white font-medium px-4 py-1.5 rounded-md border border-customYellow">
        Login first
      </span>
    );
  }
}

export default dynamic(() => Promise.resolve(SimpleImageUploader));
