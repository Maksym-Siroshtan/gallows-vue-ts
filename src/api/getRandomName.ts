/* import axios from 'axios'

export const getRandomName = async () => {
  const { data } = await axios<{ FirstName: string }>(
    'http://api.randomdatatools.ru/?unescaped=false&params=FirstName'
  )

  return data.FirstName
} */

import { namesData } from './namesData'

export function getRandomName() {
  const names = formatData(namesData)
  const nameNumber = Math.ceil(Math.random() * names.length)

  return names[nameNumber]
}

function formatData(data: string) {
  return data.split('\n')
}
