import React from "react";
import Navbar from "../navbar";
import { useRouter } from "next/router";


const disableNavbar = ['/auth/login', '/auth/register', '/404']

type AppShellProps = {
  children: React.ReactNode;
};

export default function AppShell(props: AppShellProps)  {
  const { children } = props;
  const {pathname} = useRouter();
  
  return (
    <main>
     {!disableNavbar.includes(pathname) && <Navbar/>}
     {children}
     <div>
        <footer style={{
          textAlign: 'center', 
        padding: '20px', 
        borderTop: '1px solid #ddd',
        marginTop: '20px'
        }}>
          <p>Yo its me Fandy Wahyu Hanzura</p>
        </footer>
     </div>
    </main>
  );
};
