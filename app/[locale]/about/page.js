// app/[locale]/about/page.js

'use client'

import { useTranslations } from 'next-intl'

export default function About() {
  const t = useTranslations('About')

  return (
    <section className="py-8 bg-gray-50 height-without-navbar flex items-center">
      <div className="container mx-auto px-4 max-w-4xl bg-white shadow-md rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">{t('title')}</h1>
        <p className="text-xl text-gray-700 mb-6">{t('headline')}</p>

        <div className="space-y-6 text-gray-600">
          <div>
            <h2 className="text-2xl font-semibold mb-2">{t('mission').split('.')[0]}</h2>
            <p>{t('mission')}</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">{t('vision').split('.')[0]}</h2>
            <p>{t('vision')}</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">{t('team_heading')}</h2>
            <p>{t('team_description')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}