import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      { type: 'paragraph' as const, content: 'Fala galera!' },
      { type: 'paragraph' as const, content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio accusamus saepe ea ab quas a odit nulla maiores labore eos eum deleniti dolore illum architecto optio quod, id error facilis.' },
      { type: 'link' as const, content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      { type: 'paragraph' as const, content: 'Fala galera!' },
      { type: 'paragraph' as const, content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio accusamus saepe ea ab quas a odit nulla maiores labore eos eum deleniti dolore illum architecto optio quod, id error facilis.' },
      { type: 'link' as const, content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  },
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrpper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            ) 
          })}
        </main>
      </div>
    </div>
  )
}

