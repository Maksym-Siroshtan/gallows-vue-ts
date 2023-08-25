import axios from 'axios'

export const getRandomName = async () => {
  const { data } = await axios<{ FirstName: string }>(
    'http://api.randomdatatools.ru/?unescaped=false&params=FirstName'
  )

  return data.FirstName
}
