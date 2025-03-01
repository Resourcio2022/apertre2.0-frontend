import { Role } from "@/app/(registration)/_utils/apiCalls";
import { ImageResponse } from "@vercel/og";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const name = searchParams.get("name") || "Contributor";
    const github = searchParams.get("github") || "github_user";
    const role = searchParams.get("role") as Role;

    let imageUrl = "";
    switch (role) {
      case "mentee":
        imageUrl = "https://hvqi4x3ywy.ufs.sh/f/zGAx50bBlDAfM9ZA3hXLa8AR5N4J0UF7dmZkXPspI16bixEf";
        break;
      case "project admin":
        imageUrl = "https://hvqi4x3ywy.ufs.sh/f/zGAx50bBlDAfgrrOaNgGh68fS5kJCqtuyDjn7Ne4KEW9QzPM";
        break;
      case "mentor":
        imageUrl = "https://hvqi4x3ywy.ufs.sh/f/zGAx50bBlDAfWXxpzo6emUV4zvRdMxST6BohCrXZJktDGON2";
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
            borderRadius: "24px",
            fontFamily: "Arial, sans-serif",
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <img
            src={imageUrl}
            width={1200}
            height={600}
            alt=""
            style={{ position: "relative", width: "100%", height: "100%" }}
          />
          <p
            style={{ fontSize: "30px", display: "flex", alignItems: "center", position: "absolute", left: "4rem", bottom: "8rem", zIndex: 10, color: "white" }}
          >
            {name.split(" ")[0]}
          </p>
          <div style={{ fontSize: "30px", display: "flex", alignItems: "center", position: "absolute", left: "10rem", bottom: "4rem", zIndex: 10, color: "yellow" }}>{github}</div>
        </div>
      ),
      { width: 1200, height: 600 }
    );
  }
  catch (error) {
    console.error("Error generating ticket:", error);
    return new Response("Failed to generate ticket", { status: 500 });
  }
}
