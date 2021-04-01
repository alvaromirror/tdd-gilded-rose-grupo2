import { ItemType } from './itemType'

export type Item = {
  readonly itemType: ItemType
  readonly quality: number
  readonly sellIn: number
}
