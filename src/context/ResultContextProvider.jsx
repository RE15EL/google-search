import { createContext, useContext, useState } from "react"

const ResultContext = createContext();

export function ResultContextProvider( {children} ) {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [term, setTerm] = useState('');
    const url = 'https://google-search74.p.rapidapi.com/?query=Nike&limit=40';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9975721b39mshf5d87657cbfc1f8p1bddacjsn297e5a1181e5',
            'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
        }
    };

    const getResults = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(url, options);
            const data = await response.json();        
            setResults(data.results);
            setIsLoading(false);
            
            console.log(results);
        } catch (error) {
            console.error(error);
        }
         
    }

  return (
    <ResultContext.Provider value={ {getResults, isLoading, setIsLoading, results, setResults, term, setTerm} }>
        {children}
    </ResultContext.Provider>
  )
}

export const useResultContext = () => useContext(ResultContext);
