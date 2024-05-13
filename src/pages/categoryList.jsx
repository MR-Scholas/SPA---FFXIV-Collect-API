import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import InfoCard from "../components/infocard";

export default function CategoryList (props) {
    const params=useParams()
    const category=params.category
    const url=`https://ffxivcollect.com/api/${category}`
    const [subject,setSubject]=useState('null')

    const getSubject=async ()=>
    {
        try
        {
            setSubject('null')
            const response=await fetch(url)
            const data=await response.json()
            setSubject(data)
        } catch(e) { console.error(e) }
    }

    useEffect(()=>{ getSubject() },[category])

    const loaded=()=>
    {
        // if (!subject || !subject.results) {
        //     return <div>No items found</div>;
        // }
        
        const items=subject.results
        return(
            <div>
                {items.map((subj)=>
                    {
                        return(
                            <InfoCard
                                key={subj.id}
                                name={subj.name}
                                icon={subj.icon}
                                patch={subj.patch}
                                owned={subj.owned}
                            />
                        )
                    })}
            </div>
        )
    }

    const loading=()=>
    {
        { return <h1>Loading...</h1> }
    }

    return (subject==='null' ? loading() : loaded())
  }