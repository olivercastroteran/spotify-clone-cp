export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    'BQCHFzMElGQNwuUHsyrwC_6W23mi8oQwCrv24WvdPCoKGBKjYG8963CFt6gSGOpOM-lRjlRePrT_1QOYvjdYX1hi_SkzykGTyKkqKp-fRNSJYSO4pguiow7_yHWISJ2FYq5qay4C1-bMW4GSo4KSLs-l43qz1B90r5Is_JWppYnSfgxOFO_9',
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
