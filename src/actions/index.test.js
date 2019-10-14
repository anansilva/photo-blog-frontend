import * as actions from './actions/';

describe('actions', () => {
  it('should create an action to fetch posts', () => {
    const text = 'Finish docs'
    const expectedAction = {
      type: types.ADD_TODO,
      text
    }
    expect(actions.addTodo(text)).toEqual(expectedAction)
  })
})