# doge-editor

> a rich text editor library made with react, for react.

[![NPM](https://img.shields.io/npm/v/doge-editor.svg)](https://www.npmjs.com/package/doge-editor) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save doge-editor
```

## Usage

```tsx
import React, { useState } from 'react'

import { DogeEditor } from 'doge-editor'
import 'doge-editor/dist/index.css'

const App = () => {
  const [data, setData] = useState([])
  return <DogeEditor data={data} setData={setData} />
}

export default App
```

# Data -

Here data holds all your data from editor and can be accessed as an array.
The data looks like the object below

```js
data = [
  {
    type: 'h1',
    content: 'text body'
  }
]
```

content types are - <strong>h1</strong>, <strong>h2</strong>, <strong>p</strong> and <strong>image</strong> for now. 
image type contains file upload data as image. you will need to handle it on your own

## License

MIT © [jamilur-r](https://github.com/jamilur-r)
