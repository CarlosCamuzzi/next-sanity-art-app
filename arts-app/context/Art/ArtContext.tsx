import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

type ArtContextProps = {
  children: ReactNode;
};

type ArtItemType = {
  _id: string;
  title: string;
  description: string;
  image: string;
  slug: string;
};

type ArtContextType = {
  artItems: ArtItemType[];
  setArtItems: Dispatch<SetStateAction<ArtItemType[]>>;
};

const initialValue: ArtItemType[] = [];

export const ArtContext = createContext<ArtContextType>({
  artItems: initialValue,
  setArtItems: () => {},
});

export default function ArtContextProvider({ children }: ArtContextProps) {
  const [artItems, setArtItems] = useState(initialValue);

  return (
    <ArtContext.Provider
      value={{
        artItems,
        setArtItems,
      }}
    >
      {children}
    </ArtContext.Provider>
  );
}


// import {
//   Dispatch,
//   ReactNode,
//   SetStateAction,
//   createContext,
//   useState,
// } from "react";

// type ArtContextProps = {
//   children: ReactNode;
// };

// type ArtContextType = {
//   id: string;
//   setId: Dispatch<SetStateAction<string>>;
//   title: string;
//   setTitle: Dispatch<SetStateAction<string>>;
//   description: string;
//   setDescription: Dispatch<SetStateAction<string>>;
//   image: string;
//   setImage: Dispatch<SetStateAction<string>>;
//   slug: string;
//   setSlug: Dispatch<SetStateAction<string>>;
// };

// const initialValue = {
//   id: "",
//   setId: () => {},
//   title: "",
//   setTitle: () => {},
//   description: "",
//   setDescription: () => {},
//   image: "",
//   setImage: () => {},
//   slug: "",
//   setSlug: () => {},
// };

// export const ArtContext = createContext<ArtContextType>(initialValue);

// export default function ArtContextProvider({ children }: ArtContextProps) {
//   const [id, setId] = useState(initialValue.id);
//   const [title, setTitle] = useState(initialValue.title);
//   const [description, setDescription] = useState(initialValue.description);
//   const [image, setImage] = useState(initialValue.image);
//   const [slug, setSlug] = useState(initialValue.slug);

//   return (
//     <ArtContext.Provider
//       value={{
//         id,
//         setId,
//         title,
//         setTitle,
//         description,
//         setDescription,
//         image,
//         setImage,
//         slug,
//         setSlug,
//       }}
//     >
//       {children}
//     </ArtContext.Provider>
//   );
// }
