import NotesClient from './Notes.client';

interface PageProps {
  params: Promise<{ slug?: string[] }>;
}

export default async function NotesPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug?.[0] || 'all';

  return <NotesClient initialTag={slug} />;
}