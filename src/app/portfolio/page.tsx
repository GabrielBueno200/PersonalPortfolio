import PageContent from '../components/PageContent'
import RepositoryCard from '../components/RepositoryCard'
import repositoriesSettings from './repositoriesSettings.json'

const getRepositoriesAsync = async () => {
  const revalidate = 86400

  const data = await fetch(
    'https://api.github.com/users/GabrielBueno200/repos',
    {
      next: { revalidate }
    }
  )

  let repositories = await Promise.all<Repository[]>(
    (
      await data.json()
    ).map(async (repository: any) => {
      const { default_branch, full_name } = repository
      const readmeData = await fetch(
        `https://raw.githubusercontent.com/${full_name}/${default_branch}/README.md`,
        {
          next: { revalidate }
        }
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

  repositories = repositories.filter(repository =>
    repositoriesSettings['repositoriesToShow'].includes(repository.name)
  )

  return repositories
}

const Portfolio = async () => {
  const repositories = await getRepositoriesAsync()

  return (
    <PageContent title="Portfolio">
      <div className="grid grid-cols-4 gap-5 overflow-auto max-h-[85%] pr-2 scrollbar-thin scrollbar-thumb-primary-green scrollbar-track-white-green scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
        {repositories.map(repo => (
          <RepositoryCard key={repo.id} repository={repo} />
        ))}
      </div>
    </PageContent>
  )
}

export default Portfolio

