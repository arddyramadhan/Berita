import axios from "axios"
export default axios.create({
    // baseURL: "http://127.0.0.1:8000",
    // baseURL: "https://bepdfsb.arsydev.com",
    // baseURL: "http://"+window.location.hostname+ (window.location.port ? ':'+window.location.port : '') ,
    // baseURL: "http://"+window.location.hostname+ (window.location.port ? ':8000' : '') ,
    baseURL: window.location.port ? "http://127.0.0.1:8000" : "https://api.mikmonlokal.my.id/public",
    withCredentials: true,
    headers: { Accept: "application/json" },
})
