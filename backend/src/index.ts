import express from 'express'

const app = express()

const ideas = [
  { nick: 'cool-idea-1', name: 'Idea 1', description: 'Description of idea 1' },
  { nick: 'cool-idea-2', name: 'Idea 2', description: 'Description of idea 2' },
  { nick: 'cool-idea-3', name: 'Idea 3', description: 'Description of idea 3' },
  { nick: 'cool-idea-4', name: 'Idea 4', description: 'Description of idea 4' },
  { nick: 'cool-idea-5', name: 'Idea 5', description: 'Description of idea 5' },
]

app.get('/ideas', (req, res) => {
  res.status(200).send(ideas)
})

app.listen(3000, () => {
  console.info('Server started on http://localhost:3000')
})

console.log('Hello world!!!')
