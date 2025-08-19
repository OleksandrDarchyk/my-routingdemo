import {useEffect, useState} from "react";

export default function Book(){
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(()=> {
        const SHOULD_FAIL = true;

        const id = setTimeout(()=>{
            if(SHOULD_FAIL){
                setError("Simulated error: failed to load books");
            }
            setLoading(false);
        },2000)

        return () => clearTimeout(id)
    },[])
        if(loading) return <p>Loading...</p>;
    if(error) return <p>Error: {error}</p>;
    return <p>BookList: ready(no data yet)</p>

}