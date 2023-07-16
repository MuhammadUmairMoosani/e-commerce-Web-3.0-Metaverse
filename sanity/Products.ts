export default {
    name: 'products',
    type: 'document',
    title: 'Products',
    fields: [
        {
            name: 'productName',
            type: 'string',
            title: 'ProductName'
        },
        {
            title:"Slug",
            name:"slug",
            type:'slug',
            options: {
                source:'productName',
                maxLength: 200,
                slugify: (input: any) => input.toLowerCare().replace(/\s+/g, '-').slice(0, 200)
            }   
        },
        {
            name:"description",
            type:"array",
            title:"Description",
            of: [
                {
                    type:"block"
                }
            ]
        },
        {
            name: 'image',
            type:'array',
            title:"Image",
            of: [
                {
                    type:'image',
                    fields: [
                        {
                            name:"alt",
                            type:"text",
                            title:"Alternative text"
                        }
                    ]
                }
            ]
        },
        {
            name:"productTypes",
            type: "array",
            title:"ProductType",
            of: [{type:'string'}]
        },
        {
            name:"price",
            type:"number",
            title:"Price"
        }
    ]
}