import { fetchNoteById } from '@/lib/api';
import NotePreviewClient from './NotePreview.client';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function InterceptedNotePage({ params }: PageProps) {
  const { id } = await params;
  const note = await fetchNoteById(id);

  return <NotePreviewClient note={note} />;
}