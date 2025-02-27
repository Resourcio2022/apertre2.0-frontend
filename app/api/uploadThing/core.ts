
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

async function getGitHubUsername(req: Request): Promise<string | null> {
  const token = req.headers.get("authorization");
  return token ? token : null;
}

export const ourFileRouter = {
  userImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(async ({ req }) => {
      const githubUsername = await getGitHubUsername(req);
      if (!githubUsername) {
        throw new UploadThingError("You must be signed in to upload files");
      }
      return { username: githubUsername };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      const directory = metadata.username;
      console.log(`Upload complete for user "${directory}"`);
      console.log("File URL:", file.url);
      return { storedUnder: directory };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
