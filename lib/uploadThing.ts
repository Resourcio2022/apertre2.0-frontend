
import { generateUploadButton } from "@uploadthing/react";
import type { OurFileRouter } from "@/app/api/uploadThing/core";

export const UploadButton = generateUploadButton<OurFileRouter>();
