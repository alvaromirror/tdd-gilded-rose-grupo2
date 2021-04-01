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
      case ItemType.Conjured: {
        strategy = new ConjuredUpdateStrategy()
        break
      }
      case ItemType.Old: {
        strategy = new OldUpdateStrategy()
        break
      }
      case ItemType.BackstagePasses: {
        strategy = new BackstagePasses()
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
      quality: item.quality < 50 ? item.quality + 1 : item.quality,
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

class ConjuredUpdateStrategy implements UpdateStrategy {
  update(item: Item): Item {
    return {
      itemType: ItemType.Conjured,
      quality: item.quality - 2 < 0 ? 0 : item.quality - 2,
      sellIn: item.sellIn - 1,
    }
  }
}
class OldUpdateStrategy implements UpdateStrategy {
  update(item: Item): Item {
    return {
      itemType: ItemType.Old,
      quality: item.sellIn >= 2 ? 0 : item.quality,
      sellIn: item.sellIn >= 2 ? 0 : item.sellIn,
    }
  }
}

class BackstagePasses implements UpdateStrategy {
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