async function fetchAPI(query, { variables } = {}) {
  const headers = { 'Content-Type': 'application/json' }

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      'Authorization'
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
  }

  const res = await fetch(process.env.WORDPRESS_API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export async function getPost(slug) {
  const data = await fetchAPI(`{
    post(id: "${slug}", idType: SLUG) {
      seo {
        metaDesc
        title
      }
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
        featuredImage {
          node {
            uri
          }
        }
      }
    }`)
  return data
}

export async function getHomePosts(howmany) {
  const data = await fetchAPI(`{
    posts(first: ${howmany}, after: "") {
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
            uri
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
    }
    categories {
      nodes {
        name
        slug
        uri
      }
    }
  }`)
  return data
}

export async function author(author) {
  const data = await fetchAPI(`{
  posts(where: {authorName: "${author}"}, first: 100) {
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
            uri
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
  }
  categories {
    nodes {
      name
      slug
      uri
    }
  }
}`)
  return data
}

export async function category(category) {
  const data = await fetchAPI(`{
    posts(where: {categoryName: "${category}"}, first: 10) {
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
            uri
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
    }
    categories {
      nodes {
        name
        slug
        uri
      }
    }
  }`)
  return data
}

export async function getAllAuthors() {
  const data = await fetchAPI(`{
    posts {
      edges {
        node {
          author {
            node {
              uri
            }
          }
        }
      }
    }
  }`)
  return data?.posts
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`{
    posts(first: 10000) {
      edges {
        node {
          slug
        }
      }
    }
  }`)
  return data?.posts
}

export async function getAllTags() {
  const data = await fetchAPI(`
    {
      tags {
        nodes {
          name
          uri
        }
      }
    }
  `)
  return data?.tags
}

export async function getAllCategories() {
  const data = await fetchAPI(`
  {
    categories {
      edges {
        node {
          id
          name
          uri
        }
      }
    }
  }
  `)
  return data
}
