import { useCallback } from "react"

export const useMassager = () => {
    return useCallback(text => {
        if (window.M && text) {
            window.M.toast({ html: text })
        }
    }, [])
}