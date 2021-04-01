import { UpdateStrategy } from './updateStrategy'
import { ItemType } from './itemType'
import { Item } from './item'

export class NormalUpdateStrategy implements UpdateStrategy {
  update(item: Item): Item {
    const targetQuality = item.quality - 1
    const quality = targetQuality < 0 ? 0 : targetQuality
    const targetSellIn = item.sellIn - 1
    const sellIn = targetSellIn < 0 ? 0 : targetSellIn
    return {
      itemType: ItemType.Normal,
      quality,
      sellIn,
    }
  }
}
