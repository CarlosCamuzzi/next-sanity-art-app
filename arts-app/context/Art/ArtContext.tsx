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

