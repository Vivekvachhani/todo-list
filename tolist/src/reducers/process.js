const alldata = [];
const allUser = (state = alldata, action) => {
  switch (action.type) {
    case "SUBMIT":
      //   const { id, data } = action.payload;
      //   console.log(id, data);
      //   return {
      //     ...state,
      //     data: [...state.alldata,
      //          {
      //             id:id,
      //            data:data
      //          }
      //         ]
      //   };
      const addUserArr = [...state];
      addUserArr.push(action.data); //push method
      return addUserArr;
    case "Add_Todo":
      const arr = [...state];
      arr[action.userId].todo = [...arr[action.userId].todo, action.data]; //spread operator
      return arr;
    case "delete":
      const dd = [...state];

      const newlist = dd[action.userId].todo.filter(
        (arr, index) => index !== action.id
      );
      dd[action.userId].todo = newlist;
      return dd;
    case "checkbox":
      const check = [...state];
      check[action.userId].todo[action.id].complete =
        !check[action.userId].todo[action.id].complete;
      return check;
    case "clear":
      return state.map((val, index) => {
        if (index === action.userId) val.todo = [];
        return val;
      });
;
    default:
      return state;
  }
};
export default allUser;
