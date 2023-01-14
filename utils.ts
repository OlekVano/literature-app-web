export function isLink(str: string): boolean {
    return (str.startsWith('https://') || str.startsWith('http://'))
}

export function isImage(str: string): boolean {
    const imageExtensions = [
        'jpg',
        'jpeg',
        'png',
        'webp',
    ]
    return imageExtensions.some(e => str.endsWith(e))
}