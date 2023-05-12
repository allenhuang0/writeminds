import { Editor } from "@tiptap/react";
import Image from "next/image";
import RichEditor from "~/components/editor";

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <RichEditor />
    </main>
  );
}
