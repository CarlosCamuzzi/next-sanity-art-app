// database/getArtsById.ts
import { client } from "@/lib/sanity";

const getArtsById = async (id: string) => {
  console.log(id);
  try {
    const query = `*[_type == "art" && _id == "${id}"]{
      _id,
      title,
      'description': description[0].children[0].text,
      'image':image.asset->url,             
    }`;
    const data = await client.fetch(query);

    console.log(query);
    console.log(data);

    return data;
  } catch (e) {
    console.error(e);
  }
};

export default getArtsById;
