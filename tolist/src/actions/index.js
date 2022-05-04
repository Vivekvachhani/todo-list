export const submitdata = (data) => {
  return {
    type: "SUBMIT",
    data,
  };
};

export const Add_Todo = (userId,Todolist) => {
  return {
    type: "Add_Todo",
    userId,
    data: { ...Todolist, id: new Date().getTime().toString() }
  };
};

export const deletetodo = (id,userId) => {
  return {
    type: "delete",
    id,
    userId
  };
};

export const checkitem = (id,userId) => {
  return {
    type: "checkbox",
    id,
    userId
  };
};

export const cleardata = (userId) => {
  return {
    type: "clear",

    userId
  };
};