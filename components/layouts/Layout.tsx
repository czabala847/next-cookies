import React from "react";
import Head from "next/head";
import { Navbar } from "../ui";

interface Props {
  children: JSX.Element | JSX.Element[];
  title?: string;
}

export const Layout: React.FC<Props> = ({
  children,
  title = "Cookie Master",
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <nav>
        <Navbar />
      </nav>
      <main style={{ padding: "20px 50px" }}>{children}</main>
    </>
  );
};
