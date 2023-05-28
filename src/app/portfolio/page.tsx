import PageContent from '../components/PageContent'
import RepositoryCard from '../components/RepositoryCard'
import { getFilteredRepositoriesAsync } from '../utils/fetchRepositories'

const Portfolio = async () => {
  const repositories = await getFilteredRepositoriesAsync()

  return (
    <PageContent title="Portfolio">
      <span className="text-white font-bold block text-xl">
        You can check my projects through my github repositories. Check them
        below.
      </span>
      <div className="grid grid-cols-4 gap-5 overflow-auto max-h-[75%] mt-6 pr-2 scrollbar-thin scrollbar-thumb-primary-green scrollbar-track-white-green scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
        {repositories.map(repo => (
          <RepositoryCard key={repo.id} repository={repo} />
        ))}
      </div>
    </PageContent>
  )
}

export default Portfolio

