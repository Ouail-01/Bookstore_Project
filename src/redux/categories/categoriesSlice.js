const COMPLETED = 'bookstore/categories/COMPLETED';

const categoriesReduce = (state = [], action) => {
  switch (action.type) {
    case COMPLETED:
      return 'Soon';
    default:
      return state;
  }
};
export const checkStatus = () => ({
  type: COMPLETED,
});

export default categoriesReduce;