// Importamos el componente navbar desde el index.ts de components;
import { Navbar } from '@/components';

export default function GeneralLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
        <Navbar/>
            <div>
                <h1>Hello Root Layout General</h1>
                {children}
            </div>
        </>
    );
}