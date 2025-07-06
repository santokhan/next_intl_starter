'use client'

import locales from "@/i18n/locales";
import { useRouter } from "@/i18n/navigation";

const Header = ({ locale }) => {
    const router = useRouter();

    return (
        <header className="bg-white">
            <div className="flex justify-between gap-4 items-center px-4 h-16 container mx-auto">
                <div>
                    <h1 className="font-bold text-3xl">Logo</h1>
                </div>
                <div>
                    <select
                        name="lang"
                        onChange={(e) => router.push(e.target.value)}
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