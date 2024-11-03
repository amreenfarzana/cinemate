import { useSearchParams } from 'react-router-dom';
import React from 'react'
import { Card } from '../components'
import { useFetch } from '../hooks/useFetch';
import { useTitle } from '../hooks/useTitle';
export const Search = ({apipath}) => {
    
    const [searchParams] = useSearchParams();
    const queryTerm = searchParams.get("q");
    const {data : movies} = useFetch(apipath,queryTerm);
    useTitle(`search results for ${queryTerm}`);
  return (
    <div>
       <main>
        <section className='py-7'>
            <p className='text-3xl text-gray-700 dark:text-white'>{movies.length === 0 ? `No results found for '${queryTerm}'` : `Results for '${queryTerm}'`} </p>
        </section>
        <section className="max-w-7xl mx-auto py-7">
            <div className="flex justify-start flex-wrap">
                { movies.map((movie) => (
                    <Card key={movie.id} movie={movie}/>
                ))}
                

            </div>
        </section>
        </main>
    </div>
  )
}

