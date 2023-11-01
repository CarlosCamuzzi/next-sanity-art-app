import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

type CommentContextProps = {
  children: ReactNode;
};

type CommentItemType = {
  _id: string;
  comment: string;
  date: string;
};

type CommentContextType = {
  comment: CommentItemType[];
  setComment: Dispatch<SetStateAction<CommentItemType[]>>;
};

const initialValue: CommentItemType[] = [];

export const CommentContext = createContext<CommentContextType>({
  comment: initialValue,
  setComment: () => {},
});

export default function CommentContextProvider({
  children,
}: CommentContextProps) {
  const [comment, setComment] = useState(initialValue);

  return (
    <CommentContext.Provider
      value={{
        comment,
        setComment,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
}
