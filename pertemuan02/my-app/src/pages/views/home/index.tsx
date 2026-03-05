const HeroSection = () => {
    return (
        <section className="flex flex-col items-center justify-center min-h-[400px] bg-blue-600 text-white p-8 rounded-b-3xl shadow-2xl">
            <h1 className="text-5xl font-extrabold tracking-tight">Selamat Datang!</h1>
            <p className="mt-4 text-lg opacity-90 font-medium">Mahasiswa D4 Pengembangan Web</p>
            <button className="mt-8 px-10 py-3 bg-white text-blue-600 font-bold rounded-full hover:scale-105 transition-transform shadow-lg">
                Explore Now
            </button>
        </section>
    );
};

const MainSection = () => {
    return (
        <main className="container mx-auto p-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-xl hover:shadow-md transition">
                <h3 className="font-bold">Feature 1</h3>
                <p className="text-gray-600">Global CSS & Styling.</p>
            </div>
        </main>
    );
};

export default function HomeView() {
    return (
        <>
            <HeroSection />
            <MainSection />
        </>
    );
}