import { Fragment } from "react";

import { Button, Header, IconShoppingBag, Menu, Search } from "@/components";

export default function Home() {
  return (
    <Fragment>
      <Header>
        <section className="px-8 mr-8">
          <h1 className="text-xl font-bold">Geek Store</h1>
        </section>
        <Menu />
        <section className="flex flex-1 justify-end items-center gap-6 pr-10">
          <Search />
          <IconShoppingBag />
          <IconShoppingBag />
        </section>
      </Header>
      <Button>Click me</Button>
    </Fragment>
  );
}
