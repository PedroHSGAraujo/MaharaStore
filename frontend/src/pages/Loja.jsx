import React from 'react'
import { Hero } from '../components/hero/Hero'
import { Popular } from '../components/popular/Popular'
import { Offers } from '../components/ofertas/Offers'
import { NewCollections } from '../components/novascolecoes/NewCollections'
import { NewsLetter } from '../components/newsletter/NewsLetter'
import { Caroussel } from '../components/carrosselcircular/Caroussel'

export const Loja = () => {
  return (
    <div>
      <Hero />
      <Caroussel />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  )
}
