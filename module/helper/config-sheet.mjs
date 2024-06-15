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
            "attributes": {
               "growth": {
                  "label": game.i18n.localize("fwrpg.statLabel.growth"),
                  "description": game.i18n.localize("fwrpg.statDescription.growthDesc"),
                  "customLabel": false,
                  "userLabel": false,
                  "position": "top",
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
              "xp": {
                  "label": game.i18n.localize("fwrpg.statLabel.expedience"),
                  "description": game.i18n.localize("fwrpg.statDescription.expedienceDesc"),
                  "customLabel": false,
                  "userLabel": false,
                  "position": "top",
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
               "hard": {
                  "label": game.i18n.localize("fwrpg.statLabel.hp"),
                  "description": game.i18n.localize("fwrpg.statDescription.hpDesc"),
                  "customLabel": false,
                  "userLabel": false,
                  "position": "top",
                  "type": "Resource",
                  "value": 0,
                  "max": 3
               },
               "eqipmentTracker": {
                  "label": game.i18n.localize("fwrpg.eqipmentTracker.trackerLabel"),
                  "description": null,
                  "customlabel": false,
                  "userLabel": false,
                  "position": "top",
                  "type": "ListOne",
                 "condition": false,
                  "options": {
                     "0": {
                        "label": game.i18n.localize("fwrpg.eqipmentTracker.trackerDesc0"),
                        "value:": false
                     },
                     "1": {
                        "label": game.i18n.localize("fwrpg.eqipmentTracker.trackerDesc1"),
                        "value:": false
                     },
                     "2": {
                        "label": game.i18n.localize("fwrpg.eqipmentTracker.trackerDesc2"),
                        "value:": false
                     },
                     "3": {
                        "label": game.i18n.localize("fwrpg.eqipmentTracker.trackerDesc3"),
                        "value:": false
                     }
                  }
               }
            },
            "details": {
               "look": {
                  "label": game.i18n.localize("fwrpg.statLabel.look"),
                  "value": ""
               },
               "blood": {
                  "label": game.i18n.localize("fwrpg.statLabel.blood"),
                  "value": ""
               },
               "kin": {
                  "label": game.i18n.localize("fwrpg.statLabel.kin"),
                  "value": ""
               },
               "issue": {
                  "label": game.i18n.localize("fwrpg.statLabel.issue"),
                  "value": ""
               },
               "doubt": {
                  "label": game.i18n.localize("fwrpg.statLabel.doubt"),
                  "value": ""
               }
            },
            "attrLeft": {
              "growthOptions": {
                  "label": game.i18n.localize("fwrpg.growthOption.headerLabel"),
                  "description": null,
                  "customLabel": false,
                  "userLabel": false,
                  "position": "left",
                  "type": "ListMany",
                  "condition": false,
                  "options": {
                     "0": {
                        "label": game.i18n.localize("fwrpg.growthOption.growth0"),
                        "values": [false, false, false]
                     },
                     "1": {
                        "label": game.i18n.localize("fwrpg.growthOption.growth1"),
                        "values": [false, false, false]
                     },
                     "2": {
                        "label": game.i18n.localize("fwrpg.growthOption.growth2"),
                        "values": [false, false]
                     },
                     "3": {
                        "label": game.i18n.localize("fwrpg.growthOption.growth3"),
                        "values": [false, false]
                     }
                  }
               },
               "tempharm": {
                  "label": game.i18n.localize("fwrpg.harmLabel.temp"),
                  "description": null,
                  "customLabel": false,
                  "userLabel": false,
                  "position": "left",
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
                  "position": "left",
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
                  "position": "left",
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
              "action": {
                  "label": game.i18n.localize("fwrpg.moveTypeLabel.actionMoves"),
                  "moves": [],
                  "creation": true
               },
               "adventuring": {
                  "label": game.i18n.localize("fwrpg.moveTypeLabel.adventuringMoves"),
                  "moves": [],
                  "creation": true
               },
               "info": {
                  "label": game.i18n.localize("fwrpg.moveTypeLabel.infoMoves"),
                  "moves": [],
                  "creation": true
               },
               "special": {
                  "label": game.i18n.localize("fwrpg.moveTypeLabel.specialMoves"),
                  "moves": [],
                  "creation": true
               },
               "violence": {
                  "label": game.i18n.localize("fwrpg.moveTypeLabel.violenceMoves"),
                  "moves": [],
                  "creation": true
               },
               "start": {
                  "label": game.i18n.localize("fwrpg.moveTypeLabel.startingMoves"),
                  "moves": [],
                  "playbook": true
               },
               "growth": {
                  "label": game.i18n.localize("fwrpg.moveTypeLabel.growthMoves"),
                  "moves": [],
                  "playbook": true
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

   game.pbta.sheetMigration = (source) => {
      if (source.attrTab) {
         delete source.details.biography;
         Object.entries(source.attrTab).forEach(([key, value]) => {
            source.details[key] = {
               label: game.i18n.localize(`fwrpg.statLabel.${key}`),
               value: value.value
            }
         });
         delete source.attrTab;
      }
   }

   // check if users wants to override settings; if not, hide all PbtA sheet options
   let overrideSettings = await game.settings.get('fwrpg-for-pbta', 'settings-override');

   if (!overrideSettings) {
      await game.settings.set('pbta', 'advForward', true);
      await game.settings.set('pbta', 'hideRollFormula', true);
      await game.settings.set('pbta', 'hideForward', true);
      await game.settings.set('pbta', 'hideOngoing', true);
      await game.settings.set('pbta', 'hideHold', true);
      await game.settings.set('pbta', 'hideRollMode', false);
      await game.settings.set('pbta', 'hideUses', true);
   }
}