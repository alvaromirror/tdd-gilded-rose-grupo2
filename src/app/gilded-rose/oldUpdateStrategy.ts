import { UpdateStrategy } from './updateStrategy'
import { ItemType } from './itemType'
import { Item } from './item'

export class OldUpdateStrategy implements UpdateStrategy {
  update(item: Item): Item {
    return {
      itemType: ItemType.Old,
      quality: item.sellIn >= 2 ? 0 : item.quality,
      sellIn: item.sellIn >= 2 ? 0 : item.sellIn,
    }
  }
}
