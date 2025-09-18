import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "prospectus.pdf");
    const file = await fs.readFile(filePath);
    return new NextResponse(file, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Icon_Investor_Prospectus.pdf"',
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (e) {
    return new NextResponse("File not found", { status: 404 });
  }
}
