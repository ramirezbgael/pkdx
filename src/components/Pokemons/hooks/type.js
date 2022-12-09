import axios from "axios"
import { useState } from "react"

const getType = (URL) =>{
  const [ptype, setType] = useState()
  const [id, setId] = useState()
  if(URL){
    axios.get(URL)
    .then((res) => {
      setType(res.data.types[0].type.name)
      setId(res.data.id)
    })
    .catch((err) => console.log('el error es aquí', err))
    return {ptype, id}
  }
}

export default getType