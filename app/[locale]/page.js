'use client'

import { useTranslations } from 'next-intl'

export default function Index() {
  const t = useTranslations('Index')

  return (
    <section className="height-without-navbar flex flex-col justify-center items-center bg-gradient-to-r from-blue-50 to-indigo-100 px-6">
      <div className="container max-w-4xl text-center py-20">
        <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-900 drop-shadow-lg mb-6">
          {t('title')}
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-indigo-700 mb-8">
          {t('subtitle')}
        </h2>
        <p className="text-lg md:text-xl text-indigo-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          {t('description')}
        </p>
        <button
          className="px-8 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition duration-300 ease-in-out
          focus:outline-none focus:ring-4 focus:ring-indigo-300"
          aria-label={t('cta')}
        >
          {t('cta')}
        </button>
      </div>
    </section>
  )
}