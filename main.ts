import Actor from "./actor.ts";

Deno.serve(async (req) => {
  const url = new URL(req.url);
  const path = url.pathname;

  /* Handle trailing slashes */
  if (path.at(-1) !== "/") {
    return Response.redirect(
      `${url.protocol}${url.host}${url.pathname}/`,
    );
  }

  /* Profile  */
  const profilePattern = new URLPattern({ pathname: "/profile/:actor/" });
  if (profilePattern.test(url)) {
    const actorName = profilePattern.exec(url)?.pathname.groups.actor!;

    const actor = new Actor(actorName);

    await actor.generateActor();
    return new Response(actor.showPage(), headers);
  }

  /* Redirect to homepage */
  return Response.redirect(
    `${url.protocol}${url.host}/profile/did:plc:sxouh4kxso3dufvnafa2zggn/`,
  );
});

const headers: ResponseInit = {
  "headers": {
    "Content-Type": "text/html;charset=utf-8",
  },
};
