import { handlers } from "@/app/auth" // Referring to the auth.ts we just created
export const { GET, POST } = handlers
// export async function GET(request: Request) {
//     const data = {id: 1, name: "john"}
//     return Response.json({data})
// }