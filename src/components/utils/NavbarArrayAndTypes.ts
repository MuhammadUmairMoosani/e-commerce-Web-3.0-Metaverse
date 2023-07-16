export interface NavbarItemType {
    label: string,
    href: string,
    isDropDown: boolean,
    dropDownData?: Array<NavbarItemType>
}

export const NavbarArray: Array<NavbarItemType> = [
    {
        label: 'Female',
        href: '/female',
        isDropDown: true,
        dropDownData: [
            {
                label: 'Dresses',
                href: '/female/dresses',
                isDropDown: true,
            },
            {
                label: 'Shirts',
                href: '/female/dresses',
                isDropDown: true,
            },
            {
                label: 'Pent',
                href: '/female/dresses',
                isDropDown: true,
            },
            {
                label: 'Jackets',
                href: '/female/jackets',
                isDropDown: true,
            },
        ]
    },
    {
        label: 'Male',
        href: '/male',
        isDropDown: true,
        dropDownData: [
            {
                label: 'Shorts',
                href: '/male/shorts',
                isDropDown: true,
            },
            {
                label: 'Shirts',
                href: '/male/dresses',
                isDropDown: true,
            },
            {
                label: 'Pent',
                href: '/male/dresses',
                isDropDown: true,
            },
            {
                label: 'Jackets',
                href: '/male/jackets',
                isDropDown: true,
            },
        ]
    },
    {
        label: 'Kids',
        href: '/kids',
        isDropDown: false,
    },
    {
        label: 'All Products',
        href: '/allproducts',
        isDropDown: false,
    },
]
