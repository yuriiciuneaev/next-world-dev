import { FC } from 'react'
import type { Product } from '@commerce/types/product'
import usePrice from '@framework/product/use-price'

interface MapEditorProps {
  product: Product
  // relatedProducts: Product[]
}

const MapEditor: FC<MapEditorProps> = ({ product }) => {
  const { price } = usePrice({
    amount: product.price.value,
    baseAmount: product.price.retailPrice,
    currencyCode: product.price.currencyCode!,
  })

  return (
    <div>Map</div>
  );
};

export default MapEditor;