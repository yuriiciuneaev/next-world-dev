import type {
  GetStaticPathsContext,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next'
import { useRouter } from 'next/router'
import commerce from '@lib/api/commerce'
import { Layout } from '@components/common'
import { ProductView } from '@components/product'
import MapEditor from '@components/product/MapEditor'

export async function getStaticProps({
  params,
  locale,
  locales,
  preview,
}: GetStaticPropsContext<{ slug: string }>) {
  const config = { locale, locales }
  const pagesPromise = commerce.getAllPages({ config, preview })
  const siteInfoPromise = commerce.getSiteInfo({ config, preview })
  const productPromise = commerce.getProduct({
    variables: { slug: 'create-a-map' },
    config,
    preview,
  })

  const allProductsPromise = commerce.getAllProducts({
    variables: { first: 4 },
    config,
    preview,
  })
  const { pages } = await pagesPromise
  const { categories } = await siteInfoPromise
  const { product } = await productPromise

  if (!product) {
    throw new Error(`Product with slug not found`)
  }

  return {
    props: {
      pages,
      product,
      categories,
    },
    revalidate: 200,
  }
}

// export async function getStaticPaths({ locales }: GetStaticPathsContext) {
//   const { products } = await commerce.getAllProductPaths()

//   return {
//     paths: [`/editor/create-a-map`],
//     fallback: 'blocking',
//   }
// }

export default function CreateAMap({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()

  return router.isFallback ? (
    <h1>Loading...</h1>
  ) : (
    <MapEditor product={product} />
  )
}

CreateAMap.Layout = Layout
