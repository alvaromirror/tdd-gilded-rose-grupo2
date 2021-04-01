import { UpdateStrategy } from './updateStrategy'
import { ItemType } from './itemType'
import { Item } from './item'

export class SulfurasLegendaryUpdateStrategy implements UpdateStrategy {
  update(item: Item): Item {
    return {
      itemType: ItemType.SulfurasLegendary,
      quality: item.quality,
      sellIn: item.sellIn,
    }
  }
}
