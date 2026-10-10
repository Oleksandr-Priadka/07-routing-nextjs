import { fetchNoteById } from '@/lib/api';
import css from './NoteDetails.module.css';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function NoteDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const note = await fetchNoteById(id);

  return (
    <main className={css.container}>
      <div className={css.noteCard}>
        <h1 className={css.title}>{note.title}</h1>
        <span className={css.tag}>{note.tag}</span>
        <p className={css.content}>{note.content}</p>
      </div>
    </main>
  );
}