'use client'

import locales from "@/i18n/locales";
import { usePathname } from "@/i18n/navigation";

const Header = ({ locale }) => {
    const pathname = usePathname();

    return (
        <header className="bg-white sticky top-0 z-10 h-[var(--header-height)]">
            <div className="flex justify-between gap-4 items-center px-4 h-full container mx-auto">
                <div>
                    <h1 className="font-bold text-3xl">Logo</h1>
                </div>
                <div>
                    <select
                        name="lang"
                        onChange={(e) => {
                            window.location.href = `/${e.target.value}${pathname}`
                        }}
                        defaultValue={locale}
                        className="uppercase"
                    >
                        {locales.map((locale) => (
                            <option key={locale} value={locale}>{locale}</option>
                        ))}
                    </select>
                </div>
            </div>
        </header>
    )
}

export default Header