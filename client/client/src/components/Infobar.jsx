import {useState, useEffect} from "react"



function Infobar() {

    const [infoLeads, setInfoLeads] = useState([])

useEffect(() => {


    async function infoBarLeads() {
        const res = await fetch("/http://localhost:5050/records/summary")

        if (!res.ok) {
             const message = `An error occurred: ${res.statusText}`;
        console.error(message);
        return;
        }

        const infoLeads = await res.json()
        setInfoLeads(infoLeads)
    }
    infoBarLeads()


}, [])

    return (
        <>
            <h1>Hello bruh</h1>
        </>
    )
}

export default Infobar