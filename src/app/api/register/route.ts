import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

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
    const existingRegistration = await db.registration.findUnique({
      where: { email },
    });
    if (existingRegistration) {
      return NextResponse.json(
        { error: "This email is already registered" },
        { status: 409 }
      );
    }

    // Create registration
    const registration = await db.registration.create({
      data: {
        name,
        email,
        phone,
        college,
        eventType: event || "general",
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Registration successful",
        registrationId: registration.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const registrations = await db.registration.findMany({
      select: {
        id: true,
        name: true,
        eventType: true,
        registeredAt: true,
      },
      orderBy: { registeredAt: "desc" },
    });

    return NextResponse.json({
      total: registrations.length,
      registrations,
    });
  } catch (error) {
    console.error("Fetch registrations error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
