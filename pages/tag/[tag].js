import { getAllTags } from '../../lib/utilities'
import { getStaticProps } from './[tag]/page/[page]'
import Index from './[tag]/page/[page]'

export { getStaticProps }
export default Index

export async function getStaticPaths() {
  const tags = await getAllTags();

  let paths = [];
  tags.map((tag) => (
    paths.push({
      params: {
        tag: tag
      }
    })
  ));

  return {
    paths,
    fallback: false
  }
}
