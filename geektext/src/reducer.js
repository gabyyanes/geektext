export const initialState = {
  basket: [],
};

//Selector
//iterates through the basket and tallies up the item prices and returns it
export const getBasketTotal = (basket) =>
 basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      
     case "SAVE_FOR_LATER":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

      case "REMOVE_FROM_BASKET":
        const index = state.basket.findIndex(
          (basketItem) => basketItem.id === action.id
        );
        //copy the current basket contents into new basket
        let newBasket = [...state.basket];
  
        //go to the new basket
        if (index >= 0) {
          //cut out or splice that element
          newBasket.splice(index, 1);
  
        } else {
          console.warn(
            `Cant remove product (id: ${action.id}) as its not in basket!`
          )
        }
  
        return {
          ...state,
          basket: newBasket
        }

    default:
      return state;
  }
};


export default reducer;
