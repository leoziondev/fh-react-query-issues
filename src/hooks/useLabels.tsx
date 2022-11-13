import { useQuery } from '@tanstack/react-query'
import { githubApi } from '../api/githubApi'
import { sleep } from '../helpers/sleep'
import { Label } from '../interfaces/label'

const getLabels = async ():Promise<Label[]> => {
  await sleep(2)

  const { data } = await githubApi.get<Label[]>('/labels', {
    headers: {
      Authorization: null
    }
  })

  return data
}

export const useLabels = () => {
  const labelsQuery = useQuery(
    ['labels'],
    getLabels,
    {
      staleTime: 1000 * 60 * 60,
      // initialData: [],
      // placeholderData: [],
      placeholderData: [
        {
          id: 717031390,
          node_id: "MDU6TGFiZWw3MTcwMzEzOTA=",
          url: "https://api.github.com/repos/facebook/react/labels/good%20first%20issue",
          name: "good first issue",
          color: "6ce26a",
          default: true,
        },
        {
          id: 52079258,
          node_id: "MDU6TGFiZWw1MjA3OTI1OA==",
          url: "https://api.github.com/repos/facebook/react/labels/Difficulty:%20starter",
          name: "Difficulty: starter",
          color: "94ce52",
          default: false,
        },
        {
          id: 725156255,
          node_id: "MDU6TGFiZWw3MjUxNTYyNTU=",
          url: "https://api.github.com/repos/facebook/react/labels/good%20first%20issue%20(taken)",
          name: "good first issue (taken)",
          color: "b60205",
          default: false,
        }
      ]
    }
  )

  return labelsQuery
}