import { Injectable } from '@angular/core'
import { Item, ItemType, UpdateStrategy } from './gilded-rose.types'

@Injectable({
  providedIn: 'root',
})
export class UpdateService {
  constructor() {}

  update(item: Item): Item {
    var strategy

    switch (item.itemType) {
      case ItemType.Normal: {
        strategy = new NormalUpdateStrategy()
        break
      }
      case ItemType.AgedBrie: {
        strategy = new AgedBrieUpdateStrategy()
        break
      }
      case ItemType.SulfurasLegendary: {
        strategy = new SulfurasLegendaryUpdateStrategy()
        break
      }

      //default: {
      //  break
      //}
    }

    return strategy.update(item)
  }
}

class NormalUpdateStrategy implements UpdateStrategy {
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

class AgedBrieUpdateStrategy implements UpdateStrategy {
  update(item: Item): Item {
    return {
      itemType: ItemType.Normal,
      quality: item.quality + 1,
      sellIn: item.sellIn - 1,
    }
  }
}

class SulfurasLegendaryUpdateStrategy implements UpdateStrategy {
  update(item: Item): Item {
    return {
      itemType: ItemType.SulfurasLegendary,
      quality: item.quality,
      sellIn: item.sellIn,
    }
  }
}
