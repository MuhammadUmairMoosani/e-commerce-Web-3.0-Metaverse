export interface NavbarItemType {
    label: string,
    href: string,
    isDropDown: boolean,
    dropDownData?: Array<NavbarItemType>
}

export const NavbarArray: Array<NavbarItemType> = [
    {
        label: 'Female',
        href: '/female/female',
        isDropDown: true,
        dropDownData: [
            {
                label: 'Dresses',
                href: '/female/dress',
                isDropDown: true,
            },
            {
                label: 'T-Shirts',
                href: '/female/t-shirt',
                isDropDown: true,
            },
            {
                label: 'Pent',
                href: '/female/pent',
                isDropDown: true,
            },
            {
                label: 'Jackets',
                href: '/female/jacket',
                isDropDown: true,
            },
            {
                label: 'Sweater',
                href: '/female/sweater',
                isDropDown: true,
            },
        ]
    },
    {
        label: 'Male',
        href: '/male/male',
        isDropDown: true,
        dropDownData: [
            {
                label: 'Sweaters',
                href: '/male/sweater',
                isDropDown: true,
            },
            {
                label: 'Jackets',
                href: '/male/jacket',
                isDropDown: true,
            },
        ]
    },
    {
        label: 'Kids',
        href: '/kids/kids',
        isDropDown: false,
    },
    {
        label: 'All Products',
        href: '/allproducts',
        isDropDown: false,
    },
]
