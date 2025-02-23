import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { auth, signOut, signIn } from '../auth'

const Navbar = async ()  =>  {
    const session = await auth();
  return (
    <div className ="px-5 py-3 bg-white shadow-sm font-work-sans">
        <nav className ="flex items-center justify-between">
            <Link href="/">
                <Image src="/logo.jpg" alt="logo" width={50} height={0} />
            </Link>

            <div className="flex items-center gap-5 text-black">
                {session && session.user ? (
                    <>
                        <Link href="/startup/create">
                            <span>Create</span>
                        </Link>

                        <form action={async () => {
                            "use server";
                            await signOut({redirectTo:"/"});
                        }}>
                            <span>Logout</span>
                        </form>

                        <Link href={'/user/${session?.id}'}>
                            <span>{session?.user?.name}</span>
                        </Link>
                    </>
                    ) : (
                        <form action={async () => {
                            "use server";
                            await signIn('github')
                        }}>
                            <button type = "submit">
                                Login
                            </button>
                        </form>
                    )}
            </div>

        </nav>
    </div>
  )
}

export default Navbar