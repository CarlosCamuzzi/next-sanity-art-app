// database/getArts.ts
import { client } from "@/lib/sanity";

const getArts = async () => {
  try {
    const query = `*[_type == "art"] | order(_createdAt desc){
      _id,
      title,
      'description': description[0].children[0].text,
      'image':image.asset->url,  
      _createdAt,
      'slug':slug.current,
      
    }`;
    const data = await client.fetch(query);

    console.log(data);

    return data;
  } catch (e) {
    console.error(e);
  }
};

export default getArts;
