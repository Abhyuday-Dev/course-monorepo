import { useSession } from "next-auth/react";
import {getServerSession} from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";

export default function HomePage() {
  const session =useSession();
  console.log(session);

  return (
    <>
  
      <div style={{ padding: "2rem" }}>
        {session ? (
          <h1>Welcome</h1>
        ) : (
          <h1>Please sign in to continue.</h1>
        )}
      </div>
    </>
  );
}






// export async function getServerSideProps(context) {
//     const session = await getServerSession(context.req, context.res, authOptions)

//     if (!session) {
//         return {
//             redirect: {
//                 destination: '/',
                
//             },
//         }
//     }

//     return {
//         props: {
//             session,
//         },
//     }
// }
