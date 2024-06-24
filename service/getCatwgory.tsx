"use server"
import { URL } from "./request";

interface CategoryType {
    id: string;
    title: string;
    count: string;
}

export const getCategory =  async ():Promise<CategoryType> => {
    // const [data, setData] = useState<Array<CategoryType>>([])
    // const res = await axios(`${URL}/categoryies`).then(res => {
    //     setData(res.data)
    // })
    try {
        const res = await fetch(`${URL}/categoryies`)
        const data = await res.json()
        return data
    }
    catch (error:any) {
        throw new Error(error.message)
    }
}