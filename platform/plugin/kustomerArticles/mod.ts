//declare domain variable (hardcoded right now in _resource.json)
declare const domain: string;

//Appends the KB domain to the source and hash ID URL path to generate the full URL
export function createArticleUrl(urlPath:string) {
    if (domain.slice(-1) == "/") {
        //if the user accidentally adds the "/" on the end of the domain url
        const url = `${domain}` + urlPath;
        return url
    }
    else {
        const url = `${domain}` + `/${urlPath}`;
        return url
    }
}