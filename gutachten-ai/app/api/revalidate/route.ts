import { revalidatePath } from "next/cache";
import { parseBody } from "next-sanity/webhook";
import { NextResponse, type NextRequest } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type SanityWebhookPayload = {
  _type: string;
  slug?: { current?: string } | string;
};

function pathsForDocType(body: SanityWebhookPayload): string[] {
  const slug =
    typeof body.slug === "string"
      ? body.slug
      : body.slug?.current;

  switch (body._type) {
    case "homePage":
      return ["/"];
    case "post":
      return slug ? ["/blog", `/blog/${slug}`] : ["/blog"];
    case "ablaufPage":
      return ["/ablauf"];
    case "kontaktPage":
      return ["/kontakt"];
    case "funktionenPage":
      return ["/funktionen"];
    case "impressum":
      return ["/impressum"];
    case "datenschutz":
      return ["/datenschutz"];
    case "navigation":
      return ["/", "/blog", "/ablauf", "/kontakt", "/funktionen"];
    default:
      return [];
  }
}

export async function POST(req: NextRequest) {
  try {
    const secret = process.env.SANITY_REVALIDATE_SECRET;
    if (!secret) {
      return NextResponse.json(
        { ok: false, message: "Missing SANITY_REVALIDATE_SECRET" },
        { status: 500 },
      );
    }

    const { isValidSignature, body } = await parseBody<SanityWebhookPayload>(
      req,
      secret,
    );

    if (!isValidSignature) {
      return NextResponse.json(
        { ok: false, message: "Invalid signature" },
        { status: 401 },
      );
    }

    if (!body?._type) {
      return NextResponse.json(
        { ok: false, message: "Missing _type in payload" },
        { status: 400 },
      );
    }

    const paths = pathsForDocType(body);
    for (const p of paths) {
      revalidatePath(p);
    }

    return NextResponse.json({ ok: true, revalidated: paths, type: body._type });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ ok: false, message }, { status: 500 });
  }
}
