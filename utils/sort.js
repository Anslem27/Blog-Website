
export const sortByDate = (a, b) => {
    return new Date(b.content.date) - new Date(a.content.date)
}

