export const configSheet = async () => {

   // pass FWRPG sheet object to sheetConfig

   game.pbta.sheetConfig = {
      "rollFormula": "2d6",
      "rollResults": {
         "success": {
            "start": 10,
            "end": null,
            "label": "Major Boon!"
         },
         "partial": {
            "start": 7,
            "end": 9,
            "label": "Minor Boon"
         },
         "failure": {
            "start": null,
            "end": 6,
            "label": "Snag"
         }
      },
      "actorTypes": {
         "character": {
            "stats": {
               "dar": {
                  "label": "Daring",
                  "value": 0
               },
               "int": {
                  "label": "Intense",
                  "value": 0
               },
               "kno": {
                  "label": "Knowing",
                  "value": 0
               },
               "vig": {
                  "label": "Vigilant",
                  "value": 0
               }
            },
            "attrTop": {
               "blood": {
                  "label": "Blood",
                  "description": null,
                  "customLabel": false,
                  "userLabel": false,
                  "type": "LongText",
                  "value": ""
               },
               "kin": {
                  "label": "Kin",
                  "description": null,
                  "customLabel": false,
                  "userLabel": false,
                  "type": "LongText",
                  "value": ""
               },
               "issue": {
                  "label": "Issue",
                  "description": null,
                  "customLabel": false,
                  "userLabel": false,
                  "type": "LongText",
                  "value": ""
               },
               "doubt": {
                  "label": "Doubt",
                  "description": null,
                  "customLabel": false,
                  "userLabel": false,
                  "type": "LongText",
                  "value": ""
               },
               "xp": {
                  "label": "Experience",
                  "description": "Spend 2 XPs before a roll to gain Advantage",
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
                  "label": "Growth",
                  "description": "Spend 5 XP during the End of Session move to mark Growth",
                  "customLabel": false,
                  "userLabel": false,
                  "type": "Xp",
                  "value": 0,
                  "max": 5,
                  "steps": [
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
                  "label": "Look",
                  "description": null,
                  "customLabel": false,
                  "userLabel": false,
                  "type": "LongText",
                  "value": ""
               },
               "hard": {
                  "label": "Hardiness Points",
                  "description": "Spend 1 HP to reduce harm by one level:\nDeadly > Serious > Temp > No harm",
                  "customLabel": false,
                  "userLabel": false,
                  "type": "Resource",
                  "value": 0,
                  "max": 3
               },
               "tempharm": {
                  "label": "TEMP HARM",
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
                  "label": "SERIOUS HARM",
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
                  "label": "DEADLY HARM",
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