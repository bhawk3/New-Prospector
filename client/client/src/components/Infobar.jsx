import {useState, useEffect} from "react"



function Infobar() {

    const [infoLeads, setInfoLeads] = useState([])

useEffect(() => {


    async function infoBarLeads() {
        const res = await fetch("http://localhost:5050/records/summary")

        if (!res.ok) {
             const message = `An error occurred: ${res.statusText}`;
        console.error(message);
        return;
        }

        const infoLead = await res.json()
        setInfoLeads(infoLead)
    }
    infoBarLeads()
return;

}, [])

console.log(infoLeads)

    return (
        <>
            <h1>Hello</h1>
        </>
    )
}

export default Infobar