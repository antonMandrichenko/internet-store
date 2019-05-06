import * as actions from './authActions'
import * as types from './types'

describe('authActions', () => {
  it('getCurrentUser', () => {
    const users = [1, 2, 3];
    const id = '123';
    const expectedAction = {
      type: types.GET_CURRENT_USER,
      users,
      id
    };
    expect(actions.getCurrentUser(users, id)).toEqual(expectedAction)
  })
});
