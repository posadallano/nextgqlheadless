export default function Home ( {posts} ){

  return (
    <div>
      <h1>Hello from the Homepage</h1>
      {
        posts.nodes.map(post => {
          return (
            <ul key={post.slug}>
              <li>{post.title}</li>
            </ul>
          )
        })
     }
     </div>
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
