const WORDPRESS_API_URL = "https://thehappyprogrammer.com/graphql"
const WORDPRESS_AUTH_REFRESH_TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvdGhlaGFwcHlwcm9ncmFtbWVyLmNvbSIsImlhdCI6MTYzMDA5MDI0MSwibmJmIjoxNjMwMDkwMjQxLCJleHAiOjE2NjE2MjYyNDEsImRhdGEiOnsidXNlciI6eyJpZCI6IjE3NzExMjM5OCIsInVzZXJfc2VjcmV0IjoiZ3JhcGhxbF9qd3RfNjEyOTM0MDE4ZGQ5YSJ9fX0.mRgAy1EzHvii5aTZzYB_XjyVDTBE50lM7ZviNKHGB0o"

async function fetchAPI(query, { variables } = {}) {
  const headers = { "Content-Type": "application/json" }

  if (WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers["Authorization"] = `Bearer ${WORDPRESS_AUTH_REFRESH_TOKEN}`
  }

  const res = await fetch(WORDPRESS_API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error("Failed to fetch API")
  }
  return json.data
}

export async function getPost(slug) {
  const data = await fetchAPI(
    `{
    post(id: "${slug}", idType: SLUG) {
      author {
          node {
            firstName
            slug
            avatar {
              url
            }
          }
        }
        date
        tags {
          nodes {
            name
          }
        }
        content(format: RENDERED)
        title(format: RAW)
      }
    }
  `
  )
  return data
}

export async function getHomePosts(howmany, next) {
  const data = await fetchAPI(`
  {
    posts(first:${howmany}, after: "${next ? next : ""}") {
      edges {
        node {
          link
          postId
          date
          slug
          title
          tags {
            nodes {
              name
              slug
              uri
            }
          }
          author {
            node {
              firstName
            }
          }
          excerpt(format: RAW)
          categories {
            nodes {
              name
              uri
            }
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
    categories {
      nodes {
        name
        slug
        uri
      }
    }
  }
    `)
  return data
}

export async function searchqr(searchTerm) {
  const data = await fetchAPI(
    `{
      posts(where: {search: "${searchTerm}"}, first: 5, after: "") {
        nodes {
          title
          slug
          tags {
            nodes {
              name
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
    `
  )
  return data?.posts
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
  {
    posts(first: 10000) {
      edges {
        node {
          slug
        }
      }
    }
  }
  `)
  return data?.posts
}
