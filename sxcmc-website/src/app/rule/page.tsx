export default function Home() {
  return (
    <div>
      <div className="relative w-full h-[25vh]">
        <img
          src="images/banner.webp"
          alt="Banner"
          className="w-full h-full object-cover"
          decoding="auto"
        />
        <div className="flex absolute flex-col items-center justify-center text-center inset-0 text-white">
          <h1 className="mb-2 text-4xl font-bold">SxcMC サーバールール</h1>
        </div>
      </div>

      <div className="block mx-auto my-10 p-8 md:max-w-[85vw] bg-[var(--card-background)] rounded-lg shadow-lg shadow-black/30">
        <h2 className="mb-5 pb-2 text-3xl font-semibold border-[var(--accent)] border-b-2">禁止事項</h2>
        <ol className="list-disc ml-5">
          <li>マクロやX-rayなどのサバイバルを有利にするMod、リソースパック、チート等の使用</li>
          <li>他人を傷つける発言やスパム、過度な宣伝等の他人が不快になる行為</li>
          <li>サーバーへ負荷をかける行為</li>
          <li>その他運営が不適切と判断した行為</li>
        </ol>
        <br/>
        <p>
          ルール違反者には警告、キック、BANの措置を取ることがあります。
        </p>
      </div>
    </div>
  );
}