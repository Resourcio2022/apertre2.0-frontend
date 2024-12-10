import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/evangelist(.*)", "/communitypartner(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect(); 
  }
});

export const config = {
  matcher: ["/evangelist", "/communitypartner"],
};
