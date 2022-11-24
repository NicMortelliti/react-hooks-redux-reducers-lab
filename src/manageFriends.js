const state = { friends: [] };

export function manageFriends(state, action) {
  switch (action.type) {
    case "friends/add":
      let friend = action.payload;
      return { friends: [...state.friends, friend] };

    case "friends/remove":
      return {
        friends: state.friends.filter((friend) => friend.id !== action.payload),
      };

    default:
      return state;
  }
}
