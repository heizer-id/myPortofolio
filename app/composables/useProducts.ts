export const useProducts = () => {
    const products = [
        {
            id: 1,
            title: 'Mechanical Keyboard Wireless',
            price: 'Rp 850.000',
            description: 'Keyboard mekanikal wireless dengan switch gateron brown, cocok untuk coding dan gaming.',
            image: 'https://placehold.co/600x400/1e293b/FFFFFF?text=Keyboard',
            link: 'https://shopee.co.id',
            platform: 'Shopee',
            tags: ['Gadget', 'Setup'],
            color: 'bg-orange-500'
        },
        {
            id: 2,
            title: 'Ergonomic Mouse Wireless',
            price: 'Rp 450.000',
            description: 'Mouse ergonomis vertikal untuk mengurangi pegal di pergelangan tangan saat bekerja lama.',
            image: 'https://placehold.co/600x400/1e293b/FFFFFF?text=Mouse',
            link: 'https://tokopedia.com',
            platform: 'Tokopedia',
            tags: ['Gadget', 'Productivity'],
            color: 'bg-green-500'
        },
        {
            id: 3,
            title: 'Monitor Stand Wood',
            price: 'Rp 250.000',
            description: 'Stand monitor dari kayu jati asli, menambah estetika setup meja kerja anda.',
            image: 'https://placehold.co/600x400/1e293b/FFFFFF?text=Stand',
            link: 'https://shopee.co.id',
            platform: 'Shopee',
            tags: ['Desk Setup', 'Decor'],
            color: 'bg-amber-600'
        },
        {
            id: 4,
            title: 'Desk Mat Felt Grey',
            price: 'Rp 120.000',
            description: 'Alas meja bahan felt premium warna abu-abu, minimalis dan nyaman.',
            image: 'https://placehold.co/600x400/1e293b/FFFFFF?text=Desk+Mat',
            link: 'https://tokopedia.com',
            platform: 'Tokopedia',
            tags: ['Desk Setup', 'Accessories'],
            color: 'bg-slate-500'
        },
        {
            id: 5,
            title: 'USB-C Hub 7-in-1',
            price: 'Rp 550.000',
            description: 'Hub USB-C multifungsi dengan port HDMI 4K, USB 3.0, dan power delivery.',
            image: 'https://placehold.co/600x400/1e293b/FFFFFF?text=USB+Hub',
            link: 'https://shopee.co.id',
            platform: 'Shopee',
            tags: ['Tech', 'Accessories'],
            color: 'bg-blue-500'
        }
    ]

    return {
        products
    }
}
