export default function SiteMap() {
  return (
    <main className="flex flex-col justify-center mb-16">
      <article>
        {/* Banner */}
        <div className="bg-gh-green flex items-center justify-center mb-12 flex-col">
          <div className="container lg:max-w-screen-lg 2xl:max-w-screen-xl 3xl:max-w-screen-2xl mx-auto h-[380px] flex flex-col justify-center p-8">
            <h1>Site Map</h1>
          </div>
        </div>
        {/* Content */}
        <div className="flex flex-col gap-4 justify-center container lg:max-w-screen-lg 2xl:max-w-screen-xl 3xl:max-w-screen-2xl mx-auto">
          <p className="block text-left">
            Ultima actualizare: 25-Aug-2024
          </p>


        </div>
      </article>
    </main>
  );
}
