import axios from "axios";

const fetcher = (urlAPI: string )=> axios.get(urlAPI).then(res => res.data)

export default fetcher;