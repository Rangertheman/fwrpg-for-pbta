import { configSheet } from "./helper/config-sheet.mjs";
import { PbtaActorSheet } from "../../../systems/pbta/module/actor/actor-sheet.js";

export class FwrpgPbtASheet extends PbtaActorSheet {
   #dataPath = "system";
   #shortPath = "system";

   constructor(data, context) {
       super(data, context);

       this.labelShiftDown = "none";
       this.labelShiftUp = "none";
   }

   get template() {
       //Decision making based on permission level
       let versionDirectory = "templates";
       let sheetTemplate = `modules/fwrpg-for-pbta/${versionDirectory}/actor-sheet.hbs`;
       if (!this.isOwner && !this.isEditable) {
           //observer, or limited?
           if (this.actor.permission === CONST.DOCUMENT_PERMISSION_LEVELS.LIMITED) {
               sheetTemplate = `modules/fwrpg-for-pbta/${versionDirectory}/actor-sheet.hbs`;
           }
       }
       return sheetTemplate;
      }
   }
// once the game has initialized, set up the module
Hooks.once('init', () => {

   //Register Actor sheet for character (NPC uses default for now)
   Actors.registerSheet("pbta", FwrpgPbtASheet, {
      types: ["character"],
      makeDefault: true
  });

   
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