import client from "./client";

const endpoint = "/messages";

const send = (message, listingId) =>
    client.post(endpoint, {
        message,
        listingId
    });

const get = () => client.get(endpoint);

export default {
    send,
    get
};
