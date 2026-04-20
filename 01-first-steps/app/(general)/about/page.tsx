import { Metadata } from "next";

export const metadata:Metadata = {
 title: 'SEO Title',
 description: 'SEO Title',
 keywords: ['keyword1', 'keyword2', 'keyword3'],
};

export default function AboutPage(){
    return(
        <main className="flex flex-col items-center p-24">
            <span className="text-7xl">About Page</span>
        </main>
    )
}