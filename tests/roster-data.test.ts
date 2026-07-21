import { describe, it, expect } from 'vitest';
import { GROUPS, MEMBERS, DISCOGRAPHY } from '../apps/web/data/roster';

describe('Roster Data Integrity & Unified Works Architecture', () => {
  it('should have 2 active groups: VALLEY (5 members) and PRIX (4 members)', () => {
    const valley = GROUPS.find((g) => g.id === 'valley');
    const prix = GROUPS.find((g) => g.id === 'prix');

    expect(valley).toBeDefined();
    expect(valley?.memberCount).toBe(5);

    expect(prix).toBeDefined();
    expect(prix?.memberCount).toBe(4);
  });

  it('should have 9 individual member profiles in total', () => {
    expect(MEMBERS).toHaveLength(9);

    const valleyMembers = MEMBERS.filter((m) => m.groupId === 'valley');
    const prixMembers = MEMBERS.filter((m) => m.groupId === 'prix');

    expect(valleyMembers).toHaveLength(5);
    expect(prixMembers).toHaveLength(4);
  });

  it('should ensure every member has a valid pre-existing discipline and unified works array', () => {
    MEMBERS.forEach((member) => {
      expect(member.name).toBeTruthy();
      expect(member.preExistingDiscipline).toBeTruthy();
      expect(member.works.length).toBeGreaterThan(0);
      expect(member.works[0].title).toBeTruthy();
      expect(member.works[0].discipline).toBeTruthy();
    });
  });

  it('should support multi-disciplinary work items across music, dance, visual art, and production', () => {
    const disciplines = MEMBERS.flatMap((m) => m.works.map((w) => w.discipline));
    expect(disciplines).toContain('Contemporary Dance Performance');
    expect(disciplines).toContain('Visual Art & Publication');
    expect(disciplines).toContain('Solo Instrumental LP');
  });
});
