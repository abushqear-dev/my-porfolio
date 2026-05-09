
const { createClient } = require('@sanity/client');
require('dotenv').config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  apiVersion: '2023-05-03',
});

async function checkPosts() {
  const query = `*[_type == "post"] { title, publishedAt, "slug": slug.current }`;
  const posts = await client.fetch(query);
  console.log(JSON.stringify(posts, null, 2));
}

checkPosts().catch(console.error);
