import { legalDocs } from './legal';
import { guides } from './guides';
import { institutionnelDocs } from './institutionnel';

/** Tous les documents, dans l'ordre d'importance. */
export const allDocs = [...legalDocs, ...guides, ...institutionnelDocs];

/** Accès direct par slug — utilisé par le routeur. */
export const docBySlug = Object.fromEntries(allDocs.map((d) => [d.slug, d]));

export { legalDocs, guides, institutionnelDocs };
