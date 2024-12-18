import { useState } from "react"

const useInput = (defaultValue = null) => {
    const [value , setValue ] = useState(defaultValue)

    const handleChange = val => {
        setValue(val)
    }

    return [value , handleChange]
}

export default useInput;