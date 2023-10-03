# `ai-list`: AI-Powered List Generation

```bash
npm install ai-list
```

or

```bash
yarn add ai-list
```

Then you can use it simply:

```javascript
import { AIList } from 'ai-list'

const { list, gpt } = AIList({ apiKey = 'OPENAI_API_KEY' })

const things = await list`fun things to do in Miami`
console.log(things)
```

or with Async iterators:

```javascript
for await (const thing of list`fun things to do in Miami`) {
  console.log(thing)
}
```

Or in a more complex example:

```javascript

const listBlogPosts => (count, topic) => list`${count} blog post titles about ${topic}`
const writeBlogPost => title => gpt`write a blog post in markdown starting with "# ${title}"`

const writeBlog = async (count, topic) => {
  for await (const title of listBlogPosts(count, topic)) {
    const content = await writeBlogPost(title)
    yield { title, content }
  }
}

for await (const post of writeBlog(25, 'future of car sales')) {
  console.log({ post })
}
```







