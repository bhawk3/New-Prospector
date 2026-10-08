import {useState, useEffect} from "react"



function Infobar() {

    const [infoLeads, setInfoLeads] = useState([])

useEffect(() => {


    async function infoBarLeads() {
        const res = await fetch("/records/summary")

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
            <div className="flex gap-4">
                <p className="border rounded-lg p-5 text-center">
                    <span className="text-sm">Total Leads</span> <br />
                    <span className="text-lg">{infoLeads.totalLeads}</span>
                </p>
                <p className="border rounded-lg p-5 text-center">
                    <span className="text-sm">Total Qualified Leads</span><br /> 
                    <span className="text-lg">{infoLeads.totalQualifiedLeads}</span>
                </p>
                <p className="border rounded-lg p-5 text-center">
                    <span className="text-sm">Total Pipeline Value</span><br /> 
                    <span className="text-lg">{infoLeads.totalPipelineValue}</span>
                </p>
            </div>
        </>
    )
}

export default Infobar