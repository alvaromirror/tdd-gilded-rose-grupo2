import { Injectable } from '@angular/core'
import { NormalUpdateStrategy } from './normalUpdateStrategy'
import { AgedBrieUpdateStrategy } from './agedBrieUpdateStrategy'
import { SulfurasLegendaryUpdateStrategy } from './sulfurasLegendaryUpdateStrategy'
import { ConjuredUpdateStrategy } from './conjuredUpdateStrategy'
import { OldUpdateStrategy } from './oldUpdateStrategy'
import { BackstagePasses } from './backstagePasses'
import { ItemType } from './itemType'
import { Item } from './item'

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
    }

    return strategy.update(item)
  }
}
