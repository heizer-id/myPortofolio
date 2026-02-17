export const useProjects = () => {
    const projects = [
        {
            slug: 'kpi-digital',
            title: 'Aplikasi KPI Digital',
            client: 'Agensi Internal',
            company: 'Goven Soven',
            type: 'Aplikasi Web',
            year: '2024',
            description: 'Platform inovatif yang memberdayakan bisnis untuk mengelola Key Performance Indicator (KPI) secara efisien, memberikan pengalaman pengguna yang mulus sambil membedakan dirinya dari kompetitor.',
            image: '/images/kpi-digital.png',
            tech: ['Next.js', 'Prisma', 'PostgreSQL'],
            link: 'https://kpi.stahdnj.ac.id/',
            // Fields for listing cards
            tech_stack: 'Next.js, Prisma, PostgreSQL',
            short_desc: 'Performance management system for tracking employee KPIs with real-time analytics.',
            color: 'bg-emerald-500',
            tags: ['Next.js', 'PostgreSQL', 'Prisma'],
            internal_link: '/projects/kpi-digital'
        },
        {
            slug: 'inventaris-digital',
            title: 'Inventaris Digital',
            client: 'STAH Dharma Nusantara Jakarta',
            company: 'Yayasan Dharma Nusantara',
            type: 'Sistem Manajemen',
            year: '2025',
            description: 'Sistem manajemen inventaris komprehensif yang dirancang untuk memperlancar pelacakan aset dan pelaporan, menggunakan Google Apps Script untuk integrasi yang mulus.',
            image: '/images/inventaris-digital.png',
            tech: ['Next.js', 'Google Apps Script'],
            link: 'https://inventaris.stahdnj.ac.id/',
            // Fields for listing cards
            tech_stack: 'Next.js, Google Apps Script',
            short_desc: 'Inventory management system integrated with Google Sheets for easy data handling.',
            color: 'bg-blue-500',
            tags: ['Next.js', 'Google Apps Script'],
            internal_link: '/projects/inventaris-digital',
            showcase_images: [
                '/images/inventaris-showcase.png',
                '/images/inventaris-showcase-2.png',
                '/images/inventaris-showcase-3.png',
                '/images/inventaris-showcase-4.png'
            ]
        },
        {
            slug: 'perpustakaan-digital',
            title: 'Perpustakaan Digital',
            client: 'Instansi Pendidikan',
            company: 'EduCorp',
            type: 'Sistem Perpustakaan',
            year: '2023',
            description: 'Solusi perpustakaan digital yang menawarkan kemudahan akses bagi mahasiswa dan fakultas ke berbagai sumber daya, dengan fitur pencarian canggih dan manajemen peminjaman.',
            image: 'https://placehold.co/800x600/111827/FFFFFF?text=Preview+Perpustakaan',
            tech: ['Next.js', 'PostgreSQL'],
            link: '#',
            // Fields for listing cards
            tech_stack: 'Next.js, PostgreSQL',
            short_desc: 'Digital library system for managing book loans, returns, and digital catalogs.',
            color: 'bg-violet-500',
            tags: ['Next.js', 'PostgreSQL'],
            internal_link: '/projects/perpustakaan-digital'
        }
    ]

    const getProjectBySlug = (slug) => {
        return projects.find(p => p.slug === slug) || null
    }

    return {
        projects,
        getProjectBySlug
    }
}
