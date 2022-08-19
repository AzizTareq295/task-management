import {dataLoading, dataAuthenticated, dataUser} from './AuthReducer'
import { IUser } from 'Components/interface/User'

export const authentication = (params: IUser) => (dispatch: any) => {
  try{
    dispatch(dataLoading(true))
    dispatch(dataUser({
      username: params.username,
      password: params.password
    }))
    dispatch(dataAuthenticated(true))
    dispatch(dataLoading(false))
  }
  catch(error){
    console.log(error)
  }
}

export const logout = () => (dispatch: any) => {
  try{
    dispatch(dataAuthenticated(false))
    dispatch(dataUser(null))
  }
  catch(error){
    console.log(error)
  }
}