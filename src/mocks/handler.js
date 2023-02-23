import { rest } from "msw";

const verifyEmail = (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(1000))
}


const submitData = (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(1000))
}

export const handlers = [
    rest.post('/verifyEmail', verifyEmail),
    rest.post('/submitData', submitData)
];