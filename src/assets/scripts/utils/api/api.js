/* Blog And repeatable page */ 

// Get all Articles 
export const getAllArticles = (type, data) => {
    return `*[_type == "${type}"]`;
}

export const getDoc = (type) => {
    return `*[_type == "${type}" && _id == "${type}"][0]`
}

export const getAllPagesMenu = () => {
    return "*[defined(title) && (_type match 'solutions' || _type match 'services' || _type match 'technologies' || _type match 'ingenierie')]{title, slug, _type}"
}

export const getAllEditablePages = () => {
    return "* [defined(title) && (_type match 'solutions' || _type match 'services' || _type match 'technologies' || _type match 'ingenierie')]"
}


///////////////////////////