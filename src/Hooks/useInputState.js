import { useState } from "react"

const useInputValue = (defaultValue = null) => {
    const [value , setValue] = useState(defaultValue)

    // this code is for object type code 
    const onChange = (e) => {
        setValue(e.target.value)
    }

    //option like array [when i use data as a array then i should do this code]
    // const handleChange = e => {
    //     setValue(e.target.value)
    // }

    // return [value , handleChange]  // for array 
    return {
        value , 
        onChange
    }
}

export default useInputValue;