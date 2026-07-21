import { GROUPS, MEMBERS } from '../../../data/roster';
import { RosterSlugClient } from './RosterSlugClient';

export function generateStaticParams() {
  const memberSlugs = MEMBERS.map((m) => ({ slug: m.slug }));
  const groupSlugs = GROUPS.map((g) => ({ slug: g.slug }));
  return [...memberSlugs, ...groupSlugs];
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function RosterSlugPage({ params }: PageProps) {
  const { slug } = await params;

  const member = MEMBERS.find((m) => m.slug === slug || m.id === slug);
  const group = GROUPS.find((g) => g.slug === slug || g.id === slug);

  const memberGroup = member ? GROUPS.find((g) => g.id === member.groupId) : undefined;
  const groupMembers = group ? MEMBERS.filter((m) => m.groupId === group.id) : undefined;

  return (
    <RosterSlugClient
      member={member}
      group={group}
      memberGroup={memberGroup}
      groupMembers={groupMembers}
    />
  );
}
