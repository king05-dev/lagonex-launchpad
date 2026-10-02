/** Resolves a file in `public/` against the deploy base ("/" here, "/developer/" on kapaldo.com). */
export const asset = (path: string) => import.meta.env.BASE_URL + path.replace(/^\//, "");
