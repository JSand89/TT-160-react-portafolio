const API_URL = "http://127.0.0.1:3005/api/proyectos"

export async function getProjects() {
    const res = await fetch(`${API_URL}/`)
    const data = await res.json()
    return data
}