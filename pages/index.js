import { pokeApi } from '../api/pokeApi'
import CardPoke from '../components/CardPoke'
import { Layout } from '../components/Layout'

export default function HomePage({ pokemons }) {

  return (
    <>
      <Layout namePage="Home Page" content="Home Page" >
        <ol>
          {pokemons.map(({ id, name, img, url }) =>

          (
            <CardPoke key={id} id={id} name={name} img={img} url={url} />

          ))}
        </ol>
      </Layout>
    </>
  )
}

export const getStaticProps = async (context) => {

  const { data } = await pokeApi.get('/pokemon?limit=151')
  //le añado el id y la imagen
  const pokemons = data.results.map((e, i) => ({
    ...e,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }))

  console.log(pokemons);

  return {
    props: {
      pokemons,

    }, // will be passed to the page component as props
  }
}
