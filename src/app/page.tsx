'use client'

import MatrixRain from './components/MatrixRain'

const Home = () => (
  <>
    <main
      className="relative z-10 flex items-center justify-center bg-secondary-green/80 bg-75% bg-bottom bg-no-repeat md:justify-normal md:bg-50% md:bg-right-bottom"
      style={{ backgroundImage: "url('assets/me.png')" }}
    >
      <div className="-mt-24 flex w-fit flex-col bg-black px-10 pb-10 pt-12 text-primary-green md:ml-20 md:mt-0 md:pt-24">
        <span className="inline-block w-fit">
          <h2 className="text-md typewriter">Hi, my name is</h2>
        </span>
        <span className="inline-block w-fit">
          <h1 className="typewriter mb-3 mt-6 text-4xl lg:text-7xl">
            Gabriel Bueno
          </h1>
        </span>
        <span className="inline-block w-fit">
          <h2 className="text-md typewriter">
            {"<>I'm a Fullstack Software Engineer</>"}
          </h2>
        </span>
      </div>
    </main>
    <MatrixRain opacity={60} />
  </>
)

export default Home

