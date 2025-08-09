const switchBtnWatermark = document.getElementById("switchBtnWatermark");
const logoImageInput = document.getElementById("logoImageInput");
const dashboardImageInput = document.getElementById("dashboardImageInput");
const colorPrimaryButtonPicker = document.getElementById("colorPrimaryButtonPicker");

// ### Watermark Listener
chrome.storage.local.get("switchWatermark", (result) => {
    switchBtnWatermark.checked = result.switchWatermark || false;
});

switchBtnWatermark.addEventListener("change", () => {;
    chrome.storage.local.set({
        switchWatermark: switchBtnWatermark.checked
    }, () => {
        console.log("switchWatermark updated to", switchBtnWatermark.checked);
    });
});

// #### Logo Image Listener
chrome.storage.local.get("logoImage", (result) => {
    logoImageInput.value = result.logoImage || '/static/img/menu_logo.f252f692.svg';
});

logoImageInput.addEventListener("keyup", (e) => {
    // console.log(e.target.value)
    chrome.storage.local.set({
        logoImage: e.target.value
    }, () => {
        console.log("Logo Image updated to", e.target.value);
    });
});

// #### Dashboard Image Listener
chrome.storage.local.get("dashboardImage", (result) => {
    dashboardImageInput.value = result.dashboardImage || '';
});

dashboardImageInput.addEventListener("keyup", (e) => {
    // console.log(e.target.value)
    chrome.storage.local.set({
        dashboardImage: e.target.value
    }, () => {
        console.log("Dashboard Image updated to", e.target.value);
    });
});