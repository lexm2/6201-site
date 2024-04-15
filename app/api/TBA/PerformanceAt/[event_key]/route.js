// export async function GET(Request) {}
// export async function HEAD(Request) {}
// export async function POST(Request) {}
// export async function PUT(Request) {}
// export async function DELETE(Request) {}
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const event_key = params.event_key;
  const res = await fetch(
    `https://www.thebluealliance.com/api/v3/team/frc6201/event/${event_key}/status`,
    {
      headers: {
        "X-TBA-Auth-Key": process.env.TBA_KEY,
      },
    }
  );

  const data = await res.json();
  return NextResponse.json(data);
}
