import { GROUPS, MEMBERS, DISCOGRAPHY } from '../../../data/roster';
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

  // Filter releases relevant to this member or group
  const releases = DISCOGRAPHY.filter((release) => {
    if (member) {
      return (
        release.artist.toLowerCase().includes(member.name.toLowerCase()) ||
        release.artist.toLowerCase().includes(member.groupName.toLowerCase())
      );
    }
    if (group) {
      return release.artist.toLowerCase().includes(group.name.toLowerCase());
    }
    return true;
  });

  return (
    <RosterSlugClient
      member={member}
      group={group}
      memberGroup={memberGroup}
      groupMembers={groupMembers}
      releases={releases}
    />
  );
}
