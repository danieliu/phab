/*
 * Snippets to register custom Phabricator keyboard shortcuts.
 *
 * References:
 * - `webroot/rsrc/js/core/KeyboardShortcut.js`
 * - `webroot/rsrc/js/core/KeyboardShortcutManager.js`
 * - `webroot/rsrc/js/application/diff/DiffChangesetList.js`
 */

/*
 * DiffChangesetList (on a differential revision page, e.g. https://your.phabricator.com/D12345
 */
const scrollToDetail = (manager) => {
  let diffDetailId = JX.$('UQ0_2');
  manager.scrollTo(diffDetailId);
};
new JX.KeyboardShortcut('d', 'Jump to Diff Detail.')
  .setHandler(scrollToDetail)
  .register();
