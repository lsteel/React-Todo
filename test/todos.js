'use strict'

import Promise from 'bluebird'
import chai from 'chai'
import supertest from 'supertest-as-promised'
import Todo from '../lib/todos'
import app from '../app'

Promise.promisifyAll(Todo)

const request = supertest(app)
const expect = chai.expect

describe('todos', () => {

  beforeEach(() => {
    return Todo
      .findAsync()
      .then((todos) => {
        return Promise.all(todos.map((todo) => Todo.deleteAsync(todo.id)))
      })
  })

  it('gets empty array with no todos', () => {
    return request.get('/api/todos')
      .expect(200, [])
  })

  it('gets a list of todos with a few todos', () => {
    return Promise
      .all([
        Todo.createAsync({ name: 'foo' }),
        Todo.createAsync({ name: 'bar' }),
        Todo.createAsync({ name: 'hello' })
      ])
      .then((todos) => {
        expect(todos).to.have.length(3)
        return request.get('/api/todos')
          .expect(200)
      })
      .then((response) => {
        expect(response.body).to.have.length(3)
        response.body.forEach((todo) => {
          expect(todo).to.have.keys('name', 'completed', 'id')
        })
      })
  })

  it('creates a todo')

  it('defaults created to false')

  it('updates a todo')

  it('deletes a todo')

  it('fails to update if id does not exist')

  it('fails to delete if id does not exist')

})




