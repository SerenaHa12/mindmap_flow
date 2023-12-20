import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: ['/','about','price', 'service', '/contact', '/register', 'login'],
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
 