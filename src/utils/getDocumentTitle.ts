const SITE_TITLE = '카페 어때';

export default function getDocumentTitle(
  pageTitle: string,
  siteTitle = SITE_TITLE
): string {
  return !pageTitle ? siteTitle : `${pageTitle} ← ${siteTitle}`;
}
