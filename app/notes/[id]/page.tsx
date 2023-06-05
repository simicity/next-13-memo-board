import { prisma } from "@/app/db";
import Link from "next/link";
import Note from "../Note";
import ErrorPage from "./error";

function getNote(id: string) {
  if(typeof id !== "string" || id.length === 0){
    throw new Error("Invalid title.");
  }
  return prisma.note.findUnique({ where: {id: id} });
}

export default async function NotePage({ params }: any) {
  const note = await getNote(params.id);

  return (
    <>
      {note ? (
        <div className="m-6">
          <h1 className="text-sm ml-2 mb-4">Notes/{note.id}</h1>
          
          <Note note={note}/> 
        </div>
      ): (
        <ErrorPage />
      )}
      <Link
        className="hover:bg-blue-200 text-black ml-6 py-2 px-4 rounded focus:outline-none dark:text-white"
        href="/notes"
      >
        Back
      </Link>
    </>
  );
}
