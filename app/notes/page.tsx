
import Link from "next/link";
import { prisma } from "../db";
import Note from "./Note";

function getNotes() {
  return prisma.note.findMany();
}

export default async function NotesPage() {
  const notes = await getNotes();
  return (
    <>
      <div className="flex justify-end mr-6">
        <Link href="/notes/new"
          className="border border-slate-700 dark:border-slate-200 text-slate-700 dark:text-slate-200 px-2 py-1 rounded hover:bg-slate-400 focus-within:bg-slate-400 outline-none"
        >
          New
        </Link>
      </div>
      <div>
        {notes ? (
          <div className="grid grid-cols-3 grid-flow-col gap-6 m-6">
            {notes.map(note => (
              <Note key={note.id} note={note} />
            ))}
          </div>
        ): (
          <p>No note</p>
        )}
      </div>
    </>
  )
}
