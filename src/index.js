
export function parse(messages, list = '') {
    if(typeof messages == 'string'){
        list+= messages
    }

    if(typeof messages == 'object'){
        list += '<ul>'
        for(let msg in messages){
            list += '<li>'
            list = `${parse(messages[msg], list)}</li>`
        }
        list += '</ul>'
    } 
    return list
}