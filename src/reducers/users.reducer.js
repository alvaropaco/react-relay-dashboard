import _ from 'underscore';

let permissions = [
  'standard',
  'manager',
  'administrator',
  'owner'
]
let classes = [
  'default',
  'warning',
  'primary',
  'success'
]
export default (state=null, action) => {
  console.log(state)
  switch(action.type) {
      case "FETCH_USERS_FULFILLED":
        var list = action.payload
        _.map(list, (o, i) => {
          list[i].permissionClass = classes[o.permission];
          list[i].permission = permissions[o.permission];
        }) 
        return list
      case "REMOVE_USERS_FULFILLED":
        var list = action.payload
        _.map(list, (o, i) => {
          list[i].permissionClass = classes[o.permission];
          list[i].permission = permissions[o.permission];
        }) 
        return list
      case "CREATE_USER_FULFILLED":
        var list = action.payload
        list.push(action.payload);
        _.map(list, (o, i) => {
          list[i].permissionClass = classes[o.permission];
          list[i].permission = permissions[o.permission];
        }) 
        return list
      default:
        return state;
  }
}
