import { UpdateStrategy } from './updateStrategy'
import { ItemType } from './itemType'
import { Item } from './item'

export class AgedBrieUpdateStrategy implements UpdateStrategy {
  update(item: Item): Item {
    return {
      itemType: ItemType.Normal,
      quality: item.quality < 50 ? item.quality + 1 : item.quality,
      sellIn: item.sellIn - 1,
    }
  }
}
