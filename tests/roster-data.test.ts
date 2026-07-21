import { describe, it, expect } from 'vitest';
import { GROUPS, MEMBERS, DISCOGRAPHY } from '../apps/web/data/roster';

describe('Roster Data Integrity & Person-First Structure', () => {
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

  it('should ensure every member has a valid pre-existing discipline and solo sovereignty project', () => {
    MEMBERS.forEach((member) => {
      expect(member.name).toBeTruthy();
      expect(member.preExistingDiscipline).toBeTruthy();
      expect(member.soloSovereignty.length).toBeGreaterThan(0);
      expect(member.soloSovereignty[0].title).toBeTruthy();
    });
  });

  it('should have valid discography catalog entries with catalog numbers', () => {
    expect(DISCOGRAPHY.length).toBeGreaterThan(0);
    DISCOGRAPHY.forEach((release) => {
      expect(release.catalogNumber).toMatch(/^ATM-\d{3} \/ (LP|EP|Single)$/);
    });
  });
});
