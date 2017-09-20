import actionsTypes from './actionTypes'
export default{
  changePage: (route: string)=>{
    return {type: actionsTypes.CHANGE_PAGE, route}
  }
}

