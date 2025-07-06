// i18n.js

export default async function getRequestConfig({ locale }) {
  locale = locale || 'en'
  
  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
}
