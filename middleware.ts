import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from "@/auth";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const session = await auth();

  if (session && (pathname === '/auth/signin' || pathname === '/auth/signup')) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  if (
    pathname.startsWith('/_next/') ||  
    pathname.startsWith('/favicon.ico') || 
    pathname.match(/\.(png|jpg|jpeg|svg|gif|webp)$/)
  ) {
    return NextResponse.next();
  }

  if (!session && (pathname !== '/auth/signin' && pathname !== '/auth/signup')) {
    return NextResponse.redirect(new URL('/auth/signin', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
