const Home = () => (
  <main
    className="bg-secondary-green bg-bottom md:bg-right-bottom bg-no-repeat bg-50% flex items-center justify-center md:justify-normal"
    style={{ backgroundImage: "url('assets/me.png')" }}
  >
    <div className="text-primary-green bg-black w-fit px-10 pb-10 pt-12 -mt-24 md:mt-0 md:pt-24 md:ml-20 flex flex-col">
      <span className="w-fit inline-block">
        <h2 className="text-md typewriter">Hi, my name is</h2>
      </span>
      <span className="w-fit inline-block">
        <h1 className="text-4xl lg:text-7xl mt-6 mb-3 typewriter">
          Gabriel Bueno
        </h1>
      </span>
      <span className="w-fit inline-block">
        <h2 className="text-md typewriter">
          {"<>I'm a Fullstack Software Engineer</>"}
        </h2>
      </span>
    </div>
  </main>
)

export default Home

