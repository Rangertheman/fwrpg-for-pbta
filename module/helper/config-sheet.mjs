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
               "blood": {
                  "label": game.i18n.localize("fwrpg.statLabel.blood"),
                  "description": null,
                  "customLabel": false,
                  "userLabel": false,
                  "type": "LongText",
                  "value": ""
               },
               "kin": {
                  "label": game.i18n.localize("fwrpg.statLabel.kin"),
                  "description": null,
                  "customLabel": false,
                  "userLabel": false,
                  "type": "LongText",
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
            "attrLeft": {
               "look": {
                  "label": game.i18n.localize("fwrpg.statLabel.look"),
                  "description": null,
                  "customLabel": false,
                  "userLabel": false,
                  "type": "LongText",
                  "value": ""
               },
               "hard": {
                  "label": game.i18n.localize("fwrpg.statLabel.hp"),
                  "description": game.i18n.localize("fwrpg.statDescription.hpDesc"),
                  "customLabel": false,
                  "userLabel": false,
                  "type": "Resource",
                  "value": 0,
                  "max": 3
               },
               "tempharm": {
                  "label": game.i18n.localize("fwrpg.harmLabel.temp"),
                  "description": null,
                  "customLabel": false,
                  "userLabel": false,
                  "type": "ListMany",
                  "condition": false,
                  "options": {
                     "0": {
                        "label": "You look and feel like a mess: bloody, bruised, and torn up",
                        "value": false
                     },
                     "1": {
                        "label": "You lose hold of something important you were carrying or wearing",
                        "value": false
                     },
                     "2": {
                        "label": "You lose footing or end up in a problematic position",
                        "value": false
                     },
                     "3": {
                        "label": "You are held by something that clutches/ tangles/impedes you",
                        "value": false
                     },
                     "4": {
                        "label": "You are out cold, unconscious or powerless until the World says otherwise",
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
                        "label": "An open and vicious gash that, after healing, will leave a permanent scar (make a Tag of this)",
                        "value": false
                     },
                     "1": {
                        "label": "You are actively impeded by pain and injury in doing anything requiring effort or strain",
                        "value": false
                     },
                     "2": {
                        "label": "You broke or mangled one or more of your limbs, which are now inoperable",
                        "value": false
                     },
                     "3": {
                        "label": "One of your eyes or ears is ruined, forever hampering your senses (make a Tag of this)",
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
                        "label": "Your condition is bad and will develop complications; you will die within a few days",
                        "value": false
                     },
                     "1": {
                        "label": "Your condition deteriorates rapidly; you will die within a few hours",
                        "value": false
                     },
                     "2": {
                        "label": "Your heart stops beating; you are dead or will die in a matter of seconds.",
                        "value": false
                     }
                  }
               }
            },
            "moveTypes": {
               "comon": {
                  "label": "Common Moves",
                  "moves": []
               },
               "start": {
                  "label": "Starting Moves",
                  "moves": []
               },
               "growth": {
                  "label": "Growth Moves",
                  "moves": []
               }
            },
            "equipmentTypes": {
               "gear": {
                  "label": "TAGS | EQUIPMENT",
                  "moves": []
               }
            }
         },
         "npc": {
            "attrTop": {
               "type": {
                  "label": "Type | Subtype",
                  "description": null,
                  "customLabel": false,
                  "userLabel": false,
                  "type": "LongText",
                  "value": ""
               },
               "impulse": {
                  "label": "Impulse",
                  "description": null,
                  "customLabel": false,
                  "userLabel": false,
                  "type": "LongText",
                  "value": ""
               },
               "cast": {
                  "label": "Cast",
                  "description": null,
                  "customLabel": false,
                  "userLabel": false,
                  "type": "LongText",
                  "value": ""
               },
               "connections": {
                  "label": "Connections",
                  "description": null,
                  "customLabel": false,
                  "userLabel": false,
                  "type": "LongText",
                  "value": ""
               }
            },
            "attrLeft": {
               "reactions": {
                  "label": "Reactions",
                  "description": null,
                  "customLabel": false,
                  "userLabel": false,
                  "type": "LongText",
                  "value": ""
               },
               "stakes": {
                  "label": "Stakes",
                  "description": null,
                  "customLabel": false,
                  "userLabel": false,
                  "type": "LongText",
                  "value": ""
               },
               "notes": {
                  "label": "Notes",
                  "description": null,
                  "customLabel": false,
                  "userLabel": false,
                  "type": "LongText",
                  "value": ""
               }
            },
            "moveTypes": {
               "actions": {
                  "label": "World Actions",
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