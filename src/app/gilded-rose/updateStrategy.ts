import { Item } from './item'

export interface UpdateStrategy {
  update(item: Item): Item
}
