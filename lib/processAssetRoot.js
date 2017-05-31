var path = require('path');
var slash = require('slash');

/**
 * Creates a string that can be prepended to a assetpath
 * @param {string} asset_root - custom path for assets.
 * @returns {string} An empty string if the page is at the root, or a series of `../` characters if the page is in a subdirectory relative to the root.
 */
module.exports = function(asset_root) {
  var root_assets = (typeof asset_root != 'undefined') ? asset_root : "";


  // On Windows, paths are separated with a "\"
  // However, web browsers use "/" no matter the platform
  return root_assets
}
