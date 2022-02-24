export default function Home ( {posts} ){

  console.log({posts});

  return (
      <h1>Hello from the Homepage</h1>
  )
}

export async function getStaticProps(){

  const res = await fetch('http://localhost/wpnextgql/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          query: `
          query HomePageQuery {
            posts {
              nodes {
                slug
                title
              }
            }
          }
          `,
      })
  })

  const json = await res.json()

  return {
    props: {
        posts: json.data.posts,
    },
  }
}
