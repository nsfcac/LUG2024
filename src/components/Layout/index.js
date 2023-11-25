import * as React from 'react';
import Header from "../Header";

export default function Layout ({children}) {
 return <React.Fragment>
     <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Header/>
     {children}
    </main>
 </React.Fragment>
}