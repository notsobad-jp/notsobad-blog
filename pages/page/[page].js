import { getAllPostSlugs, getAllTags, formatDate } from '../../lib/utilities'
import { getStaticProps } from '../tag/[tag]/page/[page]'
import Index from '../tag/[tag]/page/[page]'

export { getStaticProps }
export default Index


const perPage = 10;

export async function getStaticPaths() {
  const slugs = await getAllPostSlugs();
  const pageCount = Math.ceil(slugs.length/perPage);

  let paths = [];
  for(let i = 2; i <= pageCount; i++) {
    paths.push({
      params: {
        page: String(i)
      }
    });
  }

  return {
    paths,
    fallback: false
  }
}
