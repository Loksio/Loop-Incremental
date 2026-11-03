let loops = 0
let loopsPerSec = 1
let baseLoopsPerSec = 1
let loopMultiplier = 1
let loopExponent = 1
let loopUpgrade1UpgradeLevel = 0
let loopUpgrade1UpgradeCost = 10
let loopUpgrade1Scaling = 1.2
let loopUpgrade2UpgradeLevel = 0
let loopUpgrade2UpgradeCost = 1000
let loopUpgrade2Scaling = 2.2
let loopUpgrade3UpgradeLevel = 0
let loopUpgrade3UpgradeCost = 20000
let loopUpgrade3Scaling = 5
let loopUpgrade4UpgradeLevel = 0
let loopUpgrade4UpgradeCost = 1000000
let loopUpgrade4Scaling = 10
loopsPerSec =  baseLoopsPerSec ** loopExponent * loopMultiplier

setInterval(() => {loops = loopsPerSec / 100 + loops; loopsText.textContent = `Loops: ${formatNumber(loops)} (Loops/ sec: ${formatNumber(loopsPerSec)})` ; }, 10)

function formatShortNumber (number) {
    if (number < 10) return number.toFixed(2);
    if (number < 100) return number.toFixed(1);
    return number.toFixed(0);}
function formatNumber (number) {
    if (number >= 1e12) return formatShortNumber(number / 1e12) + "t";
    if (number >= 1e9) return formatShortNumber(number / 1e9) + "b";
    if (number >= 1e6) return formatShortNumber(number / 1e6) + "m";
    if (number >= 1e3) return formatShortNumber(number / 1e3) + "k";
    return Math.round(number).toString();}

const loopsText = document.querySelector("p");

const loopUpgrade1LevelText = document.querySelector(".loop-upgrade-1-level");
loopUpgrade1LevelText.textContent = "Level: " + loopUpgrade1UpgradeLevel;
const loopUpgrade1EffectText = document.querySelector(".loop-upgrade-1-effect");
loopUpgrade1EffectText.textContent = `Effect: +${loopUpgrade1UpgradeLevel} Loops`;
const loopUpgradeButton1 = document.querySelector("button.loop-upgrade-1");
loopUpgradeButton1.textContent = "Cost: " + formatNumber(loopUpgrade1UpgradeCost)
loopUpgradeButton1.addEventListener("click", () => {
    if (loops >= loopUpgrade1UpgradeCost) {
        loops -= loopUpgrade1UpgradeCost
        loopUpgrade1UpgradeLevel += 1
        loopUpgrade1LevelText.textContent = "Level: " + loopUpgrade1UpgradeLevel;
        loopUpgrade1EffectText.textContent = `Effect: +${loopUpgrade1UpgradeLevel} Loops`;
        loopUpgrade1UpgradeCost = Math.ceil(loopUpgrade1UpgradeCost * loopUpgrade1Scaling)
        baseLoopsPerSec += 1
        loopsPerSec = baseLoopsPerSec ** loopExponent * loopMultiplier
        loopUpgradeButton1.textContent = "Cost: " + formatNumber(loopUpgrade1UpgradeCost)}})

const loopUpgrade2LevelText = document.querySelector(".loop-upgrade-2-level");
loopUpgrade2LevelText.textContent = "Level: " + loopUpgrade2UpgradeLevel;
const loopUpgrade2EffectText = document.querySelector(".loop-upgrade-2-effect");
loopUpgrade2EffectText.textContent = `Effect: ${formatNumber(2 ** loopUpgrade2UpgradeLevel)}x Loops`;
const loopUpgradeButton2 = document.querySelector("button.loop-upgrade-2");
loopUpgradeButton2.textContent = "Cost: " + formatNumber(loopUpgrade2UpgradeCost)
loopUpgradeButton2.addEventListener("click", () => {
    if (loops >= loopUpgrade2UpgradeCost) {
        loops -= loopUpgrade2UpgradeCost
        loopUpgrade2UpgradeLevel += 1
        loopUpgrade2LevelText.textContent = "Level: " + loopUpgrade2UpgradeLevel;
        loopUpgrade2EffectText.textContent = `Effect:  ${formatNumber(2 ** loopUpgrade2UpgradeLevel)}x Loops`;
        loopUpgrade2UpgradeCost = Math.ceil(loopUpgrade2UpgradeCost * loopUpgrade2Scaling)
        loopMultiplier *= 2
        loopsPerSec = baseLoopsPerSec ** loopExponent * loopMultiplier
        loopUpgradeButton2.textContent = "Cost: " + formatNumber(loopUpgrade2UpgradeCost)}})

const loopUpgrade3LevelText = document.querySelector(".loop-upgrade-3-level");
loopUpgrade3LevelText.textContent = `Level: ${loopUpgrade3UpgradeLevel} / 5`;
const loopUpgrade3EffectText = document.querySelector(".loop-upgrade-3-effect");
loopUpgrade3EffectText.textContent = `Effect:  -${0.01 * loopUpgrade3UpgradeLevel} Scaling`;
const loopUpgradeButton3 = document.querySelector("button.loop-upgrade-3");
loopUpgradeButton3.textContent = "Cost: " + formatNumber(loopUpgrade3UpgradeCost)
loopUpgradeButton3.addEventListener("click", () => {
    if (loopUpgrade3UpgradeLevel < 5) {
        if (loops >= loopUpgrade3UpgradeCost) {
            loops -= loopUpgrade3UpgradeCost
            loopUpgrade3UpgradeLevel += 1
            loopUpgrade3LevelText.textContent = `Level:  ${loopUpgrade3UpgradeLevel} /5 `;
            loopUpgrade3EffectText.textContent = `Effect: -${0.01 * loopUpgrade3UpgradeLevel} Scaling `;
            loopUpgrade3UpgradeCost = Math.ceil(loopUpgrade3UpgradeCost * loopUpgrade3Scaling)
            loopUpgrade1Scaling -= 0.01
            loopUpgrade2Scaling -= 0.01
            loopUpgrade1UpgradeCost = Math.ceil(10 * loopUpgrade1Scaling ** loopUpgrade1UpgradeLevel)
            loopUpgrade2UpgradeCost = Math.ceil(1000 * loopUpgrade2Scaling ** loopUpgrade2UpgradeLevel)
            loopUpgradeButton3.textContent = "Cost: " + formatNumber(loopUpgrade3UpgradeCost)}}})

const loopUpgrade4LevelText = document.querySelector(".loop-upgrade-4-level");
loopUpgrade4LevelText.textContent = "Level: " + loopUpgrade4UpgradeLevel;
const loopUpgrade4EffectText = document.querySelector(".loop-upgrade-4-effect");
loopUpgrade4EffectText.textContent = `Effect: ^${1 + 0.01 * loopUpgrade4UpgradeLevel} Loops`;
const loopUpgradeButton4 = document.querySelector("button.loop-upgrade-4");
loopUpgradeButton4.textContent = "Cost: " + formatNumber(loopUpgrade4UpgradeCost)
loopUpgradeButton4.addEventListener("click", () => {
    if (loops >= loopUpgrade4UpgradeCost) {
        loops -= loopUpgrade4UpgradeCost
        loopUpgrade4UpgradeLevel += 1
        loopUpgrade4LevelText.textContent = "Level: " + loopUpgrade4UpgradeLevel;
        loopUpgrade4EffectText.textContent = `Effect:  ^${1 + 0.01 * loopUpgrade4UpgradeLevel} Loops`;
        loopUpgrade4UpgradeCost = Math.ceil(loopUpgrade4UpgradeCost * loopUpgrade4Scaling)
        loopExponent += 0.01
        loopsPerSec =  baseLoopsPerSec ** loopExponent * loopMultiplier
        loopUpgradeButton4.textContent = "Cost: " + formatNumber(loopUpgrade4UpgradeCost)}})
