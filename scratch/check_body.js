const { createClient } = require('@sanity/client');
require('dotenv').config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  apiVersion: '2023-05-03',
});

async function checkPosts() {
  const query = `*[_type == "post"] { title, body, "slug": slug.current }`;
  const posts = await client.fetch(query);
  for (const post of posts) {
    console.log(`\n--- ${post.title} ---`);
    if (!post.body) {
      console.log("body is null or undefined");
      continue;
    }
    if (!Array.isArray(post.body)) {
      console.log("body is not an array:", typeof post.body);
      continue;
    }
    const blocks = post.body.filter(b => b._type === 'block');
    let words = 0;
    blocks.forEach(b => {
      if (b.children) {
        b.children.forEach(c => {
          words += c.text ? c.text.split(/\s+/).filter(Boolean).length : 0;
        });
      }
    });
    console.log("Blocks count:", post.body.length);
    console.log("Word count:", words);
  }
}

checkPosts().catch(console.error);
