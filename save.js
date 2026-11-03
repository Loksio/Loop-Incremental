function saveGame() {
    const saveData = {
        loops,
        baseLoopsPerSec,
        loopMultiplier,
        loopExponent,

        loopUpgrade1UpgradeLevel,
        loopUpgrade1UpgradeCost,
        loopUpgrade1Scaling,

        loopUpgrade2UpgradeLevel,
        loopUpgrade2UpgradeCost,
        loopUpgrade2Scaling,

        loopUpgrade3UpgradeLevel,
        loopUpgrade3UpgradeCost,
        loopUpgrade3Scaling,

        loopUpgrade4UpgradeLevel,
        loopUpgrade4UpgradeCost,
        loopUpgrade4Scaling};
    localStorage.setItem("loopIncrementalSave", JSON.stringify(saveData));}

function loadGame() {
    const savedData = localStorage.getItem("loopIncrementalSave");

    if (savedData === null) return;

    try {
        const data = JSON.parse(savedData);

        for (const key in data) {
            if (typeof data[key] === "number") {
                if (key in window) continue;}}

        loops = data.loops ?? loops;
        baseLoopsPerSec = data.baseLoopsPerSec ?? baseLoopsPerSec;
        loopMultiplier = data.loopMultiplier ?? loopMultiplier;
        loopExponent = data.loopExponent ?? loopExponent;

        loopUpgrade1UpgradeLevel = data.loopUpgrade1UpgradeLevel ?? loopUpgrade1UpgradeLevel;
        loopUpgrade1UpgradeCost = data.loopUpgrade1UpgradeCost ?? loopUpgrade1UpgradeCost;
        loopUpgrade1Scaling = data.loopUpgrade1Scaling ?? loopUpgrade1Scaling;

        loopUpgrade2UpgradeLevel = data.loopUpgrade2UpgradeLevel ?? loopUpgrade2UpgradeLevel;
        loopUpgrade2UpgradeCost = data.loopUpgrade2UpgradeCost ?? loopUpgrade2UpgradeCost;
        loopUpgrade2Scaling = data.loopUpgrade2Scaling ?? loopUpgrade2Scaling;

        loopUpgrade3UpgradeLevel = data.loopUpgrade3UpgradeLevel ?? loopUpgrade3UpgradeLevel;
        loopUpgrade3UpgradeCost = data.loopUpgrade3UpgradeCost ?? loopUpgrade3UpgradeCost;
        loopUpgrade3Scaling = data.loopUpgrade3Scaling ?? loopUpgrade3Scaling;

        loopUpgrade4UpgradeLevel = data.loopUpgrade4UpgradeLevel ?? loopUpgrade4UpgradeLevel;
        loopUpgrade4UpgradeCost = data.loopUpgrade4UpgradeCost ?? loopUpgrade4UpgradeCost;
        loopUpgrade4Scaling = data.loopUpgrade4Scaling ?? loopUpgrade4Scaling;

        loopsPerSec = baseLoopsPerSec ** loopExponent * loopMultiplier;}
      catch (error) {
        console.error("Could not load save:", error);}}

loadGame();
setInterval(saveGame, 1000);
