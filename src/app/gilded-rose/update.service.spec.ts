import { TestBed } from '@angular/core/testing'
import { Item, ItemType } from './gilded-rose.types'

import { UpdateService } from './update.service'

describe('UpdateService', () => {
  let service: UpdateService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(UpdateService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  describe('Normal items', () => {
    it('when Q:10, S:5, expected Q:9, S:4', () => {
      const normalItem: Item = {
        itemType: ItemType.Normal,
        quality: 10,
        sellIn: 5,
      }
      const result = service.update(normalItem)
      expect(9).toEqual(result.quality)
      expect(4).toEqual(result.sellIn)
    })

    it('when Q:5, S:2, expected Q:4, S:1', () => {
      const normalItem: Item = {
        itemType: ItemType.Normal,
        quality: 5,
        sellIn: 2,
      }
      const result = service.update(normalItem)
      expect(4).toEqual(result.quality)
      expect(1).toEqual(result.sellIn)
    })

    it('when Q:0, S:0, expected Q:0, S:0', () => {
      const normalItem: Item = {
        itemType: ItemType.Normal,
        quality: 0,
        sellIn: 0,
      }
      const result = service.update(normalItem)
      expect(0).toEqual(result.quality)
      expect(0).toEqual(result.sellIn)
    })
    it('when Q:20, S:21, expected Q:19, S:20', () => {
      const normalItem: Item = {
        itemType: ItemType.Normal,
        quality: 20,
        sellIn: 21,
      }
      const result = service.update(normalItem)
      expect(19).toEqual(result.quality)
      expect(20).toEqual(result.sellIn)
    })
  })

  describe('Aged Brie', () => {
    it('when Q:10, S:5, expected Q:11, S:4', () => {
      const normalItem: Item = {
        itemType: ItemType.AgedBrie,
        quality: 10,
        sellIn: 5,
      }
      const result = service.update(normalItem)
      expect(11).toEqual(result.quality)
      expect(4).toEqual(result.sellIn)
    })
    it('when Q:50, S:5, expected Q:50, S:4', () => {
      const normalItem: Item = {
        itemType: ItemType.AgedBrie,
        quality: 50,
        sellIn: 5,
      }
      const result = service.update(normalItem)
      expect(50).toEqual(result.quality)
      expect(4).toEqual(result.sellIn)
    })
  })

  describe('sulfurasLegendary', () => {
    it('when Q:10, S:5, exected Q:10, S:4', () => {
      const normalItem: Item = {
        itemType: ItemType.SulfurasLegendary,
        quality: 10,
        sellIn: 5,
      }
      const result = service.update(normalItem)
      expect(10).toEqual(result.quality)
      expect(5).toEqual(result.sellIn)
    })
  })

  describe('conjured', () => {
    it('when Q:10, S:3, exected Q:8, S:2', () => {
      const normalItem: Item = {
        itemType: ItemType.Conjured,
        quality: 10,
        sellIn: 3,
      }
      const result = service.update(normalItem)
      expect(8).toEqual(result.quality)
      expect(2).toEqual(result.sellIn)
    })
    it('when Q:1, S:2, exected Q:0, S:1', () => {
      const normalItem: Item = {
        itemType: ItemType.Conjured,
        quality: 1,
        sellIn: 2,
      }
      const result = service.update(normalItem)
      expect(0).toEqual(result.quality)
      expect(1).toEqual(result.sellIn)
    })
  })

  describe('Old item', () => {
    it('when Q:10, S:2, exected Q:0, S:0', () => {
      const oldItem: Item = {
        itemType: ItemType.Old,
        quality: 10,
        sellIn: 2,
      }
      const result = service.update(oldItem)
      expect(0).toEqual(result.quality)
      expect(0).toEqual(result.sellIn)
    })
    
    it('when Q:10, S:1, exected Q:10, S:1', () => {
      const oldItem: Item = {
        itemType: ItemType.Old,
        quality: 10,
        sellIn: 1,
      }
      const result = service.update(oldItem)
      expect(10).toEqual(result.quality)
      expect(1).toEqual(result.sellIn)
    })

    it('when Q:100, S:3, exected Q:0, S:0', () => {
      const oldItem: Item = {
        itemType: ItemType.Old,
        quality: 100,
        sellIn: 3,
      }
      const result = service.update(oldItem)
      expect(0).toEqual(result.quality)
      expect(0).toEqual(result.sellIn)
    })
    
    it('when Q:100, S:1, exected Q:10, S:1', () => {
      const oldItem: Item = {
        itemType: ItemType.Old,
        quality: 100,
        sellIn: 1,
      }
      const result = service.update(oldItem)
      expect(100).toEqual(result.quality)
      expect(1).toEqual(result.sellIn)
    })
    
  })

  describe('BackstagePasses item', () => {
    it('when Q:10, S:20, exected Q:11, S:19', () => {
      const oldItem: Item = {
        itemType: ItemType.BackstagePasses,
        quality: 10,
        sellIn: 20,
      }
      const result = service.update(oldItem)
      expect(11).toEqual(result.quality)
      expect(19).toEqual(result.sellIn)
    })
    
    it('when Q:13, S:17, exected Q:14, S:16', () => {
      const oldItem: Item = {
        itemType: ItemType.BackstagePasses,
        quality: 13,
        sellIn: 17,
      }
      const result = service.update(oldItem)
      expect(14).toEqual(result.quality)
      expect(16).toEqual(result.sellIn)
    })

    it('when Q:19, S:11, exected Q:38, S:10', () => {
      const oldItem: Item = {
        itemType: ItemType.BackstagePasses,
        quality: 19,
        sellIn: 11,
      }
      const result = service.update(oldItem)
      expect(38).toEqual(result.quality)
      expect(10).toEqual(result.sellIn)
    })

    it('when Q:304, S:7, exected Q:608, S:6', () => {
      const oldItem: Item = {
        itemType: ItemType.BackstagePasses,
        quality: 304,
        sellIn: 7,
      }
      const result = service.update(oldItem)
      expect(608).toEqual(result.quality)
      expect(6).toEqual(result.sellIn)
    })

    it('when Q:608, S:6, exected Q:1824, S:5', () => {
      const oldItem: Item = {
        itemType: ItemType.BackstagePasses,
        quality: 608,
        sellIn: 6,
      }
      const result = service.update(oldItem)
      expect(1824).toEqual(result.quality)
      expect(5).toEqual(result.sellIn)
    })

    it('when Q:16416, S:3, exected Q:49248, S:2', () => {
      const oldItem: Item = {
        itemType: ItemType.BackstagePasses,
        quality: 16416,
        sellIn: 3,
      }
      const result = service.update(oldItem)
      expect(49248).toEqual(result.quality)
      expect(2).toEqual(result.sellIn)
    })

    it('when Q:443232, S:0, exected Q:0, S:0', () => {
      const oldItem: Item = {
        itemType: ItemType.BackstagePasses,
        quality: 443232,
        sellIn: 0,
      }
      const result = service.update(oldItem)
      expect(0).toEqual(result.quality)
      expect(0).toEqual(result.sellIn)
    })    
  })
})
