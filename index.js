const retext = require(`retext`)
const visit = require(`unist-util-visit`)
const textr = require("textr")

module.exports = ({ markdownAST }, pluginOptions = {}) => {
	var tf = textr(pluginOptions.config || {})
	tf.use.apply(tf, (pluginOptions.textrplugins || []).map(load))

	visit(markdownAST, `text`, node => {
		node.value = tf(node.value)
	})
	return markdownAST
}

function load(fn) {
	return typeof fn === "string" ? require(fn) : fn
}
