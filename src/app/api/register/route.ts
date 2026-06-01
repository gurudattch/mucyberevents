import { NextRequest, NextResponse } from "next/server";

// Simple in-memory storage for registrations (in production, use a database)
const registrations: Array<{
  id: string;
  name: string;
  email: string;
  phone: string;
  college: string;
  event: string;
  registeredAt: string;
}> = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, college, event } = body;

    // Validate required fields
    if (!name || !email || !phone || !college) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Check for duplicate email
    const existingRegistration = registrations.find((r) => r.email === email);
    if (existingRegistration) {
      return NextResponse.json(
        { error: "This email is already registered" },
        { status: 409 }
      );
    }

    // Create registration
    const registration = {
      id: `CSW-${Date.now()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`,
      name,
      email,
      phone,
      college,
      event: event || "general",
      registeredAt: new Date().toISOString(),
    };

    registrations.push(registration);

    return NextResponse.json(
      {
        success: true,
        message: "Registration successful",
        registrationId: registration.id,
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    total: registrations.length,
    registrations: registrations.map(({ id, name, event, registeredAt }) => ({
      id,
      name,
      event,
      registeredAt,
    })),
  });
}
