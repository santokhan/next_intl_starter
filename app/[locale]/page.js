// app/[locale]/page.js

'use client'

import { useTranslations } from 'next-intl'

export default function Index() {
  const t = useTranslations('Index')

  return (
    <section>
      <div className='container mx-auto px-4'>
        <h1>{t('title')}</h1>
      </div>
    </section>
  )
}