import ResponseInterface from "../interfaces/ResponseInterface";

export async function getData(search: string) {
    const response = await fetch(
        `https://api.burgerfactory.me/products/search?${new URLSearchParams({
            search,
        })}`,
        {
            method: "GET",
        }
    );
    return (await response.json()) as ResponseInterface[];
}
