import Script from 'next/dist/client/script';
import styles from './navbar.module.css';
import { signIn, signOut, useSession } from "next-auth/react"
import Image from 'next/image';
export default function Navbar() {
    const { data: session }: any = useSession()

    return (
        <div className={styles.navbar}>
            {/* <div className={styles.navbar__brand}>
                MyApp
            </div> */}
            <div className={styles.navbar__brand} id="title"></div>
            <Script id="title-script" strategy="lazyOnload">
                {`document.getElementById('title').textContent = 'MyApp';`}
            </Script>

            <div className={styles.navbar__right}>
                {session ? (
                    <>
                        <div className={styles.navbar__user}>

                            Welcome, {session.user?.fullname || session.user?.name || "User"}
                            {session.user?.image && (
                                <Image
                                    src={session.user.image}
                                    alt={session.user.fullname}
                                    width={50}
                                    height={50}
                                    className={styles.navbar__user__image}
                                    referrerPolicy="no-referrer"
                                />
                            )}
                        </div>
                        <button
                            className={`${styles.navbar__button} ${styles["navbar__button--danger"]}`}
                            onClick={() => signOut({ callbackUrl: "/" })}
                        >
                            Sign Out
                        </button>
                    </>
                ) : (
                    <button
                        className={`${styles.navbar__button} ${styles["navbar__button--primary"]}`}
                        onClick={() => signIn()}
                    >
                        Sign In
                    </button>
                )}
            </div>
        </div>
    );
};