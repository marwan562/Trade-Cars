import { authMiddleware } from "@clerk/nextjs";
 

export default authMiddleware({
  publicRoutes:['/' , '/Product-detils/(.*)']
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};