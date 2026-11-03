import test from 'node:test';
import assert from 'node:assert/strict';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { isValidEmail, getKarachiTimeString, getServicesByCategory, createMailtoLink } from './portfolio';

test('portfolio profile data matches required client specification', () => {
  assert.equal(PORTFOLIO_DATA.profile.name, 'Muhammad Bilal');
  assert.equal(PORTFOLIO_DATA.profile.experienceYears, 6);
  assert.equal(PORTFOLIO_DATA.profile.email, 'chabalpower123@gmail.com');
  assert.equal(PORTFOLIO_DATA.profile.location, 'Karachi, Pakistan');
  assert.equal(PORTFOLIO_DATA.profile.headline, 'Creativity Beyond Boundaries.');
});

test('graphic design services list contains exact 10 required items', () => {
  assert.equal(PORTFOLIO_DATA.graphicDesignServices.length, 10);
  const titles = PORTFOLIO_DATA.graphicDesignServices.map(s => s.title);
  assert.ok(titles.includes('Wedding Cards'));
  assert.ok(titles.includes('Logo Design'));
  assert.ok(titles.includes('Menu Design'));
  assert.ok(titles.includes('Flyers & Posters'));
  assert.ok(titles.includes('Flex & Banners'));
  assert.ok(titles.includes('Business Cards'));
  assert.ok(titles.includes('Social Media Designs'));
  assert.ok(titles.includes('Stage & Event Designs'));
  assert.ok(titles.includes('Brochures & Catalogues'));
  assert.ok(titles.includes('Photo Editing'));
});

test('video editing services list contains exact 9 required items', () => {
  assert.equal(PORTFOLIO_DATA.videoEditingServices.length, 9);
  const titles = PORTFOLIO_DATA.videoEditingServices.map(s => s.title);
  assert.ok(titles.includes('YouTube Videos'));
  assert.ok(titles.includes('Instagram Reels'));
  assert.ok(titles.includes('Promotional Videos'));
  assert.ok(titles.includes('Wedding Videos'));
  assert.ok(titles.includes('Documentary Videos'));
  assert.ok(titles.includes('Motion Graphics'));
  assert.ok(titles.includes('Transitions & Effects'));
  assert.ok(titles.includes('Colour Grading'));
  assert.ok(titles.includes('Titles & Typography'));
});

test('software list contains all 6 required tools with CorelDRAW included', () => {
  assert.equal(PORTFOLIO_DATA.software.length, 6);
  const names = PORTFOLIO_DATA.software.map(s => s.name);
  assert.ok(names.includes('Adobe Photoshop'));
  assert.ok(names.includes('Adobe Illustrator'));
  assert.ok(names.includes('CorelDRAW'));
  assert.ok(names.includes('Adobe Premiere Pro'));
  assert.ok(names.includes('Adobe After Effects'));
  assert.ok(names.includes('Canva'));
});

test('creative process contains 4 stages', () => {
  assert.equal(PORTFOLIO_DATA.process.length, 4);
  assert.equal(PORTFOLIO_DATA.process[0].title, 'Understand');
  assert.equal(PORTFOLIO_DATA.process[1].title, 'Plan');
  assert.equal(PORTFOLIO_DATA.process[2].title, 'Create');
  assert.equal(PORTFOLIO_DATA.process[3].title, 'Refine');
});

test('utility functions perform validation and formatting', () => {
  assert.equal(isValidEmail('chabalpower123@gmail.com'), true);
  assert.equal(isValidEmail('invalid-email'), false);

  const karachiTime = getKarachiTimeString(new Date('2026-11-03T12:00:00Z'));
  assert.ok(typeof karachiTime === 'string');
  assert.ok(karachiTime.length > 0);

  const allServices = getServicesByCategory('all');
  assert.equal(allServices.length, 19);

  const mailto = createMailtoLink('Project Inquiry', 'Hello Muhammad Bilal');
  assert.ok(mailto.startsWith('mailto:chabalpower123@gmail.com'));
  assert.ok(mailto.includes('Project+Inquiry') || mailto.includes('Project%20Inquiry'));
});
