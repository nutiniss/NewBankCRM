export type SortDirection = 'asc' | 'desc'

export type SortConfig<TSortKey extends string> = {
    key: TSortKey
    direction: SortDirection
}

export const compareText = (left: string | undefined, right: string | undefined) => (left ?? '').localeCompare(right ?? '', 'pl-PL')

export const compareNumber = (left: number | undefined, right: number | undefined) => (left ?? 0) - (right ?? 0)

export const parsePolishDate = (value: string) => {
    const [datePart] = value.split(',')
    const [day, month, year] = datePart.trim().split('.')

    return new Date(Number(year), Number(month) - 1, Number(day)).getTime()
}

export const comparePolishDate = (left: string, right: string) => parsePolishDate(left) - parsePolishDate(right)

export const getNextSortConfig = <TSortKey extends string>(current: SortConfig<TSortKey>, key: TSortKey): SortConfig<TSortKey> => ({
    key,
    direction: current.key === key && current.direction === 'asc' ? 'desc' : 'asc',
})

export const applySortDirection = (value: number, direction: SortDirection) => direction === 'asc' ? value : -value

export const getSortLabel = <TSortKey extends string>(current: SortConfig<TSortKey>, key: TSortKey) => {
    if (current.key !== key) {
        return '↕'
    }

    return current.direction === 'asc' ? '↑' : '↓'
}
