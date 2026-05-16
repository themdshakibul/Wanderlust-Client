import { NextResponse } from "next/server";
import { auth } from "./Components/lib/auth";
import { headers } from "next/headers";

// This function can be marked `async` if using `await` inside
export async function proxy(request) {
  const sesson = await auth.api.getSession({
    headers: await headers(),
  });

  if (!sesson) {
    return NextResponse.redirect(new URL("/auth/sigin", request.url));
  }
}

export const config = {
  matcher: ["/my-booking", "/add-destinations", "/destinations/:path"],
};
