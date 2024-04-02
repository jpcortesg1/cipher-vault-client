export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (body?.expireAt === "") delete body.expireAt;
    const PATH = process.env.API_CREATE_API_KEY;
    if (!PATH) {
      throw new Error("Not found pathname");
    }
    const res = await fetch(PATH, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    console.log("🚀 ~ POST ~ data:", data)
    return Response.json({
      ...data
    });
  } catch (error: any) {
    console.error(error);
    return Response.json({
      error: "Internal server error",
      message: error.message,
      status: 500,
    });
  }
}
