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
  switch(action.type) {
      case "FETCH_USERS_FULFILLED":
        var list = action.payload
        _.map(list, (o, i) => {
          list[i].permissionClass = classes[o.permission];
          list[i].permission = permissions[o.permission];
        }) 
        return list
      default:
        return state;
  }
}
