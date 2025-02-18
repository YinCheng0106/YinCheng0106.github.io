export default defineEventHandler((event) => {
    const ip = getRequestHeader(event, 'x-forwarded-for') || event.node.req.connection.remoteAddress;
    return { ip };
});
