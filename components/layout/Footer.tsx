import { ShoppingBag } from 'lucide-react'
import React from 'react'

const socialLinks = [
    {
        name: 'Facebook',
        href: '#',
        bg: 'bg-[#3b5998]',
        viewBox: '0 0 24 24',
        icon: (
            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        ),
    },
    {
        name: 'Twitter',
        href: '#',
        bg: 'bg-black',
        viewBox: '0 0 24 24',
        icon: (
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        ),
    },
    {
        name: 'Instagram',
        href: '#',
        bg: 'bg-[#8a5a44]',
        viewBox: '0 0 24 24',
        icon: (
            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
        ),
    },
    {
        name: 'YouTube',
        href: '#',
        bg: 'bg-[#e0102f]',
        viewBox: '0 0 24 24',
        icon: (
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        ),
    },
]

const columns = [
    {
        title: 'Get to Know Us',
        links: [
            { label: 'About Us', href: '#' },
            { label: 'FAQs', href: '#' },
        ],
    },
    {
        title: 'Shop',
        links: [
            { label: 'Recently Viewed', href: '#' },
            { label: 'Featured Products', href: '#' },
            { label: 'Top Products', href: '#' },
            { label: 'New Arrivals', href: '#' },
            { label: 'Offers', href: '#' },
        ],
    },
    {
        title: 'Useful Links',
        links: [
            { label: 'Track Order', href: 'track-your-order' },
            { label: 'Latest News', href: '#' },
            { label: 'Privacy Policy', href: '#' },
        ],
    },
]

// ===== أيقونات الدفع (SVG جوه الكود، مفيش صور خارجية) =====
const MastercardIcon = () => (
    <svg viewBox="0 0 64 44" className="h-11 w-16" aria-label="Mastercard">
        <rect width="64" height="44" rx="4" fill="#000" />
        <circle cx="26" cy="22" r="11" fill="#eb001b" />
        <circle cx="38" cy="22" r="11" fill="#f79e1b" />
        <path d="M32 12.9a11 11 0 010 18.2 11 11 0 010-18.2z" fill="#ff5f00" />
    </svg>
)

const VisaIcon = () => (
    <svg viewBox="0 0 64 44" className="h-11 w-16" aria-label="Visa">
        <rect width="64" height="44" rx="4" fill="#000" />
        <text x="32" y="29" textAnchor="middle" fontSize="18" fontWeight="800" fontStyle="italic" fill="#fff" fontFamily="Arial, sans-serif">
            VISA
        </text>
    </svg>
)

const PayPalIcon = () => (
    <svg viewBox="0 0 64 44" className="h-11 w-16" aria-label="PayPal">
        <rect width="64" height="44" rx="4" fill="#0070ba" />
        <text x="32" y="32" textAnchor="middle" fontSize="26" fontWeight="800" fontStyle="italic" fill="#fff" fontFamily="Arial, sans-serif">
            P
        </text>
    </svg>
)

const paymentMethods = [
    { name: 'Mastercard', Icon: MastercardIcon },
    { name: 'Visa', Icon: VisaIcon },
    { name: 'PayPal', Icon: PayPalIcon },
]

const Footer = () => {
    return (
        <footer className="bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col items-center justify-between gap-6 border-b border-gray-200 py-8 sm:flex-row">
                    <a href="/" className="flex items-center text-4xl font-bold tracking-tight text-gray-900">
                        <ShoppingBag size={40} className=' text-[#661B9E]' />
                        <p className=' text-4xl lowercase mb-2 ml-2'>Market<span className='text-[#661B9E]'>.</span></p>
                    </a>

                    <div className="flex items-center gap-3">
                        <span className="mr-1 font-medium text-gray-900">Social Links</span>
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                rel="noreferrer"
                                target="_blank"
                                className={`flex size-10 items-center justify-center rounded-full text-white transition hover:opacity-80 ${social.bg}`}
                            >
                                <span className="sr-only">{social.name}</span>
                                <svg className="size-5" fill="currentColor" viewBox={social.viewBox} aria-hidden="true">
                                    {social.icon}
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="grid gap-10 py-12 lg:grid-cols-12">

                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-6">
                        {columns.map((col) => (
                            <div key={col.title}>
                                <h3 className="text-xl font-medium text-gray-900">{col.title}</h3>
                                <ul className="mt-6 space-y-4">
                                    {col.links.map((link) => (
                                        <li key={link.label}>
                                            <a
                                                href={link.href}
                                                className="text-gray-500 transition hover:text-gray-900"
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="lg:col-span-6">
                        <div className="rounded-3xl bg-gray-50 p-6 sm:p-8">
                            <div className="flex flex-col gap-6 md:flex-row md:items-center">
                                <div className="md:flex-1">
                                    <h3 className="text-2xl font-semibold text-rose-500">Subscribe Newsletter</h3>
                                    <p className="mt-3 text-gray-500">
                                        Join our mailing list to receive any latest updates and promotions.
                                    </p>
                                </div>

                                <div className="flex flex-col gap-3 sm:flex-row md:flex-1">
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className="w-full rounded-full border border-gray-200 bg-white px-5 py-3 text-sm text-gray-700 outline-none transition focus:border-rose-400"
                                    />
                                    <button
                                        type="button"
                                        className="whitespace-nowrap rounded-full bg-rose-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-rose-600"
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <div className="flex items-center gap-3">
                                <svg className="size-5 text-gray-900" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3A5.25 5.25 0 0012 1.5zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
                                </svg>
                                <h3 className="text-xl font-medium text-gray-900">Safety Payments</h3>
                            </div>

                            <div className="mt-4 flex flex-wrap gap-3">
                                {paymentMethods.map(({ name, Icon }) => (
                                    <div key={name} title={name}>
                                        <Icon />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-200">
                <p className="mx-auto max-w-7xl px-4 py-6 text-center text-gray-500">
                    &copy; {new Date().getFullYear()} <span className="font-semibold text-gray-900">YourBrand</span>. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer