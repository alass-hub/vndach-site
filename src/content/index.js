import { legalDocs } from './legal.js';
import { guides } from './guides.js';
import { institutionnelDocs } from './institutionnel.js';

export const allDocs = [...legalDocs, ...guides, ...institutionnelDocs];
export const docBySlug = Object.fromEntries(allDocs.map((d) => [d.slug, d]));
export { legalDocs, guides, institutionnelDocs };