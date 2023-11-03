import { describe, it, expect } from 'vitest'
import { AI } from './index'


describe('list', () => {

  const { list, gpt } = AI()

  it('should return a generator', () => {
    expect(list).toBeInstanceOf(Function)
  })

  it('should generate 3 items', async () => {
    let items: string[] = []
    for await (const item of list`3 synonyms for "fun"`) {
      items.push(item)
    }
    console.log({ items })
    expect(items).toHaveLength(3)
    expect(items[0]).toBeTruthy()
  })

  it('should get a completion', async () => {
    const completion = await gpt`Hi`
    console.log({ completion })
    expect(completion).toBeTruthy()
  })

})