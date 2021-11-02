import { useQuery } from 'react-query'
import axios from 'axios'
import { UserInfo } from '../types/types'
import { useHistory } from 'react-router-dom'

export const useQueryUser = () => {
  const history = useHistory()
  const getCurrentUser = async () => {
    const { data } = await axios.get<UserInfo>(
      `${process.env.REACT_APP_API_URL}/user`,
      {
        withCredentials: true,
      }
    )
    return data
  }
  return useQuery({
    queryKey: 'user',
    queryFn: getCurrentUser,
    staleTime: Infinity,
    onError: () => history.push('/'),
  })
}
