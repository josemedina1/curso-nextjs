import { Metadata } from "next";

export const metadata:Metadata = {
 title: 'Precios',
 description: 'Pagina de precios',
 keywords: ['keyword1', 'keyword2', 'keyword3'],
};

export default function PricingPage(){
    return(
        <main className="flex flex-col items-center p-24">
            <span className="text-lg">hola mundo x2</span>
            <span className="text-7xl">Pricing Page</span>
        </main>
    )
}
