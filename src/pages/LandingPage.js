import React from 'react'
import MainHero from "../components/MainHero/MainHero"
import CategoryDisplay from "../components/CategoryDisplay/CategoryDisplay"
import CardDisplay from "../components/CardDisplay/CardDisplay"
import { useQuery, gql } from '@apollo/client'

const ANIMALS_QUERY = gql`
    {
        animals{
            image
            title
            id
            price
            slug
        }
    }
`

function LandingPage() {

    const {error, loading, data} = useQuery(ANIMALS_QUERY)

    if(loading) return <div>loading...</div>
    if(error) return <div>Some error happen</div>
    console.log(data);

    return (
        <div>
            <MainHero />
            <CategoryDisplay />
            <CardDisplay animals={data.animals} key={data.animals.id}/>
        </div>
    )
}

export default LandingPage
