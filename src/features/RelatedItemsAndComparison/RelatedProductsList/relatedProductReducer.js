export const relatedState = {
  start: 0,
  end: 4,
};

export const relatedReducer = ({ start, end }, action) => {
  switch (action.type) {
    case 'NEXT':
      return {
        start: start + 4,
        end: end + 4,
      };
    case 'PREV':
      return {
        start: start > 0 ? start - 4 : start,
        end: end > 4 ? end - 4 : end,
      };
    case 'RESET':
      return {
        start: 0,
        end: 4,
      };
    default:
      console.log(action.type === 'RESET');
      throw new Error('Invalid request for carousel');
  }
};
