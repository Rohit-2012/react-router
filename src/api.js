const getVans = async () => {
    const res = await fetch("/api/vans")
    if (!res.ok) {
        throw {
            message: "Failed to fetch Vans data",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export {getVans}