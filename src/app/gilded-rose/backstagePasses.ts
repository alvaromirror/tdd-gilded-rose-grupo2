import { UpdateStrategy } from './updateStrategy'
import { ItemType } from './itemType'
import { Item } from './item'

export class BackstagePasses implements UpdateStrategy {
  update(item: Item): Item {
    const targetSellIn = item.sellIn - 1
    var sellIn = 0
    var quality = 0
    if (targetSellIn < 0) {
      sellIn = 0
    } else if (targetSellIn > 10) {
      sellIn = targetSellIn
      quality = item.quality + 1
    } else if (targetSellIn <= 10 && targetSellIn > 5) {
      sellIn = targetSellIn
      quality = item.quality * 2
    } else if (targetSellIn <= 5) {
      sellIn = targetSellIn
      quality = item.quality * 3
    }
    return {
      itemType: ItemType.BackstagePasses,
      quality: quality,
      sellIn: sellIn,
    }
  }
}
