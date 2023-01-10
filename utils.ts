export function isLink(str: string) {
    return (str.startsWith('https://') || str.startsWith('http://'))
}