function switch_watermark(status) {

    const watermark = document.getElementById("watermark");

    console.log(status);

    if (status) {
        watermark.classList.add('d-none');
    } else {
        watermark.classList.remove('d-none');
    }

}

function set_logo_image(img) {
    document.querySelector('.logo img').src = img;
}

function set_dashboard_image(img) {
    document.querySelector('.case-center .el-card.box-card.is-always-shadow').style.background = `url(${img})`;
}

function init_dashboard_card() {

    const dashboardCard = document.querySelector('.case-center .el-card.box-card.is-always-shadow');

    if (dashboardCard == null) {
        return false;
    }

    const toggle = document.createElement('div');
    toggle.setAttribute('class', 'dashboard-card-toggle');

    const toggleImg = document.createElement('img');
    toggleImg.src = 'https://www.svgrepo.com/show/380010/eye-password-show.svg';
    toggleImg.setAttribute('width', '24');

    toggle.append(toggleImg);
    dashboardCard.appendChild(toggle);

    toggle.addEventListener('click', function () {
        dashboardCard.querySelector('form').classList.toggle('d-block');
        dashboardCard.querySelector('div.footer').classList.toggle('d-flex');
    });

}