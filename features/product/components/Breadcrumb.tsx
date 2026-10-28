import Link from "next/link"

interface BreadcrumbItem {
    label: string
    href?: string
}

const Breadcrumb = ({ items }: { items: BreadcrumbItem[] }) => (
    <nav aria-label="breadcrumb">
        <ul className="flex flex-col sm:flex-row sm:gap-x-2 text-lg text-gray-500 capitalize">
            {items.map(({ label, href }, index) => (
                <li key={`${label}-${index}`} className="flex gap-x-2">
                    {href ? (
                        <Link href={href} className="hover:text-black transition-colors duration-150">
                            {label}
                        </Link>
                    ) : (
                        <span>{label}</span>
                    )}
                    {index < items.length - 1 && <span className="hidden sm:inline">/</span>}
                </li>
            ))}
        </ul>
    </nav>
)

export default Breadcrumb