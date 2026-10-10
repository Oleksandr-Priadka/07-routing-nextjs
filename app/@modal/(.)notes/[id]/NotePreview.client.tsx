'use client';

import { Note } from '@/types/note';
import { useRouter } from 'next/navigation';
import Modal from '@/components/Modal/Modal';
import css from './NotePreview.module.css';

interface NotePreviewClientProps {
  note: Note;
}

export default function NotePreviewClient({ note }: NotePreviewClientProps) {
  const router = useRouter();

  return (
    <Modal onClose={() => router.back()}>
      <div className={css.container}>
        <h2 className={css.title}>{note.title}</h2>
        <span className={css.tag}>{note.tag}</span>
        <p className={css.content}>{note.content}</p>
      </div>
    </Modal>
  );
}