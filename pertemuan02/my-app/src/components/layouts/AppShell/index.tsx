import React from "react";
import Navbar from "../navbar";

type AppShellProps = {
  children: React.ReactNode;
};

export default function AppShell(props: AppShellProps)  {
  const { children } = props;

  return (
    <main>
     <Navbar/>
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
