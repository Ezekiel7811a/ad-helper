import { ReactNode } from "react";

export class MyNode {
  title: string;
  links?: MyNode[];
  content: ReactNode;

  constructor(title: string, children: MyNode[], content: ReactNode) {
    this.title = title;
    this.links = children;
    this.content = content;
  }
}
