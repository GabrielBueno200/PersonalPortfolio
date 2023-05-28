const Home = () => (
  <main
    className="bg-secondary-green bg-right-bottom bg-no-repeat bg-50% flex items-center"
    style={{ backgroundImage: "url('assets/me.png')" }}
  >
    <div className="text-primary-green bg-black w-fit px-10 pb-10 pt-24 ml-20 flex flex-col">
      <span className="w-fit inline-block">
        <h2 className="text-xl typewriter">Hi, my name is</h2>
      </span>
      <span className="w-fit inline-block">
        <h1 className="text-7xl mt-6 mb-3 typewriter">Gabriel Bueno</h1>
      </span>
      <span className="w-fit inline-block">
        <h2 className="text-xl typewriter">
          {"<>I'm a Fullstack Software Engineer</>"}
        </h2>
      </span>
    </div>
  </main>
)

export default Home

