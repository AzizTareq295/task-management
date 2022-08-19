import {createSlice} from '@reduxjs/toolkit'
import { IUser } from 'Components/interface/User';

type AuthState = {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: IUser | null;
  error: string;
}

const initialState: AuthState = { 
    isLoading: false,
    isAuthenticated: false,
    user: null,
    error: "" 
}

const AuthSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
      dataLoading:(state, {payload}) => {
        return {
          ...state,
          isLoading: payload,
        }
      },
      dataAuthenticated:(state, {payload}) => {
        return {
          ...state,
          isAuthenticated: payload,
        }
      },
      dataUser:(state, {payload}) => {
        return {
          ...state,
          user: payload,
        }
      }

    }
})

export const { 
  dataLoading,
  dataAuthenticated,
  dataUser
} = AuthSlice.actions
export default AuthSlice.reducer