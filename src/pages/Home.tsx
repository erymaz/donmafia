function Home() {
  return (
    <div className="relative page home">
      <div className="grid grid-cols-3 md:gap-8">
        <div className="relative">
          <div className="mx-0 px-4 md:px-8">
            <img src="./img/home3.png" alt="home3" className="w-full" />
          </div>
        </div>
        <div className="col-span-2 flex flex-col px-4 md:px-8">
          <div className="h-16 flex flex-wrap items-center justify-end gap-4 py-3">
            <div className="cursor-pointer h-full">
              <img src="./img/hd1.png" alt="hd1" className="h-full" />
            </div>
            <div className="cursor-pointer h-full">
              <img src="./img/hd2.png" alt="hd2" className="h-full" />
            </div>
            <div className="cursor-pointer h-full py-2">
              <img src="./img/hd3.png" alt="hd3" className="h-full" />
            </div>
            <div className="cursor-pointer h-full py-2">
              <img src="./img/hd4.png" alt="hd4" className="h-full" />
            </div>
            <button className="rounded-full py-1 px-8 text-sm font-bold bg-white ">
              DAPP
            </button>
          </div>
          <div className="hidden md:inline-flex mt-10 lg:mt-12 xl:mt-0 h-16 xl:h-20 flex justify-end">
            <img src="./img/1.png" alt="text1" className="h-full" />
          </div>
          <div className="mt-8 hidden xl:block">
            <img src="./img/home2.png" alt="home2" className="" />
          </div>
        </div>
      </div>
      <div className="mt-16 md:mt-12 lg:mt-20 xl:hidden">
        <img src="./img/home2.png" alt="home2" className="" />
      </div>
      <div className="absolute bottom-0 left-0 w-3/4 md:w-1/2">
        <img src="./img/home1.png" alt="home1" className="w-full" />
      </div>
      <div>
        <div className="absolute bottom-48 md:bottom-32 lg:bottom-40 xl:bottom-2 w-full flex justify-center px-8 md:px-28">
          <div className="text-center">
            <h2 className="text-white text-lg md:text-xl lg:text-2xl">
              JOIN The Don Mafia. VOTE on the Targets. REAP the Benefits.
            </h2>
            <p className="text-white mt-6 text-sm md:text-lg">
              The Don Mafia. Redefining the NFT landscape.
            </p>
            <p className="text-white text-sm md:text-lg">
              Art by Mike S Miller, Technology by soakverse Labs
            </p>
            <img src="./img/2.png" alt="text2" className="h-12 md:h-16 xl:h-28 mt-4" />
          </div>
        </div>
        <div className="absolute bottom-2 right-8 h-20">
          <img src="./img/home4.png" alt="home4" className="h-full" />
        </div>
      </div>
    </div>
  );
}

export default Home;
