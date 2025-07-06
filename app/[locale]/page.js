// app/[locale]/page.js

'use client'

import { useTranslations } from 'next-intl'

export default function Index() {
  const t = useTranslations('Index')

  return (
    <div>
      <h1>
        {t('title')}
      </h1>
    </div>
  )
}