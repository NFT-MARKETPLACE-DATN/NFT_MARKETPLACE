import { FC, useState } from 'react'

const App: FC = () => {
  const [fullname, setFullname] = useState('Dư Thanh Được')
  console.log(fullname)
  return (
    <div>
      <h1>{fullname}</h1>
      <h2>Bài viết được viết tại blog </h2>
    </div>
  )
}

export default App
