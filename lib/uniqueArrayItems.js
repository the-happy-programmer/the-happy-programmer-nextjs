export const uniqueArrayItems = (arr) => {
  const cat = arr.map((doc) => doc.meta.categories)
  const tag = arr.map((doc) => doc.meta.tags)
  return {
    categories: [...new Set(cat.concat.apply([], cat))],
    tags: [...new Set(tag.concat.apply([], tag))],
  }
}
