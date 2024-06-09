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
   // Define custom PbtA system tags.
   game.pbta.tagConfigOverride = {
      // Tags available to any actor and item
      actor: {
          // Tags available to all actors
          all: '[{"value":"person"}]',
          // Tags available to a specific actor type set up on game.pbta.sheetConfig.actorTypes (e.g. "character", "npc")
          character: '[{"value":"disgraceful appearance"},{"value":"impeded mobility"},{"value":"unsteady hands"},{"value":"impaired senses"},{"value":"weakened health"}]',
          npc: '[{"value":"mook"}]'
      },
      item: {
          // Tags available to all actors
          all: '[{"value":"consumable"}]',
          // Tags available to a specific item type (e.g. "equipment", "move")
          equipment: '[{"value":"loud", "description":"it produces a lot of noise"},{"value":"silent", "description":"it produces little noise"},{"value":"fast", "description":"it is quite fast to use"},{"value":"slow", "description":"it is quite slow to use"},{"value":"sharp", "description":"it is quite god for cutting"},{"value":"blunt", "description":"it is quite good for bashing"},{"value":"heavy", "description":"it is quite heavy"},{"value":"light", "description":"it is quite light"},{"value":"poisoned", "description":"it is coated in poison"},{"value":"messy", "description":"it makes a gory mess"},{"value":"forceful", "description":"it applies a lot of force to the target possibly blowing them away"},{"value":"reload", "description":"it needs time and effort to be reloaded after every use"},{"value":"ectoplasmic", "description":"it can hurt ghosts and spirits"},{"value":"of Gloom", "description":"it devours joy and hope"},{"value":"beautiful", "description":"it really is a strikingly beautiful item"},{"value":"hand", "description":"target is within arms reach"},{"value":"close", "description":"target is just beyond Hand range"},{"value":"reach", "description":"target is just beyond Close range"},{"value":"near", "description":"target is anywhere beyond Reach range within shouting distance"},{"value":"far", "description":"target is anywhere beyond Near range within sight"}]'
      }
  };
})

Hooks.once('pbtaSheetConfig', () => {
   // Disable the sheet config form.
   game.settings.set('pbta', 'sheetConfigOverride', true);

   // Replace the game.pbta.sheetConfig with FWRPG version.
   configSheet();
});