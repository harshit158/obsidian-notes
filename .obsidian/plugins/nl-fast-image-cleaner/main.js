/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => NathanImageCleaner
});
module.exports = __toCommonJS(main_exports);
var import_obsidian6 = require("obsidian");

// src/options/deleleAllAttachsInTheNote.ts
var import_obsidian2 = require("obsidian");

// src/utils/deleteFile.ts
var import_obsidian = require("obsidian");
var SUCCESS_NOTICE_TIMEOUT = 1800;
var deleteAttach = (file, plugin) => __async(void 0, null, function* () {
  const deleteOption = plugin.settings.deleteOption;
  try {
    if (deleteOption === ".trash") {
      yield app.vault.trash(file, false);
    } else if (deleteOption === "system-trash") {
      yield app.vault.trash(file, true);
    } else if (deleteOption === "permanent") {
      yield app.vault.delete(file);
    }
  } catch (error) {
    console.error(error);
    new import_obsidian.Notice("Faild to delete the attachment !", SUCCESS_NOTICE_TIMEOUT);
  }
});
var deleteNote = (file) => {
  app.fileManager.promptForDeletion(file);
};

// src/options/deleleAllAttachsInTheNote.ts
var deleteAllAttachs = (plugin) => {
  const activeMd = app.workspace.getActiveFile();
  const resolvedLinks = app.metadataCache.resolvedLinks;
  const attachsPaths = [];
  for (const [mdFile, links] of Object.entries(resolvedLinks)) {
    if ((activeMd == null ? void 0 : activeMd.path) === mdFile) {
      for (const [filePath, nr] of Object.entries(links)) {
        attachsPaths.push(filePath);
        if (isReferencedByOtherNotes(filePath, activeMd))
          continue;
        try {
          const AttachFile = app.vault.getAbstractFileByPath(filePath);
          if (AttachFile instanceof import_obsidian2.TFile) {
            deleteAttach(AttachFile, plugin);
          }
        } catch (error) {
          console.error(error);
        }
      }
    }
  }
  removeAllUnusedReferenceLinks(activeMd, attachsPaths);
};
var isReferencedByOtherNotes = (attachPath, currentMd) => {
  const resolvedLinks = app.metadataCache.resolvedLinks;
  let flag = false;
  for (const [mdFile, links] of Object.entries(resolvedLinks)) {
    if (mdFile !== currentMd.path) {
      for (const [filePath, nr] of Object.entries(links)) {
        if (filePath === attachPath) {
          return flag = true;
        }
      }
    }
  }
  return flag;
};
var removeAllUnusedReferenceLinks = (activeMd, attachsPaths) => __async(void 0, null, function* () {
  const originContents = yield app.vault.read(activeMd);
  const lines = originContents.split("\n");
  const newContents = [];
  let isNotTargetLine = true;
  for (const line of lines) {
    for (const index in attachsPaths) {
      const regMdRefLink = new RegExp("!\\[(.*)?\\]\\(((.*\\/)+)?" + attachsPaths[index] + "\\)", "gm");
      const regWikiRefLink2 = new RegExp("!\\[\\[.*?" + attachsPaths[index] + "(\\|\\d*)?\\]\\]", "gm");
      const decodeLine = decodeURI(line);
      const isIncludeImage = decodeLine.includes(attachsPaths[index]);
      const isMarkdownStyle = decodeLine.match(regMdRefLink) != null;
      const isWikiStyle = decodeLine.match(regWikiRefLink2) != null;
      if (isIncludeImage && isMarkdownStyle) {
        isNotTargetLine = false;
        newContents.push(decodeLine.replace(regMdRefLink, ""));
        break;
      } else if (isIncludeImage && isWikiStyle) {
        isNotTargetLine = false;
        newContents.push(decodeLine.replace(regWikiRefLink2, ""));
        break;
      } else {
        continue;
      }
    }
    if (isNotTargetLine)
      newContents.push(line);
  }
  app.vault.adapter.write(activeMd.path, newContents.join("\n"));
});

// src/config/addCommand-config.ts
var addCommand = (myPlugin) => {
  myPlugin.addCommand({
    id: "delete-file-and-clear-all-attachments-in-current-file",
    name: "Delete file and clear all attachments in current file",
    callback: () => __async(void 0, null, function* () {
      deleteAllAttachs(myPlugin);
      deleteNote(app.workspace.getActiveFile());
    })
  });
  myPlugin.addCommand({
    id: "clear-all-attachments-in-current-file",
    name: "clear all attachments in current file",
    callback: () => __async(void 0, null, function* () {
      deleteAllAttachs(myPlugin);
    })
  });
};

// src/settings.ts
var import_obsidian3 = require("obsidian");
var DEFAULT_SETTINGS = {
  deleteOption: ".trash",
  logsModal: true
};
var NathanImageCleanerSettingsTab = class extends import_obsidian3.PluginSettingTab {
  constructor(app2, plugin) {
    super(app2, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "Fast Attachment Cleaner Settings" });
    new import_obsidian3.Setting(containerEl).setName("Deleted Attachment Destination").setDesc("Select where you want Attachments to be moved once they are deleted").addDropdown((dropdown) => {
      dropdown.addOption("permanent", "Delete Permanently");
      dropdown.addOption(".trash", "Move to Obsidian Trash");
      dropdown.addOption("system-trash", "Move to System Trash");
      dropdown.setValue(this.plugin.settings.deleteOption);
      dropdown.onChange((option) => {
        this.plugin.settings.deleteOption = option;
        this.plugin.saveSettings();
      });
    });
  }
};

// src/util.ts
var import_obsidian5 = require("obsidian");

// src/modals.ts
var import_obsidian4 = require("obsidian");
var LogsModal = class extends import_obsidian4.Modal {
  constructor(currentMd, state, FileBaseName, textToView, app2) {
    super(app2);
    this.textToView = textToView;
    this.currentMd = currentMd;
    this.state = state;
    this.FileBaseName = FileBaseName;
  }
  getLog() {
    console.log("@this.textToView: ", this.textToView);
    const CurFirstMd = this.textToView.shift();
    const curMdLog = "The md document that currently references the attachment: \n" + CurFirstMd + "\n\n";
    let otherMds = this.textToView.join("\n");
    const otherMdsLog = "List of all documents that reference this attachment: \n" + otherMds;
    const log = curMdLog + otherMdsLog;
    return log;
  }
  onOpen() {
    const { contentEl } = this;
    const myModal = this;
    const headerWrapper = contentEl.createEl("div");
    headerWrapper.addClass("fast-image-cleaner-center-wrapper");
    const headerEl = headerWrapper.createEl("h1", {
      text: " Detection of multiple attachment reference links - logs "
    });
    headerEl.addClass("modal-title");
    if (this.state === 1)
      this.showLogs();
    const buttonWrapper = this.contentEl.createEl("div");
    buttonWrapper.addClass("fast-image-cleaner-center-wrapper");
    if (this.state === 1) {
      this.showCloseBtn(buttonWrapper, this);
      this.showRemoveLinkBtn(buttonWrapper, this);
    }
    if (this.state === 2) {
      this.showPrompt(this);
    }
  }
  showLogs() {
    const logs = this.contentEl.createEl("div");
    logs.addClass("fast-image-cleaner-log");
    logs.setText(this.getLog());
  }
  showCloseBtn(buttonWrapper, myModal) {
    const closeButton = buttonWrapper.createEl("button", {
      text: "close"
    });
    closeButton.setAttribute("aria-label", "close the window");
    closeButton.addEventListener("click", () => {
      myModal.close();
    });
  }
  showRemoveLinkBtn(buttonWrapper, myModal) {
    const removeLinkButton = buttonWrapper.createEl("button", {
      text: "remove link"
    });
    removeLinkButton.setAttribute("aria-label", "Continue to remove the reference link to the current attachment in the current document");
    removeLinkButton.addClass("mod-warning");
    removeLinkButton.addEventListener("click", () => {
      removeReferenceLink(this.FileBaseName, this.currentMd);
      myModal.close();
    });
  }
  showPrompt(myModal) {
    const prompt = this.contentEl.createEl("span", {
      text: "Detected that the image you are attempting to delete is being referenced multiple times within the current document. \n As a result. We kindly ask that you manually remove the link."
    });
    prompt.addClass("fast-image-cleaner-prompt");
    const buttonWrapper = this.contentEl.createEl("div");
    const closeButton = buttonWrapper.createEl("button", {
      text: "close"
    });
    closeButton.setAttribute("aria-label", "close the window");
    closeButton.addEventListener("click", () => {
      myModal.close();
    });
  }
};

// src/util.ts
var SUCCESS_NOTICE_TIMEOUT2 = 1800;
var removeReferenceLink = (imagePath, mdFile) => __async(void 0, null, function* () {
  const origin_filecontents = yield app.vault.read(mdFile);
  const new_filecontents = [];
  const fileContents_array = origin_filecontents.split("\n");
  for (const fileContent of fileContents_array) {
    const regMdRefLink = new RegExp("!\\[(.*)?\\]\\(((.*\\/)+)?" + imagePath + "\\)", "gm");
    const regWikiRefLink2 = new RegExp("!\\[\\[.*?" + imagePath + "(\\|\\d*)?\\]\\]", "gm");
    const fileContent_decode = decodeURI(fileContent);
    const isIncludeImage = fileContent_decode.includes(imagePath);
    const isMarkdownStyle = fileContent_decode.match(regMdRefLink) != null;
    const isWikiStyle = fileContent_decode.match(regWikiRefLink2) != null;
    if (isIncludeImage && isMarkdownStyle) {
      new_filecontents.push(fileContent_decode.replace(regMdRefLink, ""));
    } else if (isIncludeImage && isWikiStyle) {
      new_filecontents.push(fileContent_decode.replace(regWikiRefLink2, ""));
    } else {
      new_filecontents.push(fileContent);
    }
  }
  app.vault.adapter.write(mdFile.path, new_filecontents.join("\n"));
});
var isRemove = (FileBaseName) => {
  const currentMd = app.workspace.getActiveFile();
  const resolvedLinks = app.metadataCache.resolvedLinks;
  const deletedTargetFile = getFileByBaseName(currentMd, FileBaseName);
  let CurMDPath;
  let result = {
    state: 0,
    mdPath: []
  };
  let refNum = 0;
  for (const [mdFile, links] of Object.entries(resolvedLinks)) {
    if (currentMd.path === mdFile) {
      CurMDPath = currentMd.path;
      result.mdPath.unshift(CurMDPath);
    }
    for (const [filePath, nr] of Object.entries(links)) {
      if ((deletedTargetFile == null ? void 0 : deletedTargetFile.path) === filePath) {
        refNum++;
        if (nr > 1) {
          result.state = 2 /* MORE */;
          result.mdPath.push(mdFile);
          return result;
        }
        result.mdPath.push(mdFile);
      }
    }
  }
  if (refNum > 1) {
    result.state = 1 /* MUTIPLE */;
  } else {
    result.state = 0 /* ONCE */;
  }
  return result;
};
var getFileByBaseName = (currentMd, FileBaseName) => {
  const resolvedLinks = app.metadataCache.resolvedLinks;
  for (const [mdFile, links] of Object.entries(resolvedLinks)) {
    if (currentMd.path === mdFile) {
      for (const [filePath, nr] of Object.entries(links)) {
        if (filePath.includes(FileBaseName)) {
          try {
            const AttachFile = app.vault.getAbstractFileByPath(filePath);
            if (AttachFile instanceof import_obsidian5.TFile) {
              return AttachFile;
            }
          } catch (error) {
            new import_obsidian5.Notice(` cannot get the image file`);
            console.error(error);
            return void 0;
          }
        }
      }
    }
  }
};
var ClearAttachment = (FileBaseName, plugin) => __async(void 0, null, function* () {
  const deleteOption = plugin.settings.deleteOption;
  const currentMd = app.workspace.getActiveFile();
  const file = getFileByBaseName(currentMd, FileBaseName);
  removeReferenceLink(FileBaseName, app.workspace.getActiveFile());
  try {
    if (deleteOption === ".trash") {
      yield app.vault.trash(file, false);
      new import_obsidian5.Notice("Image moved to Obsidian Trash !", SUCCESS_NOTICE_TIMEOUT2);
    } else if (deleteOption === "system-trash") {
      yield app.vault.trash(file, true);
      new import_obsidian5.Notice("Image moved to System Trash !", SUCCESS_NOTICE_TIMEOUT2);
    } else if (deleteOption === "permanent") {
      yield app.vault.delete(file);
      new import_obsidian5.Notice("Image deleted Permanently !", SUCCESS_NOTICE_TIMEOUT2);
    }
  } catch (error) {
    console.error(error);
    new import_obsidian5.Notice("Faild to delelte the image !", SUCCESS_NOTICE_TIMEOUT2);
  }
});
var handlerDelFile = (FileBaseName, currentMd, plugin) => {
  let logs;
  let modal;
  const state = isRemove(FileBaseName).state;
  switch (state) {
    case 0:
      ClearAttachment(FileBaseName, plugin);
      break;
    case 1:
    case 2:
      logs = isRemove(FileBaseName).mdPath;
      modal = new LogsModal(currentMd, state, FileBaseName, logs, app);
      modal.open();
    default:
      break;
  }
};

// src/utils/handlerEvent.ts
var getMouseEventTarget = (event) => {
  event.preventDefault();
  const target = event.target;
  return target;
};

// src/main.ts
var NathanImageCleaner = class extends import_obsidian6.Plugin {
  constructor() {
    super(...arguments);
    this.addMenu = (menu, FileBaseName, currentMd) => {
      menu.addItem((item) => item.setIcon("trash-2").setTitle("clear file and referenced link").setChecked(true).onClick(() => __async(this, null, function* () {
        try {
          handlerDelFile(FileBaseName, currentMd, this);
        } catch (e) {
          new import_obsidian6.Notice("Error, could not clear the file!");
        }
      })));
    };
  }
  onload() {
    return __async(this, null, function* () {
      console.log("Fast file Cleaner plugin loaded...");
      this.addSettingTab(new NathanImageCleanerSettingsTab(this.app, this));
      yield this.loadSettings();
      this.registerDocument(document);
      app.workspace.on("window-open", (workspaceWindow, window) => {
        this.registerDocument(window.document);
      });
      this.registerEvent(this.app.workspace.on("file-menu", (menu, file) => {
        if (file instanceof import_obsidian6.TFile) {
          const addMenuItem = (item) => {
            item.setTitle("Delete the file and its all attachments").setIcon("trash-2").setSection("danger");
            item.onClick(() => __async(this, null, function* () {
              deleteAllAttachs(this);
              deleteNote(app.workspace.getActiveFile());
            }));
          };
          menu.addItem(addMenuItem);
        }
      }));
      addCommand(this);
    });
  }
  onunload() {
    console.log("Fast file Cleaner plugin unloaded...");
  }
  onElement(el, event, selector, listener, options) {
    el.on(event, selector, listener, options);
    return () => el.off(event, selector, listener, options);
  }
  registerDocument(document2) {
    this.register(this.onElement(document2, "contextmenu", "img, iframe, video, div.file-embed-title,audio", this.onClick.bind(this)));
  }
  loadSettings() {
    return __async(this, null, function* () {
      this.settings = Object.assign({}, DEFAULT_SETTINGS, yield this.loadData());
    });
  }
  saveSettings() {
    return __async(this, null, function* () {
      yield this.saveData(this.settings);
    });
  }
  registerEscapeButton(menu, document2 = activeDocument) {
    menu.register(this.onElement(document2, "keydown", "*", (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
        menu.hide();
      }
    }));
  }
  onClick(event) {
    var _a;
    const target = getMouseEventTarget(event);
    const nodeType = target.localName;
    const currentMd = app.workspace.getActiveFile();
    const menu = new import_obsidian6.Menu();
    const RegFileBaseName = new RegExp(/\/?([^\/\n]+\.\w+)/, "m");
    let imgPath = "";
    const delTargetType = ["img", "iframe", "video", "div", "audio"];
    if (delTargetType.includes(nodeType)) {
      imgPath = (_a = target.parentElement) == null ? void 0 : _a.getAttribute("src");
      const FileBaseName = (imgPath == null ? void 0 : imgPath.match(RegFileBaseName))[1];
      if (target.className === "file-embed-title") {
        this.addMenu(menu, FileBaseName, currentMd);
      }
      this.addMenu(menu, FileBaseName, currentMd);
    }
    this.registerEscapeButton(menu);
    menu.showAtPosition({ x: event.pageX, y: event.pageY - 40 });
    this.app.workspace.trigger("NL-fast-file-cleaner:contextmenu", menu);
  }
};
