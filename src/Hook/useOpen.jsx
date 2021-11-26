import { useContext } from "react"
import { Context } from "../Context/Provider"

function useOpen() {
    let { open, setOpen } = useContext(Context)
    
    return [open, setOpen]
}
export default useOpen