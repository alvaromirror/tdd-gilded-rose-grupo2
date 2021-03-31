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
        quality: 10,
        sellIn: 5,
      }
      const result = service.update(normalItem)
      expect(11).toEqual(result.quality)
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
})
