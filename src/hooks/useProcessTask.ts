import { FormEvent } from 'react'
import { useAppSelector } from '../app/hooks'
import { useMutateTask } from '../hooks/useMutateTask'
import { selectTask } from '../slices/appSlice'

export const useProcessTask = () => {
  const editedTask = useAppSelector(selectTask)
  const { createTaskMutation, updateTaskMutation } = useMutateTask()
  const processTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (editedTask.id === '')
      createTaskMutation.mutate({
        title: editedTask.title,
        description: editedTask.description,
      })
    else {
      updateTaskMutation.mutate(editedTask)
    }
  }
  return { processTask }
}
