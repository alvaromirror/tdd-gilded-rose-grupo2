import { UpdateStrategy } from './updateStrategy'
import { ItemType } from './itemType'
import { Item } from './item'

export class ConjuredUpdateStrategy implements UpdateStrategy {
  update(item: Item): Item {
    return {
      itemType: ItemType.Conjured,
      quality: item.quality - 2 < 0 ? 0 : item.quality - 2,
      sellIn: item.sellIn - 1,
    }
  }
}
