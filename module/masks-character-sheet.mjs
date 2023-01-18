import { PbtaActorSheet } from "../../../systems/pbta/module/actor/actor-sheet.js";
import { PbtaRolls } from "../../../systems/pbta/module/rolls.js";
import { MasksPbtaSheets } from "./masks-sheets.mjs";
import { MasksCustomResourceDialog } from "./masks-custom-resource-dialog.mjs";
import { Logger } from "./logger/logger.mjs";

export class MasksPbtASheet extends PbtaActorSheet {
    #dataPath = "data.data";
    #shortPath = "data"

    constructor(data, context) {
        super(data, context);

        this.labelShiftDown = "none";
        this.labelShiftUp = "none";

        if (isNewerVersion(MasksPbtaSheets.FOUNDRY_VERSION, "10")) { this.#dataPath = this.#shortPath = "system"; }
    }

    get template() {
        //Decision making based on permission level
        let versionDirectory = isNewerVersion(MasksPbtaSheets.FOUNDRY_VERSION, "10") ? "templates" : "templates/v9";
        let sheetTemplate = `modules/masks-newgeneration-sheets/${versionDirectory}/actor-sheet.hbs`;
        if (!this.isOwner && !this.isEditable) {
            //observer, or limited?
            if (this.actor.permission === CONST.DOCUMENT_PERMISSION_LEVELS.LIMITED) {
                sheetTemplate = `modules/masks-newgeneration-sheets/${versionDirectory}/actor-sheet-limited.hbs`;
            }
        }
        return sheetTemplate;
    }

    static get defaultOptions() {
        let options = {
            classes: ["pbta", "sheet", "actor", "masks"]
        };
        return mergeObject(super.defaultOptions, options);
    }

    async getData() {
        const data = await super.getData();

        const actorDataPath = isNewerVersion(MasksPbtaSheets.FOUNDRY_VERSION, "10") ? this.actor[this.#dataPath] : this.actor.data[this.#shortPath];

        data.isObserver = this.actor.permission === CONST.DOCUMENT_PERMISSION_LEVELS.OBSERVER;
        data.influences = this.actor.getFlag(MasksPbtaSheets.MODULEID, "influences");
        if (!data.influences && this.isEditable) { this.actor.setFlag(MasksPbtaSheets.MODULEID, "influences", []); data.influences = []; }
        data.customResources = actorDataPath.resources.custom;
        data.customStats = {};
        data.customConditions = {};

        if (data.customResources) {
            for (let [key, val] of Object.entries(data.customResources)) {
                data.customResources[key].attrName = `${this.#shortPath}.resources.custom.${key}`;
                data.customResources[key].attrValue = `${this.#shortPath}.resources.custom.${key}.value`;

                if (val.resourceType === "stat") {
                    data.customStats[key] = {
                        label: val.name,
                        secondaryValue: val.secondaryValue,
                        value: val.value,
                        translation: val.name,
                        attrName: `${this.#shortPath}.resources.custom.${key}`,
                        attrValue: `${this.#shortPath}.resources.custom.${key}.value`
                    };
                } else if (val.resourceType === "condition") {
                    data.customConditions[key] = {
                        label: val.name,
                        value: val.value,
                        translation: val.name,
                        attrName: `${this.#shortPath}.resources.custom.${key}`,
                        attrValue: `${this.#shortPath}.resources.custom.${key}.value`
                    };
                }
            }
        }

        data.labelShiftDown = this.labelShiftDown;
        data.labelShiftUp = this.labelShiftUp;

        //Dynamic localization fields

        data.conditions = actorDataPath.attrLeft.conditions.options; 
        let statsKeys = data[this.#shortPath].stats;
        for (let key of Object.keys(data.conditions)) {
            data.conditions[key].translation = game.i18n.localize(`MASKS-SHEETS.CONDITIONS.${data.conditions[key].label}`);
        }
        for (let key of Object.keys(statsKeys)) {
            statsKeys[key].translation = game.i18n.localize(`MASKS-SHEETS.STATS.${key}`);
        }

        Logger.debug("Character Data:", data, this);

        return data;
    }

    activateListeners(html) {
        super.activateListeners(html);

        if (!this.isEditable) { return; }
        
        html.find('.influence-create').on('click', this._onInfluenceCreate.bind(this));
        html.find('.influence--name').on('change', this._onInfluenceEdit.bind(this));
        html.find('[data-influence-action]').on('click', this._onInfluenceAction.bind(this));
        html.find('.resource-masks').on('click', this._onResourcesClick.bind(this));
        html.find(".custom-control").on('click', this._onCustomResourceAction.bind(this));
        html.find('.masks-shift').on('change', this._onLabelShiftChange.bind(this));
        html.find(".custom-rollable.stat-icon.stat-rollable").on('click', this._onCustomResourceAction.bind(this));
        html.find('.masks-shift-roll').on('click', this._onLabelShiftClick.bind(this));
    }

    async _onResourcesClick(event) {
        if (!this.isEditable) { return; }
        const clickedElement = $(event.currentTarget);
        const action = clickedElement.data().action;
        const attrValue = clickedElement.data().attr;
        const attrMax = attrValue.replace(".value", ".max");
        let max = undefined;
        let updateValue = 0;

        if (isNewerVersion(MasksPbtaSheets.FOUNDRY_VERSION, "10")) {
            let valPath = attrValue.replace(this.#shortPath + ".", "");
            let maxPath = attrMax.replace(this.#shortPath + ".", "");
            max = getProperty(this.actor[this.#shortPath], maxPath);
            updateValue = getProperty(this.actor[this.#shortPath], valPath);
        } else {
            max = getProperty(this.actor[this.#shortPath], attrMax);
            updateValue = getProperty(this.actor[this.#shortPath], attrValue);
        }

        if (action === 'increase') { updateValue++; } else { updateValue--; }

        if (max && max !== 0 && updateValue > max) { updateValue = max; }

        await this.actor.update({[attrValue]: updateValue});
    }

    async _onInfluenceCreate(event) {
        event.preventDefault();
        if (!this.isEditable) { return; }

        let item = {
            "id": foundry.utils.randomID(),
            "name": "",
            "hasInfluenceOver": false,
            "haveInfluenceOver": false,
            "locked": false
        }

        let influences = this.actor.getFlag(MasksPbtaSheets.MODULEID, "influences");
        influences.push(item);
        await this.actor.setFlag(MasksPbtaSheets.MODULEID, "influences", influences);
    }

    async _onInfluenceEdit(event) {
        if (!this.isEditable) { return; }
        let influenceID = $($(event.target).parents("[data-influence-id]")[0]).data().influenceId;
        let influences = this.actor.getFlag(MasksPbtaSheets.MODULEID, "influences");
        let influence = influences.find(i => i.id === influenceID);
        influence.name = event.target.value;

        await this.actor.setFlag(MasksPbtaSheets.MODULEID, "influences", influences);
    }

    async _onInfluenceAction(event) {
        event.preventDefault();
        if (!this.isEditable) { return; }

        const clickedElement = $(event.currentTarget);
        const action = clickedElement.data().influenceAction;
        let influenceID = $(clickedElement.parents("[data-influence-id]")[0]).data().influenceId;
        let influences = this.actor.getFlag(MasksPbtaSheets.MODULEID, "influences");
        let influence = influences.find(i => i.id === influenceID);

        if (influence.locked && /lock|roll/.exec(action) === null) {
            return;
        }

        switch (action) {
            case "roll":
                const pack = game.packs.get("masks-newgeneration-unofficial.moves-revised");
                const influenceData = isNewerVersion(MasksPbtaSheets.FOUNDRY_VERSION, "10") ? (await pack.getDocument("cKdLivE2qMEVFPXt")) : (await pack.getDocument("cKdLivE2qMEVFPXt")).data;
        
                let rollData = {
                    name: influenceData.name.replace("?", influence.name),
                    type: "move",
                    img: influenceData.img
                }

                rollData[this.#shortPath] = {
                    name: '',
                    description: influenceData[this.#shortPath].description,
                    img: influenceData[this.#shortPath].img,
                    rollType: ''
                }
        
                //create chat message
                PbtaRolls.rollMove({actor: this.actor, data: rollData});
                break;
            case "hasInfluenceOver":
                influence.hasInfluenceOver = !influence.hasInfluenceOver;
                break;
            case "haveInfluenceOver":
                influence.haveInfluenceOver = !influence.haveInfluenceOver;
                break;
            case "lock":
                influence.locked = !influence.locked;
                break;
            case "delete":
                influences = influences.filter(i => i.id !== influence.id);
                break;
            default:
                break;
        }

        await this.actor.setFlag(MasksPbtaSheets.MODULEID, "influences", influences);
    }

    async _onCustomResourceAction(event) {
        event.preventDefault();
        if (!this.isEditable) { return; }

        const clickedElement = $(event.currentTarget);
        const action = clickedElement.data().action;
        const id = clickedElement.parents('[data-id]')?.data()?.id;
        let dialog = null;
        const actorDataPath = isNewerVersion(MasksPbtaSheets.FOUNDRY_VERSION, "10") ? this.actor[this.#dataPath] : this.actor.data[this.#shortPath];

        switch (action) {
            case "create":
                dialog = new MasksCustomResourceDialog({actor: this.actor, id: null});
                dialog.render(true);
                break;
            case "edit":
                dialog = new MasksCustomResourceDialog({actor: this.actor, id: id});
                dialog.render(true);
                break;
            case "delete":
                let resourceName = actorDataPath.resources.custom[id].name;
                dialog = new Dialog({
                    title: game.i18n.localize("MASKS-SHEETS.DIALOG.Confirm-Delete"),
                    content: `${game.i18n.localize("MASKS-SHEETS.DIALOG.Confirm-Text")} <b>${resourceName}</b>.`,
                    buttons: {
                        yes: {
                            label: game.i18n.localize("MASKS-SHEETS.Confirm"),
                            callback: async (html) => {
                                let propName = `data.resources.custom.-=${id}`;
                                await this.actor.update({[propName]: null});
                            }
                        },
                        no: {
                            icon: "<i class='fas fa-times'></i>",
                            label: game.i18n.localize("MASKS-SHEETS.Cancel")
                        }
                    },
                    default: "yes"
                }).render(true);
                break;
            default:
                //Roll
                const statMod = clickedElement.data().mod;
                //const statKey = clickedElement.parents('[data-stat]')?.data()?.stat;
                const statLabel = clickedElement.data().label;
                
                let templateData = {
                  title: statLabel,
                  resultRangeNeeded: true
                };

                if(isNewerVersion(MasksPbtaSheets.FOUNDRY_VERSION, "10")) {
                    this.actor.system.stats[statLabel] = { label: statLabel, value: statMod, toggle: false };
                } else {
                    this.actor.data.data.stats[statLabel] = { label: statLabel, value: statMod, toggle: false };
                }
          
                PbtaRolls.rollMove({actor: this.actor, data: null, formula: statLabel, templateData: templateData});
          
                break;
        }
    }

    async _onLabelShiftChange(event) {
        event.preventDefault();

        if (!this.isEditable) { return; }

        const clickedElement = $(event.currentTarget);
        const action = clickedElement.data().action;
        
        switch (action) {
            case "shift-down":
                this.labelShiftDown = clickedElement.val();
                break;
            case "shift-up":
                this.labelShiftUp = clickedElement.val();
                break;
            default:
                break;
        }
    }

    async _onLabelShiftClick(event) {
        event.preventDefault();
        if (!this.isEditable) { return; }
        const actorDataPath = isNewerVersion(MasksPbtaSheets.FOUNDRY_VERSION, "10") ? this.actor[this.#dataPath] : this.actor.data[this.#shortPath];

        let statUp = actorDataPath.stats[this.labelShiftUp];
        let statDown = actorDataPath.stats[this.labelShiftDown];
        let isCustomUp = false;
        let isCustomDown = false;

        console.log(this.labelShiftUp, this.labelShiftDown);
        
        if (!statUp && this.labelShiftUp !== 'none') { isCustomUp = true; statUp = actorDataPath.resources.custom[this.labelShiftUp]; }
        if (!statDown && this.labelShiftDown !== 'none') { isCustomDown = true; statDown = actorDataPath.resources.custom[this.labelShiftDown]; }

        if (!statUp && !statDown) { return; }
        let statUpdate = {};
        let performShift = true;

        let content = `<h2 class="cell__title">${this.actor.name} ${game.i18n.localize('MASKS-SHEETS.Label-Shifts')}</h2>`;
        if (statUp) {
            statUp.value++;

            if (!isCustomUp) { 
                content += `<b style="color: darkred">${statUp.label} ${game.i18n.localize('MASKS-SHEETS.Shifts-Up')}</b><br/>`;
                statUpdate[`data.stats.${this.labelShiftUp}.value`] = statUp.value; 
            } else { 
                content += `<b style="color: darkred">${actorDataPath.resources.custom[this.labelShiftUp].name} ${game.i18n.localize('MASKS-SHEETS.Shifts-Up')}</b><br/>`;
                statUpdate[`data.resources.custom.${this.labelShiftUp}.value`] = statUp.value; 
            }
        }
        if (statDown) {
            statDown.value--;

            if (!isCustomDown) {
                content += `<b style="color: red">${statDown.label} ${game.i18n.localize('MASKS-SHEETS.Shifts-Down')}</b>`;
                statUpdate[`data.stats.${this.labelShiftDown}.value`] = statDown.value;
            } else {
                content += `<b style="color: red">${actorDataPath.resources.custom[this.labelShiftDown].name} ${game.i18n.localize('MASKS-SHEETS.Shifts-Down')}</b>`;
                statUpdate[`data.resources.custom.${this.labelShiftDown}.value`] = statDown.value; 
            }
        }

        if (statUp?.value > 3 || statDown?.value < -3) {
            performShift = false;
            if (statUp) { statUp.value--; }
            if (statDown) { statDown.value++; }
            content = `<h2 class="cell__title">${this.actor.name} ${game.i18n.localize('MASKS-SHEETS.Label-Shifts')}</h2><p>${game.i18n.localize('MASKS-SHEETS.Label-Shift-Failed')}</p>`;
        }

        await ChatMessage.create({
            author: game.userId,
            content: content,
            speaker: ChatMessage.getSpeaker({actor: this.actor}),
            type: CONST.CHAT_MESSAGE_TYPES.OTHER
        });

        this.labelShiftUp = this.labelShiftDown = 'none';
        if (performShift) { await this.actor.update(statUpdate); } else { this.render(false); }
    }
}