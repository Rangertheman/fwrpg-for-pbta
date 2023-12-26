import { configSheet } from "./helper/config-sheet.mjs";

// once the game has initialized, set up the module
Hooks.once('init', () => {
   // register FWRPG settings
   game.settings.register('fwrpg-for-pbta', 'settings-override', {
      name: game.i18n.localize("fwrpg.Settings.Title"),
      default: false,
      type: Boolean,
      scope: 'world',
      config: true,
      hint: game.i18n.localize("fwrpg.Settings.Hint"),
      requiresReload: true
   });
})

Hooks.once('pbtaSheetConfig', () => {
   // Disable the sheet config form.
   game.settings.set('pbta', 'sheetConfigOverride', true);

   // Replace the game.pbta.sheetConfig with FWRPG version.
   configSheet();
});