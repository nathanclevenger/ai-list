# `ai-list`: AI-Powered List Generation

```bash
npm install ai-list
```

or

```bash
yarn add ai-list
```

Then you can use it:

```javascript
import { AIList } from 'ai-list'

const { list, gpt } = AIList({ apiKey = 'OPENAI_API_KEY' })

list`5 blog post titles about selling cars online`

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







