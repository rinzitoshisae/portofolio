import Image from "next/image";
export default function Home() {
  return (
    <div className="font-sans scroll-smooth">

      {/* Navbar */}
      <nav className="bg-[#5e503f] flex justify-center items-center p-5 shadow-lg">
        <div className="bg-[#f4f1de] text-[#5e503f] flex flex-col md:flex-row sm:gap-6 text-sm font-light px-20 py-2 rounded-full items-center">
          {/* Foto Emote di pojok kanan atas */}
          <div className="absolute top-10 left-5 -mt-5">
            <Image
              src="/emot.png"
              alt="emote hiasan"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>

          <h1 className="text-2xl font-extrabold md:mt-0 mt-3">PORTOFOLIO</h1>
          <span className="md:mt-0 mt-2"> | </span>
          <a className="duration-300 ease-in-out rounded-lg px-3 py-3 hover:bg-[#5e503f] hover:text-[#f4f1de] hover:font-extrabold m-2" href="#home">Home</a>
          <a className="duration-300 ease-in-out rounded-lg px-3 py-3 hover:bg-[#5e503f] hover:text-[#f4f1de] hover:font-extrabold m-2" href="#about">About</a>
          <a className="duration-300 ease-in-out rounded-lg px-3 py-3 hover:bg-[#5e503f] hover:text-[#f4f1de] hover:font-extrabold m-2" href="#porto">My Portfolio</a>
          <a className="duration-300 ease-in-out rounded-lg px-3 py-3 hover:bg-[#5e503f] hover:text-[#f4f1de] hover:font-extrabold m-2" href="#contact">Contact Me</a>

          {/* Foto Emote di pojok kanan atas */}
          <div className="absolute top-10 right-5 -mt-5">
            <Image
              src="/emot.png"
              alt="emote hiasan"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between min-h-[480px] bg-gradient-to-r from-[#f2e9e4] via-[#c9ada7] to-[#9a8c98] p-8 sm:p-20 shadow-2xl">
        {/* Teks */}
        <div className="max-w-lg md:-mt-1 z-1 mt-7">
          <h1 className="text-4xl font-extrabold text-black drop-shadow-md">
            Halo, Nama aku Yahya Fahmi Abdillah
            <span className="text-[#5e503f] block">My Portfolio</span>
          </h1>
          <p className="mt-1 text-[#3d405b]">
            Designer pemula yang sedang belajar, Front End Developer dengan semangat untuk berkembang.
          </p>
          <div className="mt-5 sm:mt-6 flex gap-3 sm:gap-4">
            <button className="bg-[#5e503f] text-white px-5 sm:px-6 py-2 rounded-lg shadow-xl hover:bg-[#40342d] transition">
              Pelajari Lebih Lanjut
            </button>
            <button>
              <a className="flex bg-[#f4f1de] shadow-xl text-[#5e503f] px-10 sm:px-10 py-1 rounded-2xl hover:bg-[#5e503f] hover:text-[#f4f1de] transition duration-400 " href="#porto">Lihat CV</a>
            </button>
          </div>
        </div>

        {/* Foto */}
        <div className="relative w-56 h-72 sm:w-64 sm:h-80 mb-10 rounded-2xl group cursor-pointer border-green-900">
          <Image
            src="/gua.jpg"
            alt="Foto Yahya Fahmi"
            fill
            className="mt-3 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-x-[-1]"
          />
        </div>

        {/* Ornamen wave atas */}
        <div className="absolute z-0 top-0 left-0">
          <svg
            className="relative block w-full h-24 text-[#5e503f]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"
            ></path>
          </svg>
        </div>
        {/* Ornamen wave atas selesai */}


        {/* Ornamen wave bawah */}
        <div className="absolute bottom-0 left-0 rotate-180">
          <svg
            className="relative block w-full h-24 text-[#5e503f]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"
            ></path>
          </svg>
        </div>
      </section>
      {/* Ornamen wave  end bawah */}

      {/* PAGE 2*/}

      {/* konten kedua 3 box */}
      <section id="About" className="relative min-h-[500px] bg-gradient-to-r from-[#f2e9e4] via-[#c9ada7] to-[#9a8c98] p-8 sm:p-12 shadow-2xl">
        <div className="flex flex-wrap justify-center items-top justify-items-center space-x-3 -mt-6 relative z-10 gap-2 px-3">
          <div className=" bg-[#b3864ec1] duration-300 ease-in-out hover:bg-white hover:text-[#5e503f] rounded-lg px-3 py-3 hover:font-extrabold shadow-2xl"> ⚽ Suka Sepak Bola</div>
          <div className="bg-[#b3864ec1] duration-300 ease-in-out hover:bg-white hover:text-[#5e503f] rounded-lg px-3 py-3 hover:font-extrabold shadow-2xl"> 🎵 suka mendengarkan musik</div>
          <div className="bg-[#b3864ec1] duration-300 ease-in-out hover:bg-white hover:text-[#5e503f] rounded-lg px-3 py-3 hover:font-extrabold shadow-2xl"> 📺 suka menonton filemm</div>
        </div>

        {/* Wave atas section kedua */}
        <div className="absolute -top-0 left-0">
          <svg
            className="relative block w-full h-24 text-[#5e503f]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"
            ></path>
          </svg>
        </div>
        {/* Ornamen wave atas untuk page kedua selesai */}

        {/* Ornamen wave bawah untuk page 2 */}
        <div className="absolute bottom-0 left-0 rotate-180">
          <svg
            className="relative block w-full h-24 text-[#5e503f]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"
            ></path>
          </svg>
        </div>
        {/* Ornamen wave bawah untuk page 2 end*/}


        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left mt-15 gap-10 px-6 mb-">
          {/* Foto */}
          <div className="relative w-48 h-64 sm:w-64 sm:h-80 rounded-2xl overflow-hidden">
            <Image
              src="/guaa.png"
              alt="Foto Yahya Fahmi"
              fill
              className="object-cover rounded-3xl"
            />
          </div>

          {/* Teks */}
          <div className="max-w-lg mb-10">
            <h2 className="font-extrabold text-3xl text-black drop-shadow-2xl mb-3">
              Butuh member/konco gae minsocc?
            </h2>
            <p className="font-light text-black drop-shadow-lg">
              Kalo anda berminat atau mencari teman/member untuk main mini soccer, futsal,
              atau apapun itu, call aja gua di Sosmed berikut.
            </p>
            {/* Ikon Sosmed */}
            <div className="flex gap-5 mt-5">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/yahyafahmiabdillah"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform mb-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="text-pink-600"
                >
                  <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 2 .2 2.4.4.6.2 1 .5 1.5 1 .4.4.8.9 1 1.5.2.4.3 1.2.4 2.4.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 2-.4 2.4-.2.6-.5 1-1 1.5-.4.4-.9.8-1.5 1-.4.2-1.2.3-2.4.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-2-.2-2.4-.4-.6-.2-1-.5-1.5-1-.4-.4-.8-.9-1-1.5-.2-.4-.3-1.2-.4-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-2 .4-2.4.2-.6.5-1 1-1.5.4-.4.9-.8 1.5-1 .4-.2 1.2-.3 2.4-.4C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7.1.1 5.9.1 5 .2 4.2.5 3.4.8 2.7 1.2 2 1.9c-.7.7-1.1 1.4-1.4 2.2C.2 4.9.1 5.8.1 7c-.1 1.2-.1 1.6-.1 5s0 3.8.1 5c.1 1.2.2 2.1.5 2.9.3.8.7 1.5 1.4 2.2.7.7 1.4 1.1 2.2 1.4.8.3 1.7.4 2.9.5 1.2.1 1.6.1 5 .1s3.8 0 5-.1c1.2-.1 2.1-.2 2.9-.5.8-.3 1.5-.7 2.2-1.4.7-.7 1.1-1.4 1.4-2.2.3-.8.4-1.7.5-2.9.1-1.2.1-1.6.1-5s0-3.8-.1-5c-.1-1.2-.2-2.1-.5-2.9-.3-.8-.7-1.5-1.4-2.2-.7-.7-1.4-1.1-2.2-1.4-.8-.3-1.7-.4-2.9-.5C15.8.1 15.4 0 12 0z" />
                  <path d="M12 5.8A6.2 6.2 0 1 0 12 18.2 6.2 6.2 0 1 0 12 5.8zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                  <circle cx="18.4" cy="5.6" r="1.4" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/6283842815369"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform mb-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="text-green-600"
                >
                  <path d="M20.5 3.5A11.9 11.9 0 0 0 12 0 11.9 11.9 0 0 0 .1 12c0 2.1.5 4.1 1.6 5.9L0 24l6.3-1.6a11.8 11.8 0 0 0 5.7 1.4h.1c6.6 0 12-5.4 12-12 0-3.2-1.3-6.2-3.6-8.3zm-8.5 18.2c-1.8 0-3.5-.5-5-1.3l-.4-.2-3.7 1 1-3.6-.2-.4a9.6 9.6 0 0 1-1.5-5.1c0-5.4 4.4-9.8 9.8-9.8 2.6 0 5.1 1 7 2.9a9.8 9.8 0 0 1 2.9 7c0 5.4-4.4 9.8-9.9 9.8zm5.4-7.4c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6s.3-.3.4-.5c.2-.1.3-.3.4-.5.1-.2 0-.4 0-.6s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1-1.1 2.5s1.2 2.9 1.3 3.1c.2.2 2.3 3.5 5.6 4.9.8.3 1.4.6 1.9.8.8.2 1.5.2 2.1.1.6-.1 1.8-.7 2-1.3.3-.6.3-1.2.2-1.3-.1-.3-.3-.4-.6-.5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PAGE 3 */}
      <div className="relative h-full bg-gradient-to-r from-[#f2e9e4] via-[#c9ada7] to-[#9a8c98] sm:p-12">

        {/* Wave atas */}
        <div className="absolute top-0 left-0 w-full h-24 text-[#5e503f]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none" className="relative block w-full h-full">
            <path fill="currentColor" d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"></path>
          </svg>
        </div>

     {/* Content + Box Container */}
<div
  id="porto"
  className="flex flex-col md:flex-row items-start justify-between w-full h-full px-6 py-12 gap-10"
>
  {/* Left Content */}
  <div className="flex flex-col space-y-4 max-w-xl w-full">
    {/* Title */}
    <div className="flex items-center space-x-2 m-2">
      <div className="h-20 w-1 bg-black"></div>
      <div className="flex flex-col">
        <p className="text-sm font-light text-black transform -rotate-90 origin-left -translate-x-2 -translate-y-3">
          Balbalan</p>
        <h2 className="text-4xl font-extrabold text-black font-mono">
          My Stats
        </h2>
        <h3 className="text-2xl font-bold text-black font-mono">
          Menurut gua
        </h3>
      </div>
    </div>

    {/* Description */}
    <p className="text-gray-800 -mt-1 font-serif m-2">
      Arema adalah tim Sepak bola malang yang meraih banyak juara di masa nya
      salah satu nya pernah meraih Piala Presiden !!
    </p>

    {/* Stats */}
    <div className="space-y-4 w-full m-2">
      {[
        { label: "Passing", value: 88 },
        { label: "Shot", value: 90 },
        { label: "Skill", value: 100 },
        { label: "Respect", value: 100 },
      ].map((stat, idx) => (
        <div key={idx}>
          <div className="flex justify-between items-center mb-1">
            <span className="text-lg font-semibold text-black">
              {stat.label}
            </span>
            <span className="text-lg font-semibold text-black">
              {stat.value}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-[#b3864ec1] h-3 rounded-full"
              style={{ width: `${stat.value}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Foto-foto */}
  <div className="grid grid-cols-2 gap-2 w-full drop-shadow-amber-50 drop-shadow-2xl">
    {[
      { src: "/shot.png", alt: "Shot" },
      { src: "/skill.png", alt: "Skill" },
      { src: "/passing.png", alt: "Passing" },
      { src: "/respect.png", alt: "Respect" },
    ].map((item, idx) => (
      <div key={idx} className="flex justify-center">
        <Image
          src={item.src}
          alt={item.alt}
          width={200}
          height={200}
          className="object-contain hover:translate-x-5  ease-in-out transition duration-300"
        />
      </div>
    ))}
  </div>
</div>
        {/* Wave bawah */}
        <div className="absolute bottom-0 left-0 rotate-180 w-full text-[#5e503f]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none" className="relative block w-full h-full">
            <path fill="currentColor" d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}