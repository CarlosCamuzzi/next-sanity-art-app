// app/context/comment/CommentContext.tsx
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
  userName: string;
  userEmail: string;
  userPhoto: string;
  artId: string;
  comment: string;
  date: string;
  avaliation: number;
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
