import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'
import { Task } from '../types/types'

export interface AppState {
  editedTask: Task
  csrfTokenExp: boolean
}
const initialState: AppState = {
  editedTask: {
    id: '',
    title: '',
    description: '',
  },
  csrfTokenExp: false,
}
export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setEditedTask: (state, action: PayloadAction<Task>) => {
      state.editedTask = action.payload
    },
    resetEditedTask: (state) => {
      state.editedTask = initialState.editedTask
    },
    toggleCsrfState: (state) => {
      state.csrfTokenExp = !state.csrfTokenExp
    },
  },
})
export const { setEditedTask, resetEditedTask, toggleCsrfState } =
  appSlice.actions

export const selectTask = (state: RootState) => state.app.editedTask
export const selectCsrfState = (state: RootState) => state.app.csrfTokenExp
export default appSlice.reducer
