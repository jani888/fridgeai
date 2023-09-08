import Image from 'next/image'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <h1 className="font-black text-7xl leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">Fridge
                AI</h1>
            <p className="text-white font-bold text-2xl">Revolutionizing Kitchen Intelligence</p>

            <div className="relative">
                <div className="absolute inset-[10px] bg-gradient-to-r from-pink-500 to-blue-500 blur-[24px] -z-10"></div>
                <div className="p-4 bg-black rounded-xl">
                    Take a photo of your fridge to continue.
                </div>
            </div>
        </main>
    )
}
