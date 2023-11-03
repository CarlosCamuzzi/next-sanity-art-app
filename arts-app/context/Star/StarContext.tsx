import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

type StarContextProps = {
  children: ReactNode;
};

type StarItemType = {
  star: number;
};

type StarContextType = {
  star: StarItemType;
  setStar: Dispatch<SetStateAction<StarItemType>>;
};

const initialValue: StarItemType = { star: 0 };

export const StarContext = createContext<StarContextType>({
  star: initialValue,
  setStar: () => {},
});

export default function StarContextProvider({ children }: StarContextProps) {
  const [star, setStar] = useState(initialValue);

  return (
    <StarContext.Provider
      value={{
        star,
        setStar,
      }}
    >
      {children}
    </StarContext.Provider>
  );
}
