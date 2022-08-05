import { useEffect, useState } from "react"

export const useNoFound = (list : any[]) => {
    const [ noFound, setNoFound ] = useState(false)
    useEffect(() => {
        setNoFound(!list.length)
    }, [list])
    return {
        noFound,
        setNoFound
    }
}