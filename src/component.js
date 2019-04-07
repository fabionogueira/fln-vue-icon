const manager = require('./manager')

/**
 * @example:
 *      <icon symbol="symbol-link-by-svg"></icon>
 *      <icon name="id-for-registered-icon"></icon>
 */
module.exports = {
    render(createElement) {
        let r = manager.create(this.$attrs.symbol || this.$attrs.name, this.$attrs)
        
        delete(this.$attrs.symbol)
        delete(this.$attrs.name)
        delete(this.$attrs.color)
        delete(this.$attrs.size)

        return createElement('svg', {
            attrs: {
                'style': r.style,
                'class': r.class,
                'viewBox': r.viewBox
            },
            domProps: {
                innerHTML: r.innerHTML
            }
        })
            
    }
}
