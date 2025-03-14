import { Role } from "@/app/(registration)/_utils/apiCalls";
import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const name = searchParams.get("name") || "Contributor";
    const github = searchParams.get("github") || "github_user";
    const role = searchParams.get("role") as Role;

    let imageUrl = "";
    switch (role) {
      case "mentee":
        imageUrl = "https://res.cloudinary.com/di6gjfyoo/image/upload/v1741991632/mentee_p6vpdx.jpg";
        break;
      case "project admin":
        imageUrl = "https://res.cloudinary.com/di6gjfyoo/image/upload/v1741991633/project-admin_mfvu4t.jpg";
        break;
      case "mentor":
        imageUrl = "https://res.cloudinary.com/di6gjfyoo/image/upload/v1741991632/mentor_f6buex.jpg";
        break;
      default:
        return new Response("Invalid role", { status: 400 });
    }

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "32px",
            fontFamily: poppins.className,
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <img
            src={imageUrl}
            width={900}
            height={491}
            alt=""
            style={{ position: "relative", width: "100%", height: "100%" }}
          />
          <p
            style={{ fontSize: "3rem", display: "flex", alignItems: "center", position: "absolute", left: "3.8rem", bottom: "6rem", zIndex: "10", color: "white" }}
          >
            {name.split(" ")[0]}
          </p>
          <p style={{ fontSize: "2rem", display: "flex", alignItems: "center", position: "absolute", left: "7.5rem", bottom: "2.1rem", zIndex: "10", color: "yellow" }}>{github}</p>
        </div>
      ),
      { width: 900, height: 491 }
    );
  }
  catch (error) {
    console.error("Error generating ticket:", error);
    return new Response("Failed to generate ticket", { status: 500 });
  }
}
