import { prisma } from "@/app/db";
import { redirect } from "next/navigation";
import Link from "next/link";
import createNoteFormStyles from "./createNoteForm.module.css";

async function createNote(data: FormData) {
  "use server"
  const title = data.get("title")?.valueOf();
  console.log(title);
  if(typeof title !== "string" || title.length === 0){
    throw new Error("Invalid title.");
  }
  const content = data.get("content")?.valueOf();
  if(typeof content !== "string" || content.length === 0){
    throw new Error("Invalid title.");
  }
  await prisma.note.create({ data: {title, content} })
  redirect("/notes")
}

export default async function NewNotePage() {
  return (
    <div className="flex justify-center">
      <div>
        <h2 className="text-lg font-medium mb-6">Create a new Note</h2>
        <form action={createNote}>
          <div className="mb-4">
            <label className={createNoteFormStyles.formLabel}>Title</label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className={createNoteFormStyles.formField}
            />
          </div>
          <div className="mb-4">
            <label className={createNoteFormStyles.formLabel}>Content</label>
            <textarea
              name="content"
              placeholder="Content"
              className={createNoteFormStyles.formField}
            />
          </div>
          <div className="flex justify-center">
            <Link href=".." className={createNoteFormStyles.formCancelBtn}>Cancel</Link>
            <button type="submit" className={createNoteFormStyles.formBtn}>
              Create Note
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}