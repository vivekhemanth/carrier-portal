import { NextResponse } from 'next/server';
import { hashPassword } from '@/auth';  // Import hashPassword
import { prisma } from '@/lib/prisma';  // Prisma client

export async function POST(request: Request) {
  const { email, password } = await request.json();

  // Check if the user already exists
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return NextResponse.json({ error: 'User already exists' }, { status: 400 });
  }

  // Hash the password and create the user
  const hashedPassword = await hashPassword(password);

  const newUser = await prisma.user.create({
    data: {
      email,
      passwordHash: hashedPassword,
      registrationComplete: false,  // Set to false by default
    },
  });

  return NextResponse.json({ message: 'User created', user: newUser });
}
