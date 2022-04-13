// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }

const Handler = (_req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json(
        [
            {
                "id": 1,
                "img": "/logo512.png",
                "content": "this is test text...",
                "title": "Example Title..."
            },
            {
                "id": 2,
                "img": "/logo512.png",
                "content": "this is test text...",
                "title": "Example Title..."
            },
            {
                "id": 3,
                "img": "/logo512.png",
                "content": "this is test text...",
                "title": "Example Title..."
            },
            {
                "id": 4,
                "img": "/logo512.png",
                "content": "this is test text...",
                "title": "Example Title..."
            },
            {
                "id": 5,
                "img": "/logo512.png",
                "content": "this is test text...",
                "title": "Example Title..."
            },
            {
                "id": 6,
                "img": "/logo512.png",
                "content": "this is test text...",
                "title": "Example Title..."
            }
        ]
    )
}
export default Handler
