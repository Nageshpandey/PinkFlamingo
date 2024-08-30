import { createSlice } from '@reduxjs/toolkit'
import Rectangle_1 from '../../assets/productsimg/Rectangle_77.png'
import Rectangle_2 from '../../assets/productsimg/Rectangle_77-1.png'
import Rectangle_3 from '../../assets/productsimg/Rectangle_78.png'
import Rectangle_4 from '../../assets/productsimg/Rectangle_79.png'
import Rectangle_5 from '../../assets/productsimg/Rectangle_80.png'
import Rectangle_6 from '../../assets/productsimg/Rectangle_80-1.png'
import Rectangle_7 from '../../assets/productsimg/Rectangle_80-2.png'
import Rectangle_8 from '../../assets/productsimg/Rectangle_81.png'
import Rectangle_9 from '../../assets/productsimg/Rectangle_81-1.png'
import Rectangle_10 from '../../assets/productsimg/Rectangle_81-2.png'
import Rectangle_11 from '../../assets/productsimg/Rectangle_82.png'
import Rectangle_12 from '../../assets/productsimg/Rectangle_82-1.png'
import Rectangle_13 from '../../assets/productsimg/Rectangle_82-2.png'
import Rectangle_14 from '../../assets/productsimg/Rectangle_83.png'
import Rectangle_15 from '../../assets/productsimg/Rectangle_83-1.png'
import Rectangle_16 from '../../assets/productsimg/Rectangle_83-2.png'
import Rectangle_17 from '../../assets/productsimg/image 10.svg'
import Rectangle_18 from '../../assets/productsimg/image 11.svg'
import Rectangle_19 from '../../assets/productsimg/image 12.svg'
import Rectangle_20 from '../../assets/productsimg/image 13.svg'
import Rectangle_21 from '../../assets/productsimg/image 14.svg'

const Products = createSlice({
    name: "products_data",
    initialState: {
        products: [
            {
                id: 1001,
                img: Rectangle_1,
                title: 'DHOOP INCENSE CONES',
                desc: '4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use',
                disc_price: 2.05,
                rating: 4,
                stock: 3,
                "label": "HOT" 
            },
            {
                id: 1002,
                img: Rectangle_2,
                title: 'HEM Incense',
                desc: '4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use',
                disc_price: 1.05,
                rating: 4,
                stock: 5,
                "label": "New" 
            },
            {
                id: 1003,
                img: Rectangle_3,
                title: 'Mystic Temple Incense',
                desc: '4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use',
                disc_price: 2.75,
                rating: 4,
                stock: 6,
                "label": "-10%" 
            },
            {
                id: 1004,
                img: Rectangle_4,
                title: 'SAC Incense',
                desc: '4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use',
                disc_price: 5.05,
                rating: 4,
                stock: 0,
                "label": "New" 
            },
            {
                id: 1005,
                img: Rectangle_5,
                title: 'Frankincense and Myrrh',
                desc: '4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use',
                disc_price: 3.05,
                rating: 4,
                stock: 6,
                "label": "New" 
            },
            {
                id: 1006,
                img: Rectangle_6,
                title: 'Eucalyptus INCENSE CONES',
                desc: '4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use',
                disc_price: 10.05,
                rating: 4,
                stock: 8,
                "label": "-10%" 
            },
            {
                id: 1007,
                img: Rectangle_7,
                title: 'Lavender INCENSE CONES',
                desc: '4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use',
                disc_price: 4.05,
                rating: 4,
                stock: 0,
                "label": "New" 
            },
            {
                id: 1008,
                img: Rectangle_8,
                title: 'Sage INCENSE CONES',
                desc: '4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use',
                disc_price: 0.75,
                rating: 4,
                stock: 6,
                "label": "HOT" 
            },
            {
                id: 1009,
                img: Rectangle_9,
                title: 'Frankincense and Myrrh',
                desc: '4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use',
                disc_price: 3.05,
                rating: 4,
                stock: 3,
                "label": "New" 
            },
            {
                id: 1010,
                img: Rectangle_10,
                title: 'Eucalyptus INCENSE CONES',
                desc: '4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use',
                disc_price: 10.05,
                rating: 4,
                stock: 8,
                "label": "-10%" 
            },
            {
                id: 1011,
                img: Rectangle_11,
                title: 'Orange Blossom INCENSE CONES',
                desc: '4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use',
                disc_price: 4.05,
                rating: 4,
                stock: 1,
                "label": "New" 
            },
            {
                id: 1012,
                img: Rectangle_12,
                title: 'Musk INCENSE CONES',
                desc: '4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use',
                disc_price: 0.75,
                rating: 4,
                stock: 7,
                "label": "New" 
            },
            {
                id: 1013,
                img: Rectangle_13,
                title: 'Bergamot and Myrrh',
                desc: '4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use',
                disc_price: 3.05,
                rating: 4,
                stock: 3,
                "label": "HOT" 
            },
            {
                id: 1014,
                img: Rectangle_14,
                title: 'Gardenia INCENSE CONES',
                desc: '4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use',
                disc_price: 10.05,
                rating: 4,
                stock: 'New',
            },
            {
                id: 1015,
                img: Rectangle_15,
                title: 'Yerba Santa INCENSE CONES',
                desc: '4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use',
                disc_price: 4.05,
                rating: 4,
                stock: 3,
                "label": "-10%" 
            },
            {
                id: 1016,
                img: Rectangle_16,
                title: 'Sage INCENSE CONES',
                desc: '4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use',
                disc_price: 0.75,
                rating: 4,
                stock: 5,
                "label": "New" 
            },
            {
                id: 1017,
                img: Rectangle_13,
                title: 'Bergamot and Myrrh',
                desc: '4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use',
                disc_price: 3.05,
                rating: 4,
                stock: 3,
                "label": "New" 

            },
            {
                id: 1018,
                img: Rectangle_14,
                title: 'Gardenia INCENSE CONES',
                desc: '4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use',
                disc_price: 10.05,
                rating: 4,
                stock: 0,
                "label": "New" 

            },
            {
                id: 1019,
                img: Rectangle_15,
                title: 'Yerba Santa INCENSE CONES',
                desc: '4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use',
                disc_price: 4.05,
                rating: 4,
                stock: 3,
                "label": "Hot" 

            },
            {
                id: 1020,
                img: Rectangle_16,
                title: 'Sage INCENSE CONES',
                desc: '4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use',
                disc_price: 0.75,
                rating: 4,
                stock: 5,
                "label": "New" 

            },
        ],

        product_details: {
            id: 1001,
            img: [Rectangle_17, Rectangle_21, Rectangle_19, Rectangle_20, Rectangle_18],
            brand: 'Rashmi Divine Solutions',
            scent: 'Floral',
            availability: 2,
            title: 'Lavender Dhoop Cone Sticks Pack of 100-Piece/Jar by Rashmi Divine',
            key_info: {
                p1: 'Lavender Dhoop sticks activate your senses and relax the nerves, making you less anxious. They also hold the power to cleanse the air.',
                p2: 'Lavender Crafted out of the finest quality ingredients, this leaves a magnificent and alluring fragrance and adds more to your ‘spiritual time',
                p3: `Lavender Dhoop sticks are Charcoal Free Dhoop Sticks with soothing fragrances which don't cause eye irritation and headache`
            },
            desc: `Dhoop incence cone made from natual hurbs and scented.Long lasting enthralling dhoop batti for regular use - encouraging and cheering dhoop incense cones. Use dhoop bati for offering your prayers or while meditating or relaxing. It will unquestionably boost up your confidence, create encouraging environment and purify the atmosphere while spreading the lingering aroma all around. Use it every morning while doing prayers, while meditating or exercising. It's one of the best incense cones that spread mesmerizing fragrance all around. Simply relax and have the time of your lives by getting these incense cones. can we use for spiritual and meditation purpose. Its great fragrance and long lasting effect. Its heavenly aroma encourages your soul and thoughts to be pure and beautiful. For uplifting and purifying the ambience.`,
            mrp: 8.00,
            disc_price: 4.05,
            rating: 4,
            product_info: {
                about: 'Elevate your spirit with our natural herb-infused dhoop incense cones, crafted for profound relaxation and spiritual growth.',
                key_features: [
                    'Natural herbs',
                    'Long-lasting fragrance',
                    'Purifies atmosphere',
                    'Boosts confidence'
                ]
            },
            reviews: [
                {
                    name: 'Nagesh Pandey',
                    profile_picture: Rectangle_16,
                    review_date: '2024-08-30',
                    desc: 'I am absolutely loving these dhoop incense cones! The natural herbs create a calming atmosphere, perfect for my morning meditation sessions. The fragrance is subtle yet uplifting. Highly recommended!'
                },
                {
                    name: 'Mrityunjay Kumar',
                    profile_picture: Rectangle_16,
                    review_date: '2024-08-29',
                    desc: 'These dhoop incense cones have become a staple in my yoga practice. The scent is wonderful and lasts a long time. I have noticed improved focus and relaxation. Only wish they came in more fragrances!'
                },
                {
                    name: 'Rudresh Tripathi',
                    profile_picture: Rectangle_16,
                    review_date: '2024-08-28',
                    desc: 'These handmade dhoop incense cones have transformed my prayer sessions. The natural ingredients and soothing aroma create a sacred space for connection. Beautiful product, exquisite packaging.'
                }
            ],
        }
    }
})

export default Products.reducer