import { Repository } from "../types/repository"

const repositoriesToFilter = [
  'AutomaticSkullLandmarksDetection',
  'StudentClassManager',
  'Spotify-Tailwind-Clone',
  'ToDoTaskApp',
  'cython-compiler',
  'GeekShopping-Microservices',
  'monty-hall-problem',
  'ReactDataStructures',
  'COVID-19-simulation',
  'MultiThreadedPrimesSolver',
  'SoftwareTestingProject',
  'Wallet-Controller',
  'round-robin-simulator',
  'ChatProtocol',
  'Arduino-Snake-Game',
  'MovieTheater-with-8051',
  'PersonalPortfolio'
]

const getRepositoriesAsync = async () => {
  const revalidate: RequestInit = {
    next: { revalidate: 1800 }
  }

  const response = await fetch(
    'https://api.github.com/users/GabrielBueno200/repos?per_page=100',
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
        createdAt: repository['created_at'],
        deployedUrl: repository['homepage'],
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

