import axios from 'axios';
import axiosWithAuth from '../components/axiosWithAuth';


// ----- ACTIONS ------


export const ERROR = 'ERROR'

const baseUrl = 'http://localhost:3333'

export * from './authActions'
export * from './trackActions'
export * from './thumbActions'

export const actionCreatorTHunk = () => dispatch => {
  // use dispatch to evoke an action
}

// export const normalActionCreator = () => {
//   return{
//     type: type,
//     payload: payload
//   }
// }
