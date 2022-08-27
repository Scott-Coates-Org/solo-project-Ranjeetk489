import { Stats } from "fs";
import { NextPage } from "next";
import { BuiltInProviderType } from "next-auth/providers";
import { ClientSafeProvider, LiteralUnion, signIn, signOut, useSession } from "next-auth/react";
import { getProviders } from "next-auth/react";
import Link from 'next/link';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Signin from "../../components/Signin";
import Signup from "../../components/Signup";



const Auth: NextPage = (props) => {
    const router = useRouter();
    const [providers, setProviders] = useState<Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null>();
    const { data, status } = useSession();
    const setupProviders = async () => {
        const fetchProviders = await getProviders();
        setProviders(fetchProviders)
    }

    useEffect(() => {
        setupProviders()
    }, [])
    console.log(data)

    if (status === "authenticated") {
        // console.log(router.push("/"))

        return (
            <>
                Logged In

                <button onClick={() => signOut()}>SignOut</button>
            </>
        )

    }

    return (
        <>

            {router.asPath == "/auth/signin" && <Signin signIn={signIn} providers={providers} />}
            {router.asPath === "/auth/signup" && <Signup />}
        </>
    );
};




// const Signin = () => {
//     const { data: session, status } = useSession();

//     console.log(session)

//     return (
//         <>
//             <a href="api/auth/signin" onClick={(e) => {
//                 e.preventDefault();
//                 signIn();
//             }}> Signin
//             </a>
//             <Link href="/auth">
//                 <button onClick={async () => {
//                     await signOut();
//                 }
//                 }>
//                     Signout
//                 </button>
//             </Link>
//         </>
//     );
// }


export default Auth;
