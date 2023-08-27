export const configSheet = async () => {

   // pass FWRPG sheet object to sheetConfig

   game.pbta.sheetConfig = {
      "rollFormula": "2d6",
      "rollResults": {
         "success": {
            "start": 10,
            "end": null,
            "label": game.i18n.localize("fwrpg.rollResult.success")
                  },
         "partial": {
            "start": 7,
            "end": 9,
            "label": game.i18n.localize("fwrpg.rollResult.partial")
         },
         "failure": {
            "start": null,
            "end": 6,
            "label": game.i18n.localize("fwrpg.rollResult.miss")
         }
      },
      "actorTypes": {
         "character": {
            "stats": {
               "dar": {
                  "label": game.i18n.localize("fwrpg.statLabel.daring"),
                  "value": 0
               },
               "int": {
                  "label": game.i18n.localize("fwrpg.statLabel.intense"),
                  "value": 0
               },
               "kno": {
                  "label": game.i18n.localize("fwrpg.statLabel.knowing"),
                  "value": 0
               },
               "vig": {
                  "label": game.i18n.localize("fwrpg.statLabel.vigilant"),
                  "value": 0
               }
            },
            "attrTop": {
               "hard": {
                  "label": game.i18n.localize("fwrpg.statLabel.hp"),
                  "description": game.i18n.localize("fwrpg.statDescription.hpDesc"),
                  "customLabel": false,
                  "userLabel": false,
                  "type": "Resource",
                  "value": 0,
                  "max": 3
               },
               "xp": {
                  "label": game.i18n.localize("fwrpg.statLabel.expedience"),
                  "description": game.i18n.localize("fwrpg.statDescription.expedienceDesc"),
                  "customLabel": false,
                  "userLabel": false,
                  "type": "Xp",
                  "value": 0,
                  "max": 10,
                  "steps": [
                     false,
                     false,
                     false,
                     false,
                     false,
                     false,
                     false,
                     false,
                     false,
                     false
                  ]
               },
               "growth": {
                  "label": game.i18n.localize("fwrpg.statLabel.growth"),
                  "description": game.i18n.localize("fwrpg.statDescription.growthDesc"),
                  "customLabel": false,
                  "userLabel": false,
                  "type": "Xp",
                  "value": 0,
                  "max": 10,
                  "steps": [
                     false,
                     false,
                     false,
                     false,
                     false,
                     false,
                     false,
                     false,
                     false,
                     false
                  ]
               }
            },
            "attrTab": {
               "look": {
                  "label": game.i18n.localize("fwrpg.statLabel.look"),
                  "description": null,
                  "customLabel": false,
                  "userLabel": false,
                  "type": "LongText",
                  "value": ""
               },
               "blood": {
                  "label": game.i18n.localize("fwrpg.statLabel.blood"),
                  "description": null,
                  "customLabel": false,
                  "userLabel": false,
                  "type": "Text",
                  "value": ""
               },
               "kin": {
                  "label": game.i18n.localize("fwrpg.statLabel.kin"),
                  "description": null,
                  "customLabel": false,
                  "userLabel": false,
                  "type": "Text",
                  "value": ""
               },
               "issue": {
                  "label": game.i18n.localize("fwrpg.statLabel.issue"),
                  "description": null,
                  "customLabel": false,
                  "userLabel": false,
                  "type": "LongText",
                  "value": ""
               },
               "doubt": {
                  "label": game.i18n.localize("fwrpg.statLabel.doubt"),
                  "description": null,
                  "customLabel": false,
                  "userLabel": false,
                  "type": "LongText",
                  "value": ""
               }
            },
            "attrLeft": {
              "tempharm": {
                  "label": game.i18n.localize("fwrpg.harmLabel.temp"),
                  "description": null,
                  "customLabel": false,
                  "userLabel": false,
                  "type": "ListMany",
                  "condition": false,
                  "options": {
                     "0": {
                        "label": game.i18n.localize("fwrpg.harmLabel.tempEffect0"),
                        "value": false
                     },
                     "1": {
                        "label": game.i18n.localize("fwrpg.harmLabel.tempEffect1"),
                        "value": false
                     },
                     "2": {
                        "label": game.i18n.localize("fwrpg.harmLabel.tempEffect2"),
                        "value": false
                     },
                     "3": {
                        "label": game.i18n.localize("fwrpg.harmLabel.tempEffect3"),
                        "value": false
                     },
                     "4": {
                        "label": game.i18n.localize("fwrpg.harmLabel.tempEffect4"),
                        "value": false
                     }
                  }
               },
               "seriousharm": {
                  "label": game.i18n.localize("fwrpg.harmLabel.serious"),
                  "description": null,
                  "customLabel": false,
                  "userLabel": false,
                  "type": "ListMany",
                  "condition": false,
                  "options": {
                     "0": {
                        "label": game.i18n.localize("fwrpg.harmLabel.seriousEffect0"),
                        "value": false
                     },
                     "1": {
                        "label": game.i18n.localize("fwrpg.harmLabel.seriousEffect1"),
                        "value": false
                     },
                     "2": {
                        "label": game.i18n.localize("fwrpg.harmLabel.seriousEffect2"),
                        "value": false
                     },
                     "3": {
                        "label": game.i18n.localize("fwrpg.harmLabel.seriousEffect3"),
                        "value": false
                     }
                  }
               },
               "deadlyharm": {
                  "label": game.i18n.localize("fwrpg.harmLabel.deadly"),
                  "description": null,
                  "customLabel": false,
                  "userLabel": false,
                  "type": "ListMany",
                  "condition": false,
                  "options": {
                     "0": {
                        "label": game.i18n.localize("fwrpg.harmLabel.deadlyEffect0"),
                        "value": false
                     },
                     "1": {
                        "label": game.i18n.localize("fwrpg.harmLabel.deadlyEffect1"),
                        "value": false
                     },
                     "2": {
                        "label": game.i18n.localize("fwrpg.harmLabel.deadlyEffect2"),
                        "value": false
                     }
                  }
               }
            },
            "moveTypes": {
               "comon": {
                  "label": game.i18n.localize("fwrpg.moveTypeLabel.commonMoves"),
                  "moves": []
               },
               "start": {
                  "label": game.i18n.localize("fwrpg.moveTypeLabel.startingMoves"),
                  "moves": []
               },
               "growth": {
                  "label": game.i18n.localize("fwrpg.moveTypeLabel.growthMoves"),
                  "moves": []
               }
            },
            "equipmentTypes": {
               "gear": {
                  "label": game.i18n.localize("fwrpg.equipmentTypeLabel.gear"),
                  "moves": []
               }
            }
         },
         "npc": {
            "attrTop": {
               "type": {
                  "label": game.i18n.localize("fwrpg.npcLabel.type"),
                  "description": null,
                  "customLabel": false,
                  "userLabel": false,
                  "type": "LongText",
                  "value": ""
               },
               "impulse": {
                  "label": game.i18n.localize("fwrpg.npcLabel.impulse"),
                  "description": null,
                  "customLabel": false,
                  "userLabel": false,
                  "type": "LongText",
                  "value": ""
               },
               "cast": {
                  "label": game.i18n.localize("fwrpg.npcLabel.cast"),
                  "description": null,
                  "customLabel": false,
                  "userLabel": false,
                  "type": "LongText",
                  "value": ""
               },
               "connections": {
                  "label": game.i18n.localize("fwrpg.npcLabel.connections"),
                  "description": null,
                  "customLabel": false,
                  "userLabel": false,
                  "type": "LongText",
                  "value": ""
               }
            },
            "attrLeft": {
               "reactions": {
                  "label": game.i18n.localize("fwrpg.npcLabel.reactions"),
                  "description": null,
                  "customLabel": false,
                  "userLabel": false,
                  "type": "LongText",
                  "value": ""
               },
               "stakes": {
                  "label": game.i18n.localize("fwrpg.npcLabel.fate"),
                  "description": null,
                  "customLabel": false,
                  "userLabel": false,
                  "type": "LongText",
                  "value": ""
               },
               "notes": {
                  "label": game.i18n.localize("fwrpg.npcLabel.notes"),
                  "description": null,
                  "customLabel": false,
                  "userLabel": false,
                  "type": "LongText",
                  "value": ""
               }
            },
            "moveTypes": {
               "actions": {
                  "label": game.i18n.localize("fwrpg.moveTypeLabel.worldAction"),
                  "moves": []
               }
            }
         }
      }
   }

   // check if users wants to override settings; if not, hide all PbtA sheet options
   let overrideSettings = await game.settings.get('fwrpg-for-pbta', 'settings-override');

   if (!overrideSettings) {
      await game.settings.set('pbta', 'advForward', true);
      await game.settings.set('pbta', 'hideRollFormula', true);
      await game.settings.set('pbta', 'hideForward', true);
      await game.settings.set('pbta', 'hideOngoing', true);
      await game.settings.set('pbta', 'hideRollMode', false);
      await game.settings.set('pbta', 'hideUses', true);
   }

}