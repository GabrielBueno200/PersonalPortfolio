import FilteredRepositoriesCards from '../components/FilteredRepositoriesCards'
import PageContent from '../components/PageContent'
import { getFilteredRepositoriesAsync } from '../utils/fetchRepositories'

const Portfolio = async () => {
  const repositories = await getFilteredRepositoriesAsync()

  return (
    <PageContent title="Portfolio">
      <span className="mb-6 block text-lg font-bold text-white lg:mb-0 lg:text-xl">
        You can check my projects through my github repositories. Check them
        below.
      </span>

      <FilteredRepositoriesCards repositories={repositories} />
    </PageContent>
  )
}

export default Portfolio

