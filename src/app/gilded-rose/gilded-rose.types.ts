export type Item = {
  readonly itemType: ItemType
  readonly quality: number
  readonly sellIn: number
}

export interface UpdateStrategy {
  update(item: Item): Item
}

export enum ItemType {
  Normal,
  AgedBrie,
  SulfurasLegendary,
  Conjured,
}
