import { Metadata } from "next";

export const metadata:Metadata = {
 title: 'Contacto',
 description: 'Pagina de contacto',
 keywords: ['keyword1', 'keyword2', 'keyword3'],
};

export default function ContactPage(){
    return(
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}