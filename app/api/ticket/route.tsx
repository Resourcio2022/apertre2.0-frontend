import { ImageResponse } from "next/og";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const hasTitle = searchParams.has('name');
    const hasGithub = searchParams.has('github');

    if (!hasTitle || !hasGithub) {
      return new NextResponse("Missing required parameters", {
        status: 400
      });
    }

    const name = searchParams.get('name');
    const username = searchParams.get('github');

    const title = name === '' ? 'Guest' : name;
    const github = username === '' ? '@github' : username;

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "black",
            position: "relative",
          }}
        >
          {/* Image container */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              position: "relative",
            }}
          >
            {/* Semi-transparent overlay for better text visibility */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.4)",
              }}
            />

            <img
              src="https://images.unsplash.com/photo-1701772165288-39c9ef3775c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "absolute",
              }}
            />

            <div tw="flex flex-col items-center justify-center relative">
              <span tw="text-5xl font-bold py-12">
                {title}
              </span>
              <span tw="text-3xl font-medium">
                {github}
              </span>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  }
  catch (error: any) {
    console.error(error.message);

    return new NextResponse("Failed to generate the image", {
      status: 500
    });
  }
}