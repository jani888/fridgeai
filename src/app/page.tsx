import Image from 'next/image'
import ImageUpload from "@/components/upload/ImageUpload";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <h1 className="font-black text-7xl leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">Fridge
                AI</h1>
            <p className="text-white font-bold text-2xl">Revolutionizing Kitchen Intelligence</p>

            <div className="relative mt-8 max-w-lg w-full">
                <div className="absolute inset-[3px] bg-gradient-to-r from-pink-500 to-blue-500 blur-[24px] -z-10"></div>
                <div className="p-4 bg-black rounded-xl">
                    <ImageUpload />
                </div>
            </div>
        </main>
    )
}
