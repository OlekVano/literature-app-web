export function isLink(str: string): boolean {
    return (str.startsWith('https://') || str.startsWith('http://'))
}