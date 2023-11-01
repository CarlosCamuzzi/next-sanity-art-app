"use client";

import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

export default function LoginButton() {
  const { data: session } = useSession();

  return (
    <>
      {!session ? (
        <Button color="primary" variant="flat" onPress={() => signIn("google")}>
          Login
        </Button>
      ) : (
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              color="success"
              size="sm"
              src={`${session.user?.image}`}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem
              textValue={`${session.user?.name}`}
              key="profile"
              className="h-14 gap-2"
            >
              <p className="font-semibold">{session.user?.name}</p>
            </DropdownItem>
            <DropdownItem textValue="comentarios" key="comentarios">
              Meus Comentários
            </DropdownItem>
            <DropdownItem textValue="Sobre" key="sobre">
              Sobre
            </DropdownItem>
            <DropdownItem
              textValue="Logout"
              key="logout"
              color="danger"
              onClick={() => signOut()}
            >
              Logout
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      )}
    </>
  );
}
