const repositoriesToFilter = [
  "ToDoTaskApp",
  "StudentClassManager",
  "Spotify-Tailwind-Clone",
  "StudentClassManager",
  "ToDoTaskApp",
  "cython-compiler",
  "GeekShopping-Microservices",
  "monty-hall-problem",
  "ReactDataStructures",
  "COVID-19-simulation",
  "MultiThreadedPrimesSolver",
  "SoftwareTestingProject",
  "Wallet-Controller",
  "round-robbin-simulator",
  "ChatProtocol",
  "Arduino-Snake-Game",
  "MovieTheater-with-8051"
]
// 86400
const getRepositoriesAsync = async () => {
  const revalidate: RequestInit = {
    next: { revalidate: 5 }
  }

  const response = await fetch(
    'https://api.github.com/users/GabrielBueno200/repos',
    revalidate
  )

  const data = await response.json()

  const repositories = await Promise.all<Repository[]>(
    data.map(async (repository: any) => {
      const { default_branch, full_name } = repository

      const readmeData = await fetch(
        `https://raw.githubusercontent.com/${full_name}/${default_branch}/README.md`,
        revalidate
      )

      return {
        ...repository,
        defaultBranch: repository['default_branch'],
        fullName: repository['full_name'],
        url: repository['html_url'],
        readmeMarkdown: await readmeData.text()
      }
    })
  )

  return repositories
}

export const getFilteredRepositoriesAsync = async () => {
  const repositories = await getRepositoriesAsync()

  const filteredRepositories = repositories.filter(repository =>
    repositoriesToFilter.includes(repository.name)
  )

  return filteredRepositories
}

