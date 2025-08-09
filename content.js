console.log("ACONG V1 Loaded!");

let switchWatermarkStatus;

// ### Init. Watermark
chrome.storage.local.get("switchWatermark", (result) => {
    switchWatermarkStatus = result.switchWatermark || false;
    //   showStatus(switchWatermarkStatus);
    console.log(`Switch Watermark: ${switchWatermarkStatus}`)
    switch_watermark(switchWatermarkStatus);
});

chrome.storage.onChanged.addListener((changes, area) => {
    if (area === "local" && changes.switchWatermark) {

        switchWatermarkStatus = changes.switchWatermark.newValue;
        switch_watermark(switchWatermarkStatus)

        console.log(`Switch Watermark (Changed): ${switchWatermarkStatus}`)
    }
});

// ### Init. Logo Image
chrome.storage.local.get("logoImage", (result) => {
    const imgUrl = result.logoImage || '/static/img/menu_logo.f252f692.svg';
    set_logo_image(imgUrl);
    console.log(`Logo Image: ${imgUrl}`)
});

chrome.storage.onChanged.addListener((changes, area) => {

    const newImage = changes.logoImage.newValue;

    if (area === "local" && changes.logoImage) {
        set_logo_image(newImage)
        console.log(`Logo Image (Changed): ${newImage}`)
    }
    
});

// ### Init. Dashboard Image
chrome.storage.local.get("dashboardImage", (result) => {
    const imgUrl = result.dashboardImage || '';
    set_dashboard_image(imgUrl);
    console.log(`Dashboard Image: ${imgUrl}`)
});

chrome.storage.onChanged.addListener((changes, area) => {

    const newImage = changes.dashboardImage.newValue;

    if (area === "local" && changes.dashboardImage) {
        set_dashboard_image(newImage)
        console.log(`Dashboard Image (Changed): ${newImage}`)
    }
    
});


// Init
init_dashboard_card();