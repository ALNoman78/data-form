import { useState } from "react"

const useNewState = (defaultValue = '') => {
    const [value , setValue] = useState(defaultValue)

    const onChange = e => {
        setValue(e.target.value);
    }

    return {
        value ,
        onChange
    }
}

export default useNewState