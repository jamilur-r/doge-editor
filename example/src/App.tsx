import React, { useState } from 'react'

import { DogeEditor} from 'doge-editor'
import 'doge-editor/dist/index.css'

const App = () => {
  const [data, setData] = useState([])
  return <DogeEditor data={data} setData={setData} />
}

export default App
