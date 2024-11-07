import { ReactNode } from "react";

export class MyNode {
  title: string;
  links: string[];
  content: ReactNode;

  constructor(title: string, links: string[], content: ReactNode) {
    this.title = title;
    this.links = links;
    this.content = content;
  }
}
