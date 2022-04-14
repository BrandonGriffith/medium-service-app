import type { NextApiRequest, NextApiResponse } from 'next'


const Handler = (_req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json(
                            [
                                {
                                    id: 1,
                                    img: "https://images.freeimages.com/images/large-previews/5fe/landscape-1387468.jpg",
                                    content: "this is test text...",
                                    title: "Example Title..."
                                },
                                {
                                    id: 2,
                                    img: "https://images.freeimages.com/images/large-previews/122/landscape-1314405.jpg",
                                    content: "this is test text...",
                                    title: "Example Title..."
                                },
                                {
                                    id: 3,
                                    img: "https://images.freeimages.com/images/large-previews/d5d/landscape-1363646.jpg",
                                    content: "this is test text...",
                                    title: "Example Title..."
                                },
                                {
                                    id: 4,
                                    img: "https://images.freeimages.com/images/large-previews/7d9/straw-1193024.jpg",
                                    content: "this is test text...",
                                    title: "Example Title..."
                                },
                                {
                                    id: 5,
                                    img: "https://images.freeimages.com/images/large-previews/2c4/textures-1198841.jpg",
                                    content: "this is test text...",
                                    title: "Example Title..."
                                },
                                {
                                    id: 6,
                                    img: "https://images.freeimages.com/images/large-previews/732/textures-2-1169773.jpg",
                                    content: "this is test text...",
                                    title: "Example Title..."
                                }
                            ]
                        )
}
export default Handler
