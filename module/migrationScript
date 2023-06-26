const newMigrationVersion = 1.0;
const lastMigrationVersion =   game.settings.get("fwrpg-for-pbta", "migrationVersion");
if(!lastMigrationVersion || foundry.utils.isNewerVersion(newMigrationVersion, lastMigrationVersion) )
{
  // Find all actors that need update and
  // construct an array of updates where 
  // attrTab.blood contains the data from the old field
  // attrTop.blood
  let allToUpdate = game.actors.filter( (test) => { return test.system.attrTab == undefined}).map( (test) => { return {_id: test.id, "attrTab.blood":test.system.attrTop.blood}; });
  // Perform this upgrade on all these actors in a single command
  await Actors.update( allToUpdate );
  // Register that this world have been upgraded
  game.settings.set("fwrpg-for-pbta", "migrationVersion", newMigrationVersion);
}