let REGISTEREDS = {}

module.exports = {
    /**
     * @method
     * @description register svg icons: {
     *      "icon-name": {
     *          viewBox:"0 0 width height", // the viewBox svg attribute
     *          content:'svg content' // svg without <svg> tag
     *      }
     * }
     * @param {String} name name id 
     * @param {{viewBox?, content}} definition  
     */
    set(name, definition) {
        REGISTEREDS[name] = definition
    },

    get(name) {
        return REGISTEREDS[name]
    },

    getAll() {
        return REGISTEREDS
    },

    create(name, options = {}){
        let data = REGISTEREDS[name]
        let cls = options.class ? `${options.class} ` : ''
        let fill = options.color ? `fill:${options.color}` : ''
        let style = (options.size ? `width:${options.size}px;height:${options.size}px;` : '') + (options.style || '')
        
        return {
            innerHTML: data ? data.content :  `<use xlink:href="#${name}"></use>`,
            class: `${cls}ivue-icon-${options.size || ''}`,
            style: `${style}${fill}`,
            viewBox: data ? data.viewBox : undefined
        }
    }
}
